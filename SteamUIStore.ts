import {
	BrowserContext,
	CCallbackList,
	SubscribableValue,
} from "./shared/interfaces";

enum ENotificationPosition {
	TopLeft,
	TopRight,
	BottomLeft,
	BottomRight,
}

enum EWindowType {
	MainGamepadUI,
	OverlayGamepadUI,
	Keyboard,
	ControllerConfigurator,
	VR,
	MainDesktopUI,
	DesktopLogin,
	OverlayDesktopUI,
	SteamChinaReviewLauncher,
}

type SteamWindowSettingsSection =
	| "Account"
	| "Audio"
	| "Bluetooth"
	| "Broadcast"
	| "Cloud"
	| "Compatibility"
	| "Controller"
	| "Customization"
	| "DesktopSecurity"
	| "Developer"
	| "Display"
	| "Downloads"
	| "Family"
	| "Friends"
	| "General"
	| "Home"
	| "InGame"
	| "InGameVoice"
	| "Interface"
	| "Internal"
	| "Internet"
	| "Keyboard"
	| "Library"
	| "Music"
	| "Notifications"
	| "Power"
	| "RemotePlay"
	| "Root"
	| "Security"
	| "Storage"
	| "System"
	| "Voice";

interface SteamWindowMediaState {
	state: {
		strScreenshotHandle: string;
		nAppID: number;
	};
}

interface SteamWindowNavigator {
	type: "desktop" | "desktopoverlay" | "gamepad";
	setNavigatingToInitialRoute(value: boolean): void;

	AllCollections(): void;
	App(appId: number): void;
	AppProperties(appId: number): void;
	Chat(): void;
	Collection(name: string): void;
	Console(): void;
	Downloads(): void;
	ExternalWeb(url: string): void;
	GlobalAchievements(): void;
	Home(): void;
	Media(state: SteamWindowMediaState): void;
	MyAchievements(appId: number): void;
	Settings(section: SteamWindowSettingsSection): void;
	SteamWeb(param0, param1): void;
	SteamWebTab(url: string): void;
}

interface SteamWindowNavigator_Gamepad extends SteamWindowNavigator {
	Account(): void;
	ControllerConfigurator: {
		Main(appId: number): void;
	};
	Invites(): void;
	LibraryTab(): void;
	Login(): void;
	MTXAuth(): void;
	Reauthentication(): void;
}

interface SteamWindowNotificationPosition {
	horizontalInset: number;
	position: ENotificationPosition;
	verticalInset: number;
}

/**
 * @todo the first 2 do say `k_`, but maybe use their types instead
 */
export interface VirtualKeyboardManager {
	k_nKeyboardWindowOffset: 10;
	k_rgKeyboardLocations: [
		"center-bottom",
		"lower-left",
		"upper-left",
		"center-top",
		"upper-right",
		"lower-right",
	];
	m_OnActiveElementChanged: CCallbackList;
	m_OnActiveElementClicked: CCallbackList;
	m_bDismissOnEnter: boolean;
	m_bIsInlineVirtualKeyboardOpen: SubscribableValue<boolean>;
	m_bIsVirtualKeyboardModal: SubscribableValue<boolean>;
	m_currentVirtualKeyboardRef: any;
	m_iKeyboardLocation: number;
	m_lastActiveVirtualKeyboardRef: any;
	m_strDeadKeyCombined: any;
	m_strDeadKeyNext: any;
	m_strDeadKeyPending: any;
	m_textFieldLocation: any;

