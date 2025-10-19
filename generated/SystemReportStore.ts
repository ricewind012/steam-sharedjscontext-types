import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface SystemReportStore {
	m_bIsVisible: boolean;
	m_state: {
		bRunning: boolean;
		bSubmitting: boolean;
		eResult: number;
		sText: any;
	};

	Hide();
	Init(): Promise<any>;
	OnShowSystemReport();
	Reset();
	SaveToDesktop(e): Promise<any>;
	Show(): Promise<any>;
	Submit(e): Promise<any>;
}
