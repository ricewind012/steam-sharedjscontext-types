export interface uiStore {
	m_RecentGamesFirstApp: number;
	m_bGameListGroupedByCollection: boolean;
	m_bGameListGroupedBySharedLibraries: boolean;
	m_bGameListSortedByRecent: boolean;
	m_bIsCollectionEditorOpen: boolean;
	m_bIsCollectionRenameOpen: boolean;
	m_bIsSearchByTypePaneOpen: boolean;
	m_cm: {
		ClientServersAvailableHandler: { invoke(...args: any[]); unregister() };
		m_ServiceTransport: {
			MakeReady(...args: any[]);
			SendMsg(e, t, r);
			SendNotification(e, t);
		};
		m_bCompletedInitialConnect: boolean;
		m_bConnected: boolean;
		m_bConnectionFailed: boolean;
		m_bForceDisconnect: boolean;
		m_bLoggedOn: boolean;
		m_bPerformedInitialClockAdjustment: boolean;
		m_callbacksOnConnect: {
			m_ClientConnectionCallbacks: {
				m_vecCallbacks: function[];

				ClearAllCallbacks();
				CountRegistered();
				Dispatch(...e);
				Register(e);
			};
			m_bRunOnce: boolean;
			m_mapServerTypeCallbacks: {};

			AddCallback(e, t);
			RunAllCallbacks(e, ...t);
			RunCallbacks(e, ...t);
		};
		m_callbacksOnConnectOneTime: {
			m_ClientConnectionCallbacks: {
				m_vecCallbacks: any[];

				ClearAllCallbacks();
				CountRegistered();
				Dispatch(...e);
				Register(e);
			};
			m_bRunOnce: boolean;
			m_mapServerTypeCallbacks: {};

			AddCallback(e, t);
			RunAllCallbacks(e, ...t);
			RunCallbacks(e, ...t);
		};
		m_callbacksOnDisconnect: {
			m_ClientConnectionCallbacks: {
				m_vecCallbacks: function[];

				ClearAllCallbacks();
				CountRegistered();
				Dispatch(...e);
				Register(e);
			};
			m_bRunOnce: boolean;
			m_mapServerTypeCallbacks: {};

			AddCallback(e, t);
			RunAllCallbacks(e, ...t);
			RunCallbacks(e, ...t);
		};
		m_hEMsgRegistrationObserver(...args: any[]);
		m_hSharedConnection: number;
		m_messageHandlers: {
			m_ErrorReportingStore: {
				m_bEnabled: boolean;
				m_bInitialized: boolean;
				m_rgErrorQueue: any[];
				m_sendTimer: any;
				m_strProduct: string;
				m_strVersion: string;
				m_transport: {
					MakeReady(...args: any[]);
					SendMsg(e, t, r);
					SendNotification(e, t);
				};

				BIsBlacklisted(e);
				Init(e, t, r);
				QueueSend(e);
				ReportError(e, t): Promise<any>;
				SendErrorReport(e);
				SendErrorReports(e);
			};
			m_mapCallbacks: {};
			m_mapServiceMethodHandlers: {};
			m_rgRegisteredEMsgs: number[];
			m_rgRegisteredServiceMethodHandlers: string[];

			AddCallback(e, t, r);
			AddServiceMethodHandler(e, t);
			AddServiceNotificationHandler(e, t);
			DEBUG_LogMessageDispatch(e, t);
			DispatchMsgToHandlers(e, t);
			InstallErrorReportingStore(e);
			RegisterBaseEMessageHandler(e, t);
			RegisterEMessageAction(e, t, r);
			RegisterEMessageHandler(e, t, r);
			RegisterServiceMethodHandler(e, t);
			RegisterServiceMethodHandlerAction(e, t);
			RegisterServiceNotificationHandler(e, t);
			RegisterServiceNotificationHandlerAction(e, t);
		};
		m_nPerfClockServerMSOffset: number;
		m_nWallClockDriftMS: number;
		m_onConnect: {};
		m_rtReconnectThrottleExpiration: number;
		m_rtReconnectThrottleStart: number;
		m_setConnectedServers: {};
		m_setEMsgHandlers: {};
		m_setServiceMethodHandlers: {};
		m_steamid: {
			m_ulSteamID: {
				high: number;
				low: number;
				unsigned: boolean;

				function(e);
				function(e);
				function();
				function(e);
				function(e);
				function();
				function();
				function();
				function(e);
				function(e);
				function(e);
				function(e);
				function();
				function(e);
				function();
				function();
				function();
				function();
				function();
				function(e);
				function(e);
				function(e);
				function(e);
				function();
				function();
				function();
				function();
				function();
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function();
				function();
				function(e);
				function();
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function();
				function();
				function();
				function();
				function();
				function(e);
				function();
				function(e);
			};

			BIsClanAccount();
			BIsIndividualAccount();
			BIsValid();
			ConvertTo64BitString();
			GetAccountID();
			GetAccountType();
			GetInstance();
			GetUniverse();
			Render();
			SetAccountID(e);
			SetAccountType(e);
			SetFromComponents(e, t, r, i);
			SetInstance(e);
			SetUniverse(e);
		};
		m_strIPCountry: string;
		m_strPersonaName: string;
		m_unAccountFlags: number;

		ClearHeartbeatInterval();
		Connect();
		Disconnect();
		OnConnect();
		OnLogonInfoChanged(e);
		OnMsgRecvd(e);
		OnSharedConnectionClosed();
		OnSharedConnectionEstablished(e);
		ResetHeartbeatInterval();
		SendHeartbeat();
		SendInternal(e);
		SendMsgAndAwaitResponse(e, t);
	};
	m_collectionsAppFilter: {
		m_filterSpec: {
			filterGroups: object[];
			nFormatVersion: number;
			setSuggestions: {
				atom_: {
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
				changeListeners_: any;
				data_: {};
				dehancer: any;
				enhancer_(...args: any[]);
				interceptors_: any;
				name_: string;

				function(e);
				function();
				function(e);
				function(e);
				function(e);
				function();
				function(e, t);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function();
				function(e, t);
				function(e);
				function(e);
				function();
				function();
				function(e);
				function();
			};
			strSearchText: string;
		};

		MatchesImpl(e);
		MatchesScoredImpl(e);
	};
	m_collectionsAppFilterGamepad: {
		m_filterSpec: {
			filterGroups: object[];
			nFormatVersion: number;
			setSuggestions: {
				atom_: {
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
				changeListeners_: any;
				data_: {};
				dehancer: any;
				enhancer_(...args: any[]);
				interceptors_: any;
				name_: string;

				function(e);
				function();
				function(e);
				function(e);
				function(e);
				function();
				function(e, t);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function();
				function(e, t);
				function(e);
				function(e);
				function();
				function();
				function(e);
				function();
			};
			strSearchText: string;
		};

		MatchesImpl(e);
		MatchesScoredImpl(e);
	};
	m_currentAppFilter: {
		m_filterSpec: {
			filterGroups: object[];
			nFormatVersion: number;
			setSuggestions: {
				atom_: {
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
				changeListeners_: any;
				data_: {};
				dehancer: any;
				enhancer_(...args: any[]);
				interceptors_: any;
				name_: string;

				function(e);
				function();
				function(e);
				function(e);
				function(e);
				function();
				function(e, t);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function(e);
				function();
				function(e, t);
				function(e);
				function(e);
				function();
				function();
				function(e);
				function();
			};
			strSearchText: string;
		};

		MatchesImpl(e);
		MatchesScoredImpl(e);
	};
	m_eSelectedGameListView: number;
	m_gameListSelection: { nAppId: any; strCollectionId: string };
	m_latchedMostRecentApp: number;
	m_localStorage: {
		GetString(e): Promise<any>;
		RemoveObject(e): Promise<any>;
		StoreString(e, t): Promise<any>;
	};
	m_mapLibrarySectionCollapseState: {
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
	m_setStoreSuggestionIds: {
		atom_: {
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
		changeListeners_: any;
		data_: {};
		dehancer: any;
		enhancer_(...args: any[]);
		interceptors_: any;
		name_: string;

		function(e);
		function();
		function(e);
		function(e);
		function(e);
		function();
		function(e, t);
		function(e);
		function(e);
		function(e);
		function(e);
		function(e);
		function(e);
		function();
		function(e, t);
		function(e);
		function(e);
		function();
		function();
		function(e);
		function();
	};
	m_setStoreSuggestions: any;

	BIsSuggestionVisible(e);
	CleanupCollapseStateMap();
	EnsureLargeMode();
	GetActiveWindowInstance();
	GetRecentGamesFirstApp();
	Init(e): Promise<any>;
	InitializeAppFilter(e, t);
	IsGamepadUIWindowActive(e);
	NavigateForward();
	NavigateLibrary(e, t, r);
	PreserveNavigation();
	RestoreNavigation();
	SetCollectionEditorOpen(e);
	SetCollectionRenameOpen(e);
	SetGameListSelection(e, t);
	SetMultiSelectHooksForGameListSelection();
	SetRecentGamesFirstApp(e);
	ShowCollectionViewWithAppTypes(...e);
	ShowSharedAppsInLibrary(e, t);
	UpdateGameListSelection();
}