	ClearCurrentVirtualKeyboardRef();
	CreateVirtualKeyboardRef(e, t);
	GetDeadKeyPending();
	GetEnterKeyLabel();
	HandleDeadKeyDown(e, t, n);
	HandleNavOut(e);
	HandleVirtualKeyDown(e, t);
	Init();
	InitKeyboardLocation(e, t, n);
	ResetDeadKeyState();
	RestoreVirtualKeyboardForLastActiveElement();
	/**
	 * @param n -1 by default
	 */
	RotateKeyboardLocation(e, t, n);
	SelectBestModalPosition(e);
	SendClientPasteCommand();
	SetActiveVirtualKeyboardTarget(e, t, n);
	SetDismissOnEnterKey(e);
	SetTextFieldLocation(e, t, n, o);
	SetVirtualKeyboardActiveRef(e);
	SetVirtualKeyboardDone(e);
	SetVirtualKeyboardHidden(e);
	SetVirtualKeyboardShownInternal(e, t);
	SetVirtualKeyboardVisible(e);
	ShowVirtualKeyboard(e, t, n, o);
}

interface SteamUIWindow {
	/** The window's {@link Window}. */
	m_BrowserWindow: Window;

	/** Whether the BPM UI is initialized. */
	m_bIsGamepadApplicationUIInitialized: boolean;

	/**
	 * The interface used depends on the {@link SteamWindowNavigator} type:
	 *
	 * `desktop` or `desktopoverlay` - {@link SteamWindowNavigator}
	 *
	 * `gamepad` - {@link SteamWindowNavigator_Gamepad}
	 */
	m_Navigator: SteamWindowNavigator;

	/** The notifications' position & offset. */
	m_notificationPosition: SteamWindowNotificationPosition;

	m_params: {
		/** @todo Appears only when overlay ? */
		appid: number;
		browserInfo: BrowserContext;
		eWindowType: EWindowType;
		/** @todo Appears only when overlay ? */
		flDisplayScale: number;
		/** @todo Appears only when overlay ? */
		gameid: string;
		/** @todo Appears only when overlay ? */
		nScreenHeight: number;
		/** @todo Appears only when overlay ? */
		nScreenWidth: number;
		strUserAgentIdentifier: string;
	};

	m_VirtualKeyboardManager: VirtualKeyboardManager;

	BCanPopVRDashboardForCurrentPath(): boolean;
	BHasMenus(): boolean;
	BIsFocusNavActive(): boolean;
	BIsGamepadApplicationUIInitialized(): boolean;
	BIsOverlayPath(): boolean;
	BRouteMatch(e): boolean;
	BUseSeparateOverlayWindows(): boolean;
	BViewingPreLoginRoute(): boolean;
	/**
	 * @todo Creates a browser view object similiar to the one in MainWindowBrowserManager
	 * @param name Browser name.
	 * @param options BrowserViewInit
	 */
	CreateBrowserView(name: string, options: any);
	FocusApplicationRoot(): void;
	GetMainVROverlayKey;
	GetShowingGlobalModal;
	GetStoreBrowser;
	Init;
	InitFocusNavContext;
	InitGamepadApplicationUI;
	InitNavigation;
	InitializeDefaultActions;
	IsControllerConfiguratorWindow;
	IsDesktopLoginWindow;
	IsDesktopOverlayWindow;
	IsDesktopUIWindow;
	IsGamepadUIOverlayWindow;
	IsGamepadUIWindow;
	IsMainDesktopWindow;
	IsMainGamepadUIWindow;
	IsStandaloneKeyboardWindow;
	IsSteamChinaReviewLauncher;
	IsVRSimulatedOnDesktopWindow;
	IsVRWindow;
	IsVRWindowInGamescope;
	Navigate(e, t: boolean, n: boolean, o?): void;
	NavigateBack;
	NavigateHistory;
	NavigateToRunningApp;
	NavigateToStandaloneAppRunningControls;
	NavigateToSteamWeb;
	NavigateWithoutChangingFocus;
	OnApplicationUIInitComplete;
	OnHomeButtonPressed;
	OnQuickAccessButtonPressed;
	OnVirtualKeyboardShown;
	SetBrowserWindow;
	SetNavigator;
	SetNotificationPosition;
	SetShowingGlobalModal;
	SetStoreBrowserGlass;
}

export default interface SteamUIStore {
	WindowStore: {
		OverlayWindows: SteamUIWindow[];
		SteamUIWindows: SteamUIWindow[];
	};
}
