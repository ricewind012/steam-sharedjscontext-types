import cdp from "chrome-remote-interface";
import cp from "node:child_process";
import fs from "node:fs";
import path from "node:path";

/**
 * Globals that do not end with "store"
 */
const OTHER_GLOBALS = [
	"App",
	"ClientConnectionAPI",
	"FocusNavController",
	"LocalizationManager",
	"MainWindowBrowserManager",
	"RemotePlayStore_SteamUI",
	"StoreItemCache",
	"appAchievementProgressCache",
	"appDetailsCache",
	"cloudStorageInternalState",
	"g_GRS",
	"g_PopupManager",
];

const connection = await cdp({
	host: "127.0.0.1",
	port: 8080,
	target: (e) => e.find((e) => e.title === "SharedJSContext"),
});

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
			e !== 'cookieStore' &&
			e !== 'SteamUIStore' &&
			e.toLowerCase().endsWith('store'))
	`);
	for (const store of [...stores, ...OTHER_GLOBALS].sort()) {
		const output = await run(
			`ActuallyConvertToTSInterface(${store}, '${store}')`,
		);
		if (!output.result.value) {
			console.error("[%s] %s", store, output.result.description.split("\n")[0]);
			continue;
		}

		const file = path.join("generated", `${store}.ts`);
		fs.writeFileSync(file, output?.result?.value);
		console.log("[%s] done", store);
	}

	cp.spawnSync("npx", ["@biomejs/biome", "lint", "--write", "generated"]);
	cp.spawnSync("npx", ["@biomejs/biome", "format", "--write", "generated"]);

	connection.close();
}

await main();
