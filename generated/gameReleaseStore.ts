export interface gameReleaseStore {
	m_bForceCloudUpdate: boolean;
	m_cloudData: { apps: any[]; lastChangeNumber: number };
	m_cloudStorage: {
		m_eNamespace: number;

		Get(e);
		GetByPrefix(e);
		GetMapForPrefix(e);
		GetObject(e): Promise<any>;
		GetString(e): Promise<any>;
		RegisterForChangeNotifications(e);
		RemoveObject(e, t, r): Promise<any>;
		StoreObject(e, t, r, n): Promise<any>;
		StoreString(e, t, r, n): Promise<any>;
	};
	m_hCloudAutorun(...args: any[]);
	m_hPrePurchasedAppChanges: { unregister(...args: any[]) };
	m_nShownAppID: number;
	m_nUpdating: number;
	m_schUpdate: {
		m_fnCallback: any;
		m_schTimer: any;

		Cancel();
		IsScheduled();
		Schedule(e, t);
	};

	GetShownAppID();
	Init(e): Promise<any>;
	Register(): Promise<any>;
}
