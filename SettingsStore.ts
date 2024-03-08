import { CMInterface, SubscribableValue } from "./shared/interfaces";

interface BatteryPreferences {
	bShowBatteryPercentage: boolean;
}

interface CommunityPreferences {
	bParenthesizeNicknames: boolean;
	bTextFilterIgnoreFriends: boolean;
	content_descriptor_preferences: {
		content_descriptors_to_exclude: {
			content_descriptorid: number;
			timestamp_added: any;
		}[];
		/**
		 * @todo enum
		 */
		eTextFilterSetting: number;
	};
}

interface StorePreferences {
	content_descriptor_preferences: {
		content_descriptors_to_exclude: any[];
	};
	/**
	 * @todo enum
	 */
	eReviewScorePreference: number;
	provide_deck_feedback: number;
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
		GetString(e);
		RemoveObject(e);
		StoreString(e, t);
	};
	m_setDeferredSettings: Set<any>;
	m_strTimeZoneID: SubscribableValue<string>;

	BIsConnectedToSteam(): boolean;
	CommunityPreferencesToMessage(prefs: CommunityPreferences): any; // ProtoBuf message
	GetBatteryPreferences(): BatteryPreferences;
	GetClientSetting(setting: string): any;
	Init(e);
	InitDefaultCommunityContentDescriptorPreferences();
	InitDefaultStoreContentDescriptorPreferences();
	IsDeferred(value: any): boolean;
	IsSteamInTournamentMode(): boolean;
	MergeCommunityPreferences(e, t);
	MergeNotificationPreferences(e);
	MergeStorePreferences(e, t);
	RefreshMonitorInfo(): void;
	SetBatteryPreferences(prefs: BatteryPreferences): void;
	SetCommunityPreferences(prefs: CommunityPreferences): void;
	SetDeferred(value: any): void;
	SetStorePreferences(prefs: StorePreferences): void;
	SetWindowedMode(value: boolean): void;
	ToggleNotificationPreference(e, t): void;
	UpdateCommunityPreference(e, t);
	UpdateCommunityPreferences(e);
	UpdateFriendSetting(e, t);
	UpdateFriendSettings(e);
}
