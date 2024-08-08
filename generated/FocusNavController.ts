import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";

export interface FocusNavController {
	m_ActiveContext: any;
	m_DefaultContext: any;
	m_LastActiveContext: any;
	m_UnhandledButtonEventsCallbacks: CCallbackList;
	m_bGlobalEventsInitialized: boolean;
	m_bRestoringHistory: boolean;
	m_bShowDebugFocusRing: SubscribableValue<boolean>;
	m_fnCatchAllGamepadInput: any;
	m_fnGamepadEventUpdateBatcher(...args: any[]);
	m_navigationSource: SubscribableValue<{
		eActivationSourceType: number;
		nActiveGamepadIndex: number;
		nLastActiveGamepadIndex: number;
	}>;
	m_navigationSourceSupportsFocus: {
		m_fnMap(...args: any[]);
		m_mappedSubscribableValue: SubscribableValue<boolean>;
		m_mappedUnsubscribe: any;
		m_originalSubscribableValue: SubscribableValue<{
			eActivationSourceType: number;
			nActiveGamepadIndex: number;
			nLastActiveGamepadIndex: number;
		}>;
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
