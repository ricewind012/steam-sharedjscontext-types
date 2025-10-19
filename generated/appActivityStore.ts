import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface appActivityStore {
	RestoreCachedActivity(...args: any[]);
	m_CMInterface: CMInterface;
	m_deckCompatibilityFeedback_EligibleApps: {};
	m_localStorage: SteamLocalStorage;
	m_mapAppActivity: Map<any, any>;
	m_rgDeckCompatibilityFeedback_Ask: any[];
	m_setAppFetchRequested: Set<any>;
	m_setAppsLoading: Set<any>;

	BAllowDeckCompatibilityFeedback(e);
	BShouldPromptForDeckCompatibilityFeedback(e);
	ClearDeckCompatibilityFeedbackAskList();
	FetchActivityHistory(e, t): Promise<any>;
	FetchLatestActivity(e, t);
	FetchLatestActivityFromServer(e, t): Promise<any>;
	GetAppActivity(e);
	GetDeckCompatibilityFeedback(e);
	Init(e);
	RequestRestoreActivity(e);
	RestoreActivity(e): Promise<any>;
	SetDeckCompatibilityFeedback(e, t): Promise<any>;
	writeDeckCompatibilityFeedbackToLocalStorage();
}
