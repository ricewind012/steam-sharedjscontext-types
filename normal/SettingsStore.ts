import type { CMInterface, SubscribableValue } from "./shared/interfaces";

export enum ETextFilterSetting {
	SteamLabOptedOut = 0,
	Enabled = 1,
	EnabledAllowProfanity = 2,
	Disabled = 3,
}

export enum EUserReviewScorePreference {
	Unset = 0,
	IncludeAll = 1,
	ExcludeBombs = 2,
}

export enum EProvideDeckFeedbackPreference {
	Unset = 0,
	Yes = 1,
	No = 2,
}

export interface BatteryPreferences {
	bShowBatteryPercentage: boolean;
}

export interface CommunityPreferences {
	bParenthesizeNicknames: boolean;
	bTextFilterIgnoreFriends: boolean;
	content_descriptor_preferences: {
		content_descriptors_to_exclude: {
			content_descriptorid: number;
			timestamp_added: number;
		}[];
		eTextFilterSetting: ETextFilterSetting;
	};
}

export interface StorePreferences {
	content_descriptor_preferences: {
		content_descriptors_to_exclude: any[];
	};
	eReviewScorePreference: EUserReviewScorePreference;
	provide_deck_feedback: EProvideDeckFeedbackPreference;
}

export interface SettingsStore {
	m_BatteryPreferences: SubscribableValue<BatteryPreferences>;
	m_CMInterface: CMInterface;
	m_ClientSettings: any; // CMsgClientSettings
	m_CommunityPreferences: CommunityPreferences;
	m_FriendSettings: any; // FriendSettingsChange
	m_MonitorInfo: any | undefined; // CMsgMonitorInfo
	m_NotificationSettings: {
		notification_targets: number;
		/**
		 * @todo enum
		 */
		notification_type: number;
	}[];
	m_Settings: any; // SteamSettings
	m_StorePreferences: StorePreferences;
	m_bSteamIsInTournamentMode: boolean;
	m_bWindowed: boolean;
	/**
	 * @todo NOT CloudStorage
	 */
	m_localStorage: {
		GetString(e: any): any;
		RemoveObject(e: any): any;
		StoreString(e: any, t: any): any;
	};
	m_setDeferredSettings: Set<any>;
	m_strTimeZoneID: SubscribableValue<string>;

	/**
	 * @returns `false` if connected to Steam, `true` otherwise.
	 */
	BIsConnectedToSteam(): boolean;
	CommunityPreferencesToMessage(prefs: CommunityPreferences): any; // ProtoBuf message
	GetBatteryPreferences(): BatteryPreferences;
	GetClientSetting(setting: string): any;
	Init(e: any): any;
	InitDefaultCommunityContentDescriptorPreferences(): any;
	InitDefaultStoreContentDescriptorPreferences(): any;
	IsDeferred(value: any): boolean;
	IsSteamInTournamentMode(): boolean;
	MergeCommunityPreferences(e: any, t: any): any;
	MergeNotificationPreferences(e: any): any;
	MergeStorePreferences(e: any, t: any): any;
	RefreshMonitorInfo(): void;
	SetBatteryPreferences(prefs: BatteryPreferences): void;
	SetCommunityPreferences(prefs: CommunityPreferences): void;
	SetDeferred(value: any): void;
	SetStorePreferences(prefs: StorePreferences): void;
	SetWindowedMode(value: boolean): void;
	ToggleNotificationPreference(e: any, t: any): void;
	UpdateCommunityPreference(e: any, t: any): any;
	UpdateCommunityPreferences(e: any): any;
	UpdateFriendSetting(e: any, t: any): any;
	UpdateFriendSettings(e: any): any;
}
