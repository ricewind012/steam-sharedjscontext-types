import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";

export interface NotificationStore {
	m_LastSystemUpdateNotification: any;
	m_bCheckBatteryAfterResume: boolean;
	m_bShowClientItemAnnouncementToasts: boolean;
	m_bShowedHighBatteryTempNotification: boolean;
	m_bShowedLowBatteryTempNotification: boolean;
	m_bShowedRefreshLogin: boolean;
	m_bTestNotifications: boolean;
	m_cbkNotificationTray: CCallbackList;
	m_hPendingToastTimer: any;
	m_hTrayRemoveTimer: any;
	m_iLastBatteryLevelNotification: number;
	m_mapAppOverlayToasts: Map<any, any>;
	m_nNextTestNotificationID: number;
	m_nUnviewedNotifications: number;
	m_rgNotificationToasts: any[];
	m_rgNotificationTray: any[];
	m_rgPendingToasts: any[];
	m_rtNextTrayRemove: number;
	m_setContextsRenderingToasts: Set<any>;
	m_valueCurrentToast: SubscribableValue<{ undefined }>;

	AddBroadcastAvailableToWatch(e, t);
	AddOverlaySplashScreen(e);
	AddTimedTrialRemaining(e, t, r, n, i);
	AppOverlayRunning(e, t);
	BAnyContextRenderingToasts();
	BAnyToastDisplayAlone(e);
	BContextRenderingToasts(e);
	BIsUserInGame();
	BNextToastDisplayAlone(e);
	BShowToast(e);
	BSkipSystemUpdateNotification(e);
	ChooseSound(e, t);
	ClearAllToastNotifications();
	ClearRemoveFromTrayTimer();
	Dev_SendTestNotifications();
	DispatchNextToast();
	DoScreenshotNotification(e, t);
	ExpireToast(e);
	GetCurrentAppOverlayNotification(e);
	GetCurrentToastNotification();
	GetNotificationTargets();
	GetNotificationsInTray();
	IncomingVoiceChat(e, t);
	Init();
	LoadServerToastRequiredData(e, t);
	MarkNotificationRead(e);
	NotifyClaimSteamDeckRewards();
	NotifyLowDiskSpace(e);
	NotifyTimerExpired(e);
	OnBatteryLevelChange(e, t, r);
	OnBatteryTemperatureChange(e);
	OnNewNotificationReceived(e);
	OnNotificationUpdateReceived(e, t);
	OnScreenshotStarted();
	PendingLoginRefresh(e);
	PlayNotificationSound(e);
	PopNextToastNotification(e);
	RemoveFromToastsWhere(e);
	RemoveFromTrayWhere(e);
	RemoveScreenshotNotification(e);
	RunDebugTestsWhenServicesReady(e): Promise<any>;
	ScheduleRemoveFromTray(e);
	SendPendingServerToasts();
	SetContextRenderingToast(e, t);
	TestAchievement(e, t = !1): Promise<any>;
	TestAsyncGame(e);
	TestClipDownloaded(): Promise<any>;
	TestCloudSyncConflict(e);
	TestCloudSyncFailure(e);
	TestComment(): Promise<any>;
	TestDownloadComplete(e);
	TestFamilyInvite(e);
	TestFamilyPurchaseRequest(e);
	TestFamilyPurchaseRequestResponse(e);
	TestFamilySharing();
	TestFriendIngame(e, t);
	TestFriendInvite(e);
	TestFriendInviteRollup(e);
	TestFriendMessage(e, t);
	TestFriendOnline(e);
	TestGRE();
	TestGRUM();
	TestGameRecordingStart();
	TestGameRecordingStop();
	TestGeneralAnnouncement();
	TestGift(e);
	TestGroupChatMention(e, t);
	TestGroupChatMessage(e, t);
	TestHardwareSurvey();
	TestHelpRequest();
	TestIncomingVoiceChat();
	TestItemAnnouncement(e): Promise<any>;
	TestMajorSale();
	TestModeratorMessage();
	TestParentalFeatureRequest(e);
	TestParentalFeatureResponse(e);
	TestParentalPlaytimeRequest(e);
	TestParentalPlaytimeResponse(e);
	TestPlaytimeWarning();
	TestReadControllerGuide();
	TestRemoteClientConnection();
	TestRemoteClientStartStream();
	TestRequestedGameAdded(e);
	TestScreenshot();
	TestSteamInputActionSetChanged();
	TestStreamingClientConnection();
	TestSystemUpdate(e);
	TestTradeOffer();
	TestUnsupportedDock();
	TestWishlist(e);
	Viewed();
}
