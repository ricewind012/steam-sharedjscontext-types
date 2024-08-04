export interface FocusNavController {
	m_ActiveContext: any;
	m_DefaultContext: any;
	m_LastActiveContext: any;
	m_UnhandledButtonEventsCallbacks: {
		m_vecCallbacks: any[];

		ClearAllCallbacks();
		CountRegistered();
		Dispatch(...e);
		Register(e);
	};
	m_bGlobalEventsInitialized: boolean;
	m_bRestoringHistory: boolean;
	m_bShowDebugFocusRing: {
		m_callbacks: {
			m_vecCallbacks: any[];

			ClearAllCallbacks();
			CountRegistered();
			Dispatch(...e);
			Register(e);
		};
		m_currentValue: boolean;
		m_fnEquals: any;

		Set(e);
		Subscribe(e);
	};
	m_fnCatchAllGamepadInput: any;
	m_fnGamepadEventUpdateBatcher(...args: any[]);
	m_navigationSource: {
		m_callbacks: {
			m_vecCallbacks: any[];

			ClearAllCallbacks();
			CountRegistered();
			Dispatch(...e);
			Register(e);
		};
		m_currentValue: {
			eActivationSourceType: number;
			nActiveGamepadIndex: number;
			nLastActiveGamepadIndex: number;
		};
		m_fnEquals(...args: any[]);

		Set(e);
		Subscribe(e);
	};
	m_navigationSourceSupportsFocus: {
		m_fnMap(...args: any[]);
		m_mappedSubscribableValue: {
			m_callbacks: {
				m_vecCallbacks: any[];

				ClearAllCallbacks();
				CountRegistered();
				Dispatch(...e);
				Register(e);
			};
			m_currentValue: boolean;
			m_fnEquals: any;

			Set(e);
			Subscribe(e);
		};
		m_mappedUnsubscribe: any;
		m_originalSubscribableValue: {
			m_callbacks: {
				m_vecCallbacks: any[];

				ClearAllCallbacks();
				CountRegistered();
				Dispatch(...e);
				Register(e);
			};
			m_currentValue: {
				eActivationSourceType: number;
				nActiveGamepadIndex: number;
				nLastActiveGamepadIndex: number;
			};
			m_fnEquals(...args: any[]);

			Set(e);
			Subscribe(e);
		};
		m_subscriptionRefCount: number;

		Subscribe(e);
	};
	m_rgAllContexts: any[];
	m_rgGamepadInputSources: any[];

	BGlobalGamepadButton(e);
	BIsInActiveContext(e);
	BIsRestoringHistory();
	BatchedUpdate(e);
	BindGlobalEventHandlers();
	BlurNavTree(e);
	ChangeNavigationSource(e, t);
	CreateContext(e, t);
	DispatchVirtualButtonClick(e, t);
	DispatchVirtualButtonPress(e);
	DispatchVirtualGamepad(e, t);
	FindAnActiveContext();
	FireUnhandledGamepadEventCallbacks(e);
	GetActiveContext();
	GetDefaultContext();
	GetEventTarget(e, t, r = !1);
	GetShowDebugFocusRing();
	IsActiveFocusNavTree(e);
	IsActiveNavTree(e);
	NewGamepadNavigationTree(e, t);
	OnButtonActionInternal(e, t, r, n, o, l, a, s);
	OnContextActivated(e);
	OnContextDeactivated(e, t);
	OnGamepadNavigationTreeActivated(e, t = !1);
	OnGamepadNavigationTreeFocused(e, t, r = !1);
	RegisterForUnhandledButtonDownEvents(e);
	RegisterGamepadNavigationTree(e, t, r);
	RegisterInputSource(e);
	RestoreHistoryTransaction(e): Promise<any>;
	SetCatchAllGamepadInput(e);
	SetGamepadEventUpdateBatcher(e);
	SetShowDebugFocusRing(e);
	SetSuppressGamepadInput(e);
	TakeFocusChangingIFrame();
}
