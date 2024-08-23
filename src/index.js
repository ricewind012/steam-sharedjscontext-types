import cdp from "chrome-remote-interface";
import cp from "node:child_process";
import fs from "node:fs";
import path from "node:path";

/**
 * Globals that do not have a detectable name.
 */
const OTHER_GLOBALS = [
	"App",
	"ClientConnectionAPI",
	"FocusNavController",
	"LocalizationManager",
	"MainWindowBrowserManager",
	"RemotePlayStore_SteamUI",
	"SteamClient",
	"StoreItemCache",
	"appAchievementProgressCache",
	"appDetailsCache",
	"cloudStorageInternalState",
];
const GENERATED_DIR = "generated";

const connection = await cdp({
	host: "127.0.0.1",
	port: 8080,
	target: (e) => e.find((e) => e.title === "SharedJSContext"),
});
const options = process.argv.slice(2);

const checkOption = (arg) => options.some((e) => e === arg);
const readFile = (file) => fs.readFileSync(file).toString();

const run = async (expression) =>
	await connection.Runtime.evaluate({
		expression,
		awaitPromise: true,
		returnByValue: true,
	});
const runCdpFile = async (file) =>
	await runWithResult(readFile(path.join("src", file)));
const runWithResult = async (expression) =>
	(await run(expression)).result.value;

async function main() {
	await runCdpFile("ConvertToTSInterface.js");

	const stores = await runWithResult(`
		Object.keys(window).filter(
			(e) =>
				e !== "cookieStore" &&
				(e.toLowerCase().endsWith("store") || e.startsWith("g_")),
		);
	`);
	for (const store of [...stores, ...OTHER_GLOBALS].sort()) {
		const output = await run(
			`ActuallyConvertToTSInterface(${store}, '${store}')`,
		);
		if (!output.result.value) {
			console.error("[%s] %s", store, output.result.description.split("\n")[0]);
			continue;
		}

		const file = path.join(GENERATED_DIR, `${store}.ts`);
		fs.writeFileSync(file, output?.result?.value);
		console.log("[%s] done", store);
	}
	cp.spawnSync("npx", ["@biomejs/biome", "check", "--write", GENERATED_DIR]);

	if (checkOption("-c") || checkOption("--commit")) {
		const steamVersion = await runWithResult(
			"(async () => (await SteamClient.System.GetSystemInfo()).nSteamVersion)()",
		);
		const cmds = [
			["git", ["add", GENERATED_DIR]],
			["git", ["commit", "-m", `generate types to ${steamVersion}`]],
		];

		for (const cmd of cmds) {
			cp.spawnSync(...cmd);
		}
	}

	connection.close();
}

await main();
