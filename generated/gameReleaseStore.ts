import type { CloudStorage } from "./shared/storage";

export interface gameReleaseStore {
	m_bForceCloudUpdate: boolean;
	m_cloudData: { apps: any[]; lastChangeNumber: number };
	m_cloudStorage: CloudStorage;
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
