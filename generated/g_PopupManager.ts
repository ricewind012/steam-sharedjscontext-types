export interface g_PopupManager {
	m_DynamicCSSObserver: {};
	m_bSaveRequired: boolean;
	m_bShuttingDown: boolean;
	m_mapPopups: Map<any, any>;
	m_mapRestoreDetails: Map<any, any>;
	m_rgPopupCreatedCallbacks: any[];
	m_rgShutdownCallbacks: any[];
	m_unCurrentAccountID: number;

	AddPopupCreatedCallback(e);
	AddShutdownCallback(e);
	AddTrackedPopup(e);
	BAnyMenuHasFocus();
	BAnyPopupHasFocus();
	BShuttingDown();
	ClearSavedDimensionStore();
	ClosePopupsOwnedByBrowser(e);
	GetExistingPopup(e);
	GetLocalStorageKey();
	GetPopupForWindow(e);
	GetPopups();
	GetRestoreDetails(e);
	LoadSavedDimensionStore();
	RemoveTrackedPopup(e);
	SaveSavedDimensionStore();
	SetCurrentLoggedInAccountID(e);
	SetRestoreDetails(e, t, r);
}
