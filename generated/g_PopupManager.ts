export interface g_PopupManager {
	DebouncedSaveSavedDimensionStore_DebounceProperties: {
		hTimer: any;
		nPending: number;
	};
	m_DynamicCSSObserver: {};
	m_bSaveRequired: boolean;
	m_bShuttingDown: boolean;
	m_mapPopups: {
		changeListeners_: any;
		data_: {};
		dehancer: any;
		enhancer_(...args: any[]);
		hasMap_: {};
		interceptors_: any;
		keysAtom_: {
			diffValue_: number;
			isBeingObserved: boolean;
			isPendingUnobservation: boolean;
			lastAccessedBy_: number;
			lowestObserverState_: number;
			name_: string;
			observers_: {};
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
	};
	m_mapRestoreDetails: {};
	m_rgPopupCreatedCallbacks: function[];
	m_rgShutdownCallbacks: function[];
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
