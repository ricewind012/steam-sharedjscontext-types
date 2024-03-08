import { EBrowserType } from "./shared/enums";
import { BrowserContext } from "./shared/interfaces";

enum ENotificationPosition {
	BottomRight = 3,
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
		eWindowType: EBrowserType;
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
}

export default interface SteamUIStore {
	WindowStore: {
		OverlayWindows: SteamUIWindow[];
		SteamUIWindows: SteamUIWindow[];
	};
}
