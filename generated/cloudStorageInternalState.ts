import type { CMInterface } from "../normal/shared/CMInterface";

export interface cloudStorageInternalState {
	m_CMInterface: CMInterface;
	m_bUseLongerBackoffDelay: boolean;
	m_downloadTimer: any;
	m_mapChangeCallbacks: Map<number, object>;
	m_mapCustomConflictResolutionMethods: Map<string, function>;
	m_mapDirtyKeys: Map<number, object>;
	m_mapFirstSyncPromiseResolvers: Map<any, any>;
	m_mapNamespaces: Map<number, string>;
	m_mapStorage: Map<number, object>;
	m_nLastSuccessfulSyncTime: number;
	m_nLatestEntryTimestamp: number;
	m_nRequestFailures: number;
	m_uploadTimer: any;

	Delete(e, t, r, n): Promise<any>;
	EnsureSubscribedToNamespace(e): Promise<any>;
	Get(e, t);
	GetByPrefix(e, t);
	GetCurrentTimestamp();
	Init(e): Promise<any>;
	NotifySyncPromises(e, t): Promise<any>;
	RegisterCustomConflictResolutionMethod(e, t);
	RegisterForChangeNotifications(e, t);
	ScheduleUpload(e);
	StoreEntry(e, t): Promise<any>;
	Upsert(e, t, r, n, i): Promise<any>;
	WaitForSync(e): Promise<any>;
	WriteNamespaceToDisk(e, t): Promise<any>;
	WriteNamespacesToDisk(e, t): Promise<any>;
}
