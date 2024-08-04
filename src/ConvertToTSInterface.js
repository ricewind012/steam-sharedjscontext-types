function ConvertToTSInterface(obj) {
	if (!obj) {
		return;
	}

	const GetVecType = (vec) => {
		const vecType = typeof [...vec][0];
		return vecType === "undefined" ? "any" : vecType;
	};

	const vars = Object.keys(obj)
		.sort()
		.map((e) => {
			const m = obj[e];
			if (m === null || m === undefined) {
				return `${e}: any`;
			}

			if (typeof m === "function") {
				return e + (m.toString().match(/^\(.*?\)/g) || "(...args: any[])");
			}

			if (typeof m !== "object") {
				return `${e}: ${typeof m}`;
			}

			if (Array.isArray(m)) {
				return `${e}: ${GetVecType(m)}[]`;
			}

			if (m instanceof Set) {
				return `${e}: Set<${GetVecType(m)}>`;
			}

			// normal object
			return `${e}: {${ConvertToTSInterface(m, e)}}`;
		})
		.join("\n");
	const funcs = Reflect.ownKeys(obj.__proto__)
		.filter((e) => typeof e === "string")
		.sort()
		.map((e) => obj[e])
		.filter((e) => typeof e === "function")
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
