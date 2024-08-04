export interface appInfoStore {
	m_CMInterface: {
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
		m_setConnectedServers: Set<number>;
		m_setEMsgHandlers: Set<number>;
		m_setServiceMethodHandlers: Set<string>;
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
	m_CacheStorage: any;
	m_PendingAppInfoPromise: any;
	m_PendingAppInfoResolve: any;
	m_cAppInfoRequestsInFlight: number;
	m_fnCallbackOnAppInfoLoaded: {
		m_vecCallbacks: any[];

		ClearAllCallbacks();
		CountRegistered();
		Dispatch(...e);
		Register(e);
	};
	m_mapAppInfo: {
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
	};
	m_mapRichPresenceLoc: {
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
	};
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
