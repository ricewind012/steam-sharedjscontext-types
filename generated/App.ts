export interface App {
	m_CurrentUser: {
		NotificationCounts: {
			async_game_updates: number;
			comments: number;
			gifts: number;
			help_request_replies: number;
			inventory_items: number;
			invites: number;
			moderator_messages: number;
			offline_messages: number;
			trade_offers: number;
		};
		bHWSurveyPending: boolean;
		bIsLimited: boolean;
		bIsOfflineMode: boolean;
		bPromptToChangePassword: boolean;
		bSupportAckOnlyMessages: boolean;
		bSupportAlertActive: boolean;
		bSupportPopupMessage: boolean;
		strAccountBalance: string;
		strAccountBalancePending: string;
		strAccountName: string;
		strClientInstanceID: string;
		strFamilyGroupID: string;
		strSteamID: string;
	};
	m_bFinishedStage1: boolean;
	m_bHaveShownSupportAlertModal: boolean;
	m_bServicesInitialized: boolean;
	m_bStartedStage2: boolean;
	m_bSupportAlertModalActive: boolean;
	m_bWasEverLoggedIn: boolean;
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
	m_eLoginState: number;

	BFinishedInitStageOne();
	BHardwareSurveyPending();
	BHasAckOnlyActiveSupportAlerts();
	BHasActiveSupportAlerts();
	BHasCurrentUser();
	BIsFamilyGroupMember(e);
	BIsInFamilyGroup();
	BIsInOOBE();
	BIsOfflineMode();
	BMustShowSupportAlertDialog();
	BSupportAlertDialogActive();
	BWasEverLoggedIn();
	CloseSupportAlertsModal();
	GetCloudStorageForLibrary();
	GetCurrentUser();
	GetFamilyGroupID();
	GetFamilyGroupName();
	GetServicesInitialized();
	Init(e): Promise<any>;
	InitStage2(): Promise<any>;
	OptOutOfSurvey();
	SendSurvey();
	ShowSupportAlertsModal();
	WaitForServicesInitialized(): Promise<any>;
}
