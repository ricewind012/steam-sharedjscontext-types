import type { FC, ReactNode } from "react";
import { CommonUIModule } from "@steambrew/client";

const vecExports: any[] = Object.values(CommonUIModule);

interface RadioGroupProps {
	children?: ReactNode;
	classNames?: string;
	disabled?: boolean;
	value?: boolean;
}

export const RadioGroup: FC<RadioGroupProps> = vecExports.find((e) =>
	e.toString().includes("Shared_Radio_Group"),
);

interface RadioProps {
	children?: ReactNode;
	disabled?: boolean;
	onChange?: (checked: boolean) => void;
	value?: boolean;
}

export const Radio: FC<RadioProps> = vecExports.find((e) =>
	e.toString().includes("RadioButton"),
);
