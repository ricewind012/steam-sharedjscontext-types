import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface consoleStore {
	m_listenHandle: any;
	m_nLineCounter: number;
	m_rgCommandHistory: any[];
	m_rgConsoleSpew: any[];

	AddSpewLine(e, t);
	Init();
	Reset();
	StartListening();
	StopListening();
}
