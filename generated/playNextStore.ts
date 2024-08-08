import type { CMInterface } from "../normal/shared/CMInterface";

export interface playNextStore {
	m_CMInterface: CMInterface;
	m_LocalStorage: Storage;
	m_bFresh: boolean;
	m_bPlayNextRequestInFlight: boolean;
	m_cachedPlayNext: { appids: number[]; last_update_time: number };
	m_nIgnoredChecksum: number;
	m_nLastFetchTime: number;
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
