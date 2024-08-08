import type { CCallbackList } from "./shared/interfaces";

export enum ESteamNotificationSource {
	Client = 1,
	Server = 2,
}

export enum ESteamNotificationType {
	DownloadComplete = 1,
	FriendInvite = 2,
	FriendinGame = 3,
	FriendOnline = 4,
	Achievement = 5,
	Unknown1 = 6,
	SystemUpdate = 7,
	FriendMessage = 8,
	GroupChatMsg = 9,
	FriendInviteRollup = 10,
	FamilySharing = 11,
	FamilySharingPlaytimeWarning = 12,
	FamilySharingSharedGamesNowAvailable = 13,
	Screenshot = 14,
	CloudSyncFailure = 15,
	CloudSyncConflict = 16,
	IncomingVoiceChat = 17,
	Unknown2 = 18,
	GiftReceived = 19,
	ItemAnnouncement = 20,
	HardwareSurvey = 21,
	LowDiskSpace = 22,
	Unknown3 = 23,
	UnsupportedDock = 24,
	ControllerGuide = 25,
	Comment = 26,
	Wishlist = 27,
	TradeOffer = 28,
	AsyncGame = 29,
	General = 30,
	HelpRequest = 31,
	Unknown4 = 32,
	Unknown5 = 33,
	Unknown6 = 34,
	Unknown7 = 35,
	MajorSale = 36,
	TimerExpired = 37,
	ModeratorMessage = 38,
	SteamInputActionSet = 39,
	RemoteClientConnection = 40,
	RemoteClientStartGame = 41,
	StreamingClientConnection = 42,
	FamilyInvite = 43,
	PlaytimeWarning = 44,
	FamilyPurchaseRequest = 45,
	FamilyPurchaseResponse = 46,
	ParentalFeatureRequest = 47,
	ParentalPlaytimeRequest = 48,
	GRE = 49,
	ParentalFeatureResponse = 50,
	ParentalPlaytimeResponse = 51,
	RequestedGameAdded = 52,
}

// that's what I *guess* it is, no idea what this is
export enum ESteamNotificationAction {
	New = 0,
	Update = 1,
	Remove = 2,
}

export interface SteamNotification {
	bNewIndicator: boolean;
	data: any; // proto msg
	eSource: ESteamNotificationSource;
	eType: ESteamNotificationType;
	nToastDurationMS: number;
	notificationID: number;
	/**
	 * UNIX timestamp.
	 */
	rtCreated: number;
}

export interface TrayNotification {
	eType: ESteamNotificationType;
	notifications: SteamNotification[];
}

export interface NotificationTarget {
	// enum
	eFeature: number;
	fnShowModal: () => void;
	fnTray: (
		target: NotificationTarget,
		notificationsInTray: TrayNotification[],
	) => void;
	nRemoveFromTraySec: number;
	toastDurationMS: number;
	type: number;
}

/**
 * All the functions starting with `Test` may be used to test notifications.
 * Some may not work.
 */
export interface NotificationStore {
	m_LastSystemUpdateNotification: any | null;
	m_bCheckBatteryAfterResume: boolean;
	m_bShowClientItemAnnouncementToasts: boolean;
	m_bShowedHighBatteryTempNotification: boolean;
	m_bShowedLowBatteryTempNotification: boolean;
	m_bShowedRefreshLogin: boolean;
	m_bTestNotifications: boolean;
	m_cbkCurrentToast: CCallbackList;
	m_cbkNotificationTray: CCallbackList;
	m_hPendingToastTimer: number;
	m_hTrayRemoveTimer: number;
	m_iLastBatteryLevelNotification: number;
	m_mapAppOverlayToasts: Map<number, any[]>;
	m_nNextTestNotificationID: number;
	m_nUnviewedNotifications: number;
	m_rgContextsRenderingToasts: number[];
	m_rgNotificationToasts: SteamNotification[];
	m_rgNotificationTray: TrayNotification[];
	m_rgPendingToasts: any[];
	m_rtNextTrayRemove: number;

