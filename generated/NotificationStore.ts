export interface NotificationStore {
	m_LastSystemUpdateNotification: any;
	m_bCheckBatteryAfterResume: boolean;
	m_bShowClientItemAnnouncementToasts: boolean;
	m_bShowedHighBatteryTempNotification: boolean;
	m_bShowedLowBatteryTempNotification: boolean;
	m_bShowedRefreshLogin: boolean;
	m_bTestNotifications: boolean;
	m_cbkCurrentToast: {
		m_vecCallbacks: function[];

		ClearAllCallbacks();
		CountRegistered();
		Dispatch(...e);
		Register(e);
	};
	m_cbkNotificationTray: {
		m_vecCallbacks: function[];

		ClearAllCallbacks();
		CountRegistered();
		Dispatch(...e);
		Register(e);
	};
	m_hPendingToastTimer: any;
	m_hTrayRemoveTimer: number;
	m_iLastBatteryLevelNotification: number;
	m_mapAppOverlayToasts: {
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
			observers_: {};
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
	m_nNextTestNotificationID: number;
	m_nUnviewedNotifications: number;
	m_rgContextsRenderingToasts: any[];
	m_rgNotificationToasts: any[];
	m_rgNotificationTray: object[];
	m_rgPendingToasts: any[];
	m_rtNextTrayRemove: number;

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
