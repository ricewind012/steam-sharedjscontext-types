import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface playNextStore {
	m_CMInterface: CMInterface;
	m_LocalStorage: SteamLocalStorage;
	m_bFresh: boolean;
	m_bPlayNextRequestInFlight: any;
	m_cachedPlayNext: { appids: number[]; last_update_time: number };
	m_nIgnoredChecksum: number;
	m_nLastFetchTime: any;
	m_nNextAllowableRetry: number;
	m_rgLocalIgnoredAppIDs: any[];

	GetPlayNext();
	GetSuggestionsToShow(e);
	Init(e): Promise<any>;
	LastIgnoredApps(e);
	LoadCacheFromLocalStorage(): Promise<any>;
	MaybeUpdatePlayNextAsync(): Promise<any>;
	SaveCacheToLocalStorage(): Promise<any>;
}
