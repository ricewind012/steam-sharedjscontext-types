import type { CCallbackList } from "../normal/shared/interfaces";
import type { CMInterface } from "../normal/shared/CMInterface";

export interface appInfoStore {
	m_CMInterface: CMInterface;
	m_CacheStorage: any;
	m_PendingAppInfoPromise: any;
	m_PendingAppInfoResolve: any;
	m_cAppInfoRequestsInFlight: number;
	m_fnCallbackOnAppInfoLoaded: CCallbackList;
	m_mapAppInfo: Map<
		number,
		{
			m_bInitialized: boolean;
			m_dtUpdatedFromServer: {};
			m_eAppType: number;
			m_strIconURL: string;
			m_strName: string;
			m_unAppID: number;

			BIsApplicationOrTool();
			BuildAppURL(e, t);
			DeserializeFromAppOverview(e);
			DeserializeFromCacheObject(e);
			DeserializeFromMessage(e);
			SerializeToCacheObject();
		}
	>;
	m_mapRichPresenceLoc: Map<
		string,
		{
			m_appid: number;
			m_fetching: any;
			m_mapLanguages: Map<
				string,
				{
					changeListeners_: any;
					data_: Map<
						string,
						{
							changeListeners_: any;
							dehancer: any;
							diffValue_: number;
							enhancer(...args: any[]);
							equals(...args: any[]);
							hasUnreportedChange_: boolean;
							interceptors_: any;
							isBeingObserved: boolean;
							isPendingUnobservation: boolean;
							lastAccessedBy_: number;
							lowestObserverState_: number;
							name_: string;
							observers_: Set<{ undefined }>;
							onBOL: any;
							onBUOL: any;
							value_: string;

							function(e);
							function();
							function(e);
							function(e, t);
							function(e);
							function();
							function(e);
							function(e);
							function();
							function();
							function();
						}
					>;
					dehancer: any;
					enhancer_(...args: any[]);
					hasMap_: Map<
						string,
						{
							changeListeners_: any;
							dehancer: any;
							diffValue_: number;
							enhancer(...args: any[]);
							equals(...args: any[]);
							hasUnreportedChange_: boolean;
							interceptors_: any;
							isBeingObserved: boolean;
							isPendingUnobservation: boolean;
							lastAccessedBy_: number;
							lowestObserverState_: number;
							name_: string;
							observers_: Set<{ undefined }>;
							onBOL: any;
							onBUOL: Set<function>;
							value_: boolean;

							function(e);
							function();
							function(e);
							function(e, t);
							function(e);
							function();
							function(e);
							function(e);
							function();
							function();
							function();
						}
					>;
					interceptors_: any;
					keysAtom_: {
						diffValue_: number;
						isBeingObserved: boolean;
						isPendingUnobservation: boolean;
						lastAccessedBy_: number;
						lowestObserverState_: number;
						name_: string;
						observers_: Set<any>;
						onBOL: any;
						onBUOL: any;

						function();
						function();
						function();
						function();
						function();
					};
					name_: string;

					function(e, t);
					function();
					function(e);
					function(e);
					function();
					function(e, t);
					function(e);
					function(e);
					function(e);
					function(e);
					function();
					function(e);
					function(e, t);
					function(e);
					function(e, t);
					function();
					function();
					function(e, t);
					function();
				}
			>;
			m_nLastUpdated: number;

			GetAppID();
			GetTokenList(e);
			Localize(e, t);
			SubstituteParams(e, t);
		}
	>;
	m_setPendingAppInfo: Set<any>;

	BHavePendingAppInfoRequests();
	EnsureAppInfoForAppIDs(e): Promise<any>;
	FlushPendingAppInfo(): Promise<any>;
	GetAppInfo(e);
	GetCacheKeyForAppID(e);
	GetRichPresenceLoc(e);
	GetRichPresenceLocAsync(e);
	Init(e);
	IsLoadingAppID(e);
	LoadAppInfoBatch(e): Promise<any>;
	LoadAppInfoBatchFromLocalCache(e): Promise<any>;
	Localize(e, t, r);
	OnAppOverviewChange(e);
	OnGetAppsResponse(e);
	OnRichPresenceLocUpdate(e, t);
	QueueAppInfoRequest(e);
	QueueRichPresenceLocRequest(e);
	RegisterCallbackOnLoad(e);
	SaveAppInfoBatchToLocalCache(e): Promise<any>;
	SetCacheStorage(e);
}
