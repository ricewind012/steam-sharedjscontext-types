import type { CMInterface } from "../normal/shared/CMInterface";

export interface trendingStore {
	m_CMInterface: CMInterface;
	m_data: { appid: number; rgAccountIDs: number[]; totalFriends: number }[];
	m_nLastFetchTimeMS: number;
	m_nNextFetchTimeMS: number;
	m_params: {
		nFailureRetryIntervalMS: number;
		nMaxLifetimeMS: number;
		nStorageVersion: number;
		storage: {
			GetString(e): Promise<any>;
			RemoveObject(e): Promise<any>;
			StoreString(e, t): Promise<any>;
		};
		strStorageKey: string;
	};
	m_timeoutNextFetch: number;

	Init(e): Promise<any>;
	OnDataLoad(e): Promise<any>;
	RequestStoreItems(e): Promise<any>;
}
