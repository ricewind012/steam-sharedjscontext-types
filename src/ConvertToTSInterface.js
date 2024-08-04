function ConvertToTSInterface(obj) {
	if (!obj) {
		return;
	}

	let vars = Object.keys(obj)
		.sort()
		.map((e) => {
			let m = obj[e];
			if (m === null || m === undefined) {
				return `${e}: any`;
			}

			if (typeof m == "function") {
				return e + (m.toString().match(/^\(.*?\)/g) || "(...args: any[])");
			}

			let arrayType = typeof m[0];
			arrayType = arrayType == "undefined" ? "any" : arrayType;

			return `${e}: ${
				typeof m == "object"
					? Array.isArray(m)
						? `${arrayType}[]`
						: "{" + ConvertToTSInterface(m, e) + "}"
					: typeof m
			}`;
		})
		.join("\n");
	let funcs = Reflect.ownKeys(obj.__proto__)
		.filter((e) => typeof e == "string")
		.sort()
		.map((e) => obj[e])
		.filter((e) => typeof e == "function")
		.map((e) =>
			e
				.toString()
				.match(/^(async )?\w+\(.*?\){/g)?.[0]
				?.replace(/\{$/, ""),
		)
		.filter(Boolean)
		.map((e) =>
			e.startsWith("async ") ? `${e.replace(/^async /, "")}: Promise<any>` : e,
		)
		.join("\n");

	return [vars, funcs].join("\n\n");
}

function ActuallyConvertToTSInterface(obj, name) {
	return `export interface ${name} { ${ConvertToTSInterface(obj)} }`;
}
