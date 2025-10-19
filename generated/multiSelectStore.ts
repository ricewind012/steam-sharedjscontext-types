import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface multiSelectStore {
	m_anchor: any;
	m_bShouldAutoSelectAnchor: any;
	m_lastRangeSelection: any;
	m_mapOfSelectedApps: Map<any, any>;
}
