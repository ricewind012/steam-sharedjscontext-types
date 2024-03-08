import { CMInterface } from "./shared/interfaces";

export interface ScreenshotStore {
	m_CMInterface: CMInterface;
	m_bOpenedItem: boolean;
	m_strAppFilter: string;

	GetCMInterface(): CMInterface;
	Init(cm: CMInterface): void;
	SetAppFilter(filter: string): void;
}
