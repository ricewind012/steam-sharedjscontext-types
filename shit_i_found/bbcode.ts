import type { FC } from "react";
import { findModuleExport } from "@steambrew/client";

interface BBCodeRendererProps {
	languageOverride?: string; // ELanguage as string or something
	/** Render error info, not show it in the console. */
	showErrorInfo?: boolean;
	text: string;
}

export const BBCodeRenderer: FC<BBCodeRendererProps> = findModuleExport(
	(m) =>
		typeof m === "function" && m.toString().includes("this.ElementAccumulator"),
);