	AddAppOverlayNotification(
		appId: number,
		notificationId: number,
		type: ESteamNotificationType,
		param3: any, // data: i.proto.deserializeBinary(o)
		notificationResolvedCallback: any,
	): void;
	/**
	 * @param broadcastPermission enum ?
	 */
	AddBroadcastAvailableToWatch(appId: number, broadcastPermission: any): void;
	AddOverlaySplashScreen(appId: number): void;
	AddTimedTrialRemaining(
		appid: any,
		icon: any,
		offline: any,
		allowedSeconds: any,
		playedSeconds: any,
	): void;
	AppOverlayRunning(appId: number, value: boolean): void;
	BAnyContextRenderingToasts(): boolean;
	BAnyToastDisplayAlone(e: any[]): boolean;
	BContextRenderingToasts(e: any): boolean;
	BIsUserInGame(): boolean;
	BNextToastDisplayAlone(e: any): boolean;
	BShowToast(e: any): boolean;
	BSkipSystemUpdateNotification(e: any): boolean;
	ChooseSound(target: any, t: any): any | null;
	ClearAllToastNotifications(): void;
	ClearRemoveFromTrayTimer(): void;
	// wtf is this
	Dev_SendTestNotifications(): void;
	DispatchNextToast(): void;
	DoScreenshotNotification(e: any, t: any): any;
	ExpireToast(toast: SteamNotification): void;
	GetCurrentAppOverlayNotification(e: any): any;
	GetCurrentToastNotification(): SteamNotification | null;
	GetNotificationTargets(): any;
	GetNotificationsInTray(): any;
	IncomingVoiceChat(steamId: number, show: boolean): void;
	Init(): void;
	LoadServerToastRequiredData(steamId: number): boolean;
	MarkNotificationRead(notificationId: number): void;
	NotifyClaimSteamDeckRewards(): void;
	NotifyLowDiskSpace(folderIndex: number): void;
	NotifyTimerExpired(appId: number): void;
	/**
	 * @todo Use with System.RegisterForBatteryStateChanges, same thing
	 */
	OnBatteryLevelChange(
		flLevel: number,
		eACState: number,
		bHasBattery: boolean,
	): void;
	/**
	 * @param temperature in Celsius
	 */
	OnBatteryTemperatureChange(temperature: number): void;
	OnNewNotificationReceived(notification: SteamNotification): void;
	/**
	 * @todo Use with Notifications.RegisterForNotifications, same thing
	 */
	OnNotification(
		notificationIndex: number,
		type: ESteamNotificationType,
		data: ArrayBuffer,
	): void;
	OnNotificationUpdateReceived(
		toast: SteamNotification,
		action: ESteamNotificationAction,
	): void;
	OnScreenshotStarted(): any;
	PendingLoginRefresh(showedRefreshLogin: boolean): void;
	PlayNotificationSound(toast: SteamNotification): void;
	PopNextToastNotification(e: any): any;
	ProcessNotification(
		target: NotificationTarget,
		notification: SteamNotification,
		action: ESteamNotificationAction,
	): void;
	RemoveFromToastsWhere(callback: (toast: SteamNotification) => void): void;
	RemoveFromTrayWhere(callback: (toast: SteamNotification) => void): void;
	RemoveScreenshotNotification(screenshotHandle: number): void;
	RunDebugTestsWhenServicesReady(e: any): any;
	ScheduleRemoveFromTray(delaySeconds: number): void;
	SendPendingServerToasts(): void;
	SetContextRenderingToast(e: any, t: any): any;
	Viewed(): void;

	TestAchievement(appId: number, showProgress: boolean): void;
	TestAsyncGame(appId: number): void;
	TestCloudSyncConflict(appId: number): void;
	TestCloudSyncFailure(appId: number): void;
	TestComment(): void;
	TestDownloadComplete(appId: number): void;
	TestFamilyInvite(steamId: number): void;
	TestFamilyPurchaseRequest(steamId: number): void;
	TestFamilyPurchaseRequestResponse(steamId: number): void;
	TestFamilySharing(): void;
	TestFriendIngame(gameName: string, steamId: number): void;
	TestFriendInvite(steamId: number): void;
	TestFriendInviteRollup(newInviteCount: number): void;
	TestFriendMessage(steamId: number, messageBody: string): void;
	TestFriendOnline(steamId: number): void;
	TestGRE(): void;
	TestGeneralAnnouncement(): void;
	TestGift(steamId: number): void;
	TestGroupChatMention(steamId: number, messageBody: string): void;
	TestGroupChatMessage(steamId: number, messageBody: string): void;
	TestHardwareSurvey(): void;
	TestHelpRequest(): void;
	TestIncomingVoiceChat(): void;
	TestItemAnnouncement(steamId: number): Promise<void>;
	TestMajorSale(): void;
	TestModeratorMessage(): void;
	TestParentalFeatureRequest(steamId: number): void;
	TestParentalFeatureResponse(steamId: number): void;
	TestParentalPlaytimeRequest(steamId: number): void;
	TestParentalPlaytimeResponse(steamId: number): void;
	TestPlaytimeWarning(): void;
	TestReadControllerGuide(): void;
	TestRemoteClientConnection(): void;
	TestRemoteClientStartStream(): void;
	TestRequestedGameAdded(e: any): void;
	TestScreenshot(): void;
	TestSteamInputActionSetChanged(): void;
	TestStreamingClientConnection(): void;
	TestSystemUpdate(notificationType: 1 | 2): void;
	TestTradeOffer(): void;
	TestUnsupportedDock(): void;
	TestWishlist(appId: number): void;
}
