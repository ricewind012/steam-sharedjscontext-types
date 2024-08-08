const EZ_IDENTIFIABLE_OBJECT_TYPES = ["RegExp"];

function GetVecType(vec) {
	const vecType = typeof [...vec][0];
	switch (vecType) {
		case "undefined":
			return "any";
		case "object":
			return `{ ${ConvertToTSInterface(vec).match(/^0: \{ ([\w\d\s:\[\]]+) }/)?.[1]} }`;
		default:
			return vecType;
	}
}

function ConvertToTSInterface(obj) {
	if (!obj) {
		return;
	}

	const vars = Object.keys(obj)
		.sort()
		.map((e) => {
			const m = obj[e];
			const type = typeof m;

			if (m === null || m === undefined) {
				return `${e}: any`;
			}

			if (m.m_hSharedConnection) {
				return `${e}: CMInterface`;
			}

			if (m.m_vecCallbacks) {
				return `${e}: CCallbackList`;
			}

			if (m.m_currentValue !== undefined) {
				const svType = typeof m.m_currentValue;
				const svValue =
					svType === "object"
						? `{ ${ConvertToTSInterface(m.m_currentValue)} }`
						: svType;

				return `${e}: SubscribableValue<${svValue}>`;
			}

			if (type === "function") {
				return e + (m.toString().match(/^\(.*?\)/g) || "(...args: any[])");
			}

			if (type !== "object") {
				return `${e}: ${type}`;
			}

			if (Array.isArray(m)) {
				return `${e}: ${GetVecType(m)}[]`;
			}

			const objType = EZ_IDENTIFIABLE_OBJECT_TYPES.find(
				(e) => m instanceof globalThis[e],
			);
			if (objType) {
				return `${e}: ${objType}`;
			}

			if (m instanceof Promise) {
				return `${e}: Promise<any>`;
			}

			if (m instanceof Set || m.isMobXObservableSet) {
				return `${e}: Set<${GetVecType(m)}>`;
			}

			if (m instanceof Map || m.isMobXObservableMap) {
				const entries = [...m.entries()];
				if (entries.length === 0) {
					return `${e}: Map<any, any>`;
				}

				const [k, v] = entries[0];
				return `${e}: Map<${typeof k}, { ${ConvertToTSInterface(v)} }>`;
			}

			// replace "{}" with "any"
			console.log("%o is undefined => %o", e, ConvertToTSInterface(m));
			return `${e}: { ${ConvertToTSInterface(m)} }`;
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
	return `
		import type {
			CCallbackList,
			SubscribableValue,
		} from "../normal/shared/interfaces";
		import type { CMInterface } from "../normal/shared/CMInterface";

		export interface ${name} { ${ConvertToTSInterface(obj)} }
	`;
}
