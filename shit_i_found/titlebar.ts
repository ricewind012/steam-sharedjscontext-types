import type { CSSProperties, ReactNode, FC } from "react";
import { findModuleExport } from "@steambrew/client";

interface TitleBarProps {
	bOSX?: boolean;
	bForceWindowFocused?: boolean;
	children?: ReactNode;
	className?: string;
	extraActions?: ReactNode;
	hideActions?: boolean;
	hideClose?: boolean;
	hideMin?: boolean;
	hideMax?: boolean;
	onClose?: (e: PointerEvent) => void;
	onMaximize?: () => void;
	onMinimize?: (e: PointerEvent) => void;
	popup?: Window;
	style?: CSSProperties;
}

export const TitleBar: FC<TitleBarProps> = findModuleExport(
	(m) =>
		typeof m === "function" &&
		m.toString().includes('className:"title-area-highlight"'),
);
