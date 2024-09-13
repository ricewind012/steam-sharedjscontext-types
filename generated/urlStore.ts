export interface urlStore {
	m_nGeneration: number;
	m_steamUrls: {
		AllNotifications: { feature: number; regexMatchURL: RegExp; url: string };
		AppHoverPublic: { feature: number; regexMatchURL: RegExp; url: string };
		AppHoverPublicFull: { feature: number; regexMatchURL: RegExp; url: string };
		AppNewsPage: { feature: number; regexMatchURL: RegExp; url: string };
		AsyncGames: { feature: number; regexMatchURL: RegExp; url: string };
		AvatarBaseURL: { feature: number; regexMatchURL: RegExp; url: string };
		BaseURLSharedCDN: { feature: number; regexMatchURL: RegExp; url: string };
		Chat: { feature: number; regexMatchURL: RegExp; url: string };
		ChatRoot: { feature: number; regexMatchURL: RegExp; url: string };
		ClaimEntitlements: { feature: number; regexMatchURL: RegExp; url: string };
		ClanAssetCDN: { feature: number; regexMatchURL: RegExp; url: string };
		CommentNotifications: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		CommunityAddFriends: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		CommunityCDN: { feature: number; regexMatchURL: RegExp; url: string };
		CommunityFilePage: { feature: number; regexMatchURL: RegExp; url: string };
		CommunityFriendsThatPlay: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		CommunityFrontPage: { feature: number; regexMatchURL: RegExp; url: string };
		CommunityGroupSearch: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		CommunityHome: { feature: number; regexMatchURL: RegExp; url: string };
		CommunityImages: { feature: number; regexMatchURL: RegExp; url: string };
		CommunityInventory: { feature: number; regexMatchURL: RegExp; url: string };
		CommunityMarket: { feature: number; regexMatchURL: RegExp; url: string };
		CommunityMarketApp: { feature: number; regexMatchURL: RegExp; url: string };
		CommunityRecommendations: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		CommunityScreenshots: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		CommunitySingleScreenshot: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		CurrentlyPlayedWith: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		EventAnnouncementPage: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		FamilyManagement: { feature: number; regexMatchURL: RegExp; url: string };
		FamilySharing: { feature: number; regexMatchURL: RegExp; url: string };
		GameHub: { feature: number; regexMatchURL: RegExp; url: string };
		GameHubBroadcasts: { feature: number; regexMatchURL: RegExp; url: string };
		GameHubDiscussions: { feature: number; regexMatchURL: RegExp; url: string };
		GameHubGuides: { feature: number; regexMatchURL: RegExp; url: string };
		GameHubNews: { feature: number; regexMatchURL: RegExp; url: string };
		GameHubReviews: { feature: number; regexMatchURL: RegExp; url: string };
		GlobalAchievementStatsPage: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		GlobalLeaderboardsPage: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		GroupSteamIDPage: { feature: number; regexMatchURL: RegExp; url: string };
		HardwareSurvey: { feature: number; regexMatchURL: RegExp; url: string };
		HelpAppPage: { feature: number; regexMatchURL: RegExp; url: string };
		HelpChangeEmail: { feature: number; regexMatchURL: RegExp; url: string };
		HelpChangePassword: { feature: number; regexMatchURL: RegExp; url: string };
		HelpFAQ: { feature: number; regexMatchURL: RegExp; url: string };
		HelpFrontPage: { feature: number; regexMatchURL: RegExp; url: string };
		HelpVacBans: { feature: number; regexMatchURL: RegExp; url: string };
		HelpWithLogin: { feature: number; regexMatchURL: RegExp; url: string };
		HelpWithLoginInfo: { feature: number; regexMatchURL: RegExp; url: string };
		HelpWithSteamGuardCode: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		ItemStoreDetailPage: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		ItemStorePage: { feature: number; regexMatchURL: RegExp; url: string };
		JoinTrade: { feature: number; regexMatchURL: RegExp; url: string };
		LegalInformation: { feature: number; regexMatchURL: RegExp; url: string };
		LibraryAppDetails: { feature: number; regexMatchURL: RegExp; url: string };
		LibraryAppReview: { feature: number; regexMatchURL: RegExp; url: string };
		LibraryFeaturedBroadcasts: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		LocalSSA: { feature: number; regexMatchURL: RegExp; url: string };
		ManageGiftsPage: { feature: number; regexMatchURL: RegExp; url: string };
		ManageSteamGuard: { feature: number; regexMatchURL: RegExp; url: string };
		Mobile: { feature: number; regexMatchURL: RegExp; url: string };
		ModeratorMessages: { feature: number; regexMatchURL: RegExp; url: string };
		MyHelpRequests: { feature: number; regexMatchURL: RegExp; url: string };
		NewsHomePage: { feature: number; regexMatchURL: RegExp; url: string };
		OfficialGameGroupPage: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		ParentalBlocked: { feature: number; regexMatchURL: RegExp; url: string };
		ParentalSetup: { feature: number; regexMatchURL: RegExp; url: string };
		PendingFriends: { feature: number; regexMatchURL: RegExp; url: string };
		PendingGift: { feature: number; regexMatchURL: RegExp; url: string };
		PointsShop: { feature: number; regexMatchURL: RegExp; url: string };
		PrivacyPolicy: { feature: number; regexMatchURL: RegExp; url: string };
		RecommendGame: { feature: number; regexMatchURL: RegExp; url: string };
		RedeemWalletVoucher: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		RegisterKey: { feature: number; regexMatchURL: RegExp; url: string };
		RegisterKeyNoParams: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		SSA: { feature: number; regexMatchURL: RegExp; url: string };
		SteamAnnouncements: { feature: number; regexMatchURL: RegExp; url: string };
		SteamClientBetaBugReports: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		SteamClientBetaNewsPage: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		SteamClientBetaNewsPageFancy: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		SteamClientBetaPatchNotes: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		SteamClientNewsPage: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		SteamClientPatchNotes: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		SteamDiscussions: { feature: number; regexMatchURL: RegExp; url: string };
		SteamIDAchievementsPage: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		SteamIDAppTradingCardsPage: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		SteamIDBadgeInfo: { feature: number; regexMatchURL: RegExp; url: string };
		SteamIDBadgePage: { feature: number; regexMatchURL: RegExp; url: string };
		SteamIDBroadcastPage: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		SteamIDEditPage: { feature: number; regexMatchURL: RegExp; url: string };
		SteamIDEditPrivacyPage: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		SteamIDFriendsList: { feature: number; regexMatchURL: RegExp; url: string };
		SteamIDFriendsPage: { feature: number; regexMatchURL: RegExp; url: string };
		SteamIDGroupsPage: { feature: number; regexMatchURL: RegExp; url: string };
		SteamIDMyProfile: { feature: number; regexMatchURL: RegExp; url: string };
		SteamIDPage: { feature: number; regexMatchURL: RegExp; url: string };
		SteamLanguage: { feature: number; regexMatchURL: RegExp; url: string };
		SteamPreferences: { feature: number; regexMatchURL: RegExp; url: string };
		SteamVRHMDHelp: { feature: number; regexMatchURL: RegExp; url: string };
		SteamWorkshop: { feature: number; regexMatchURL: RegExp; url: string };
		SteamWorkshopPage: { feature: number; regexMatchURL: RegExp; url: string };
		SteamWorkshopSubscriptions: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		SteamWorkshopUpdatedSubscriptions: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		StoreAccount: { feature: number; regexMatchURL: RegExp; url: string };
		StoreAddFundsPage: { feature: number; regexMatchURL: RegExp; url: string };
		StoreAppHover: { feature: number; regexMatchURL: RegExp; url: string };
		StoreAppImages: { feature: number; regexMatchURL: RegExp; url: string };
		StoreAppPage: { feature: number; regexMatchURL: RegExp; url: string };
		StoreAppPageAddToCart: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		StoreCDN: { feature: number; regexMatchURL: RegExp; url: string };
		StoreCart: { feature: number; regexMatchURL: RegExp; url: string };
		StoreDlcPage: { feature: number; regexMatchURL: RegExp; url: string };
		StoreExplore: { feature: number; regexMatchURL: RegExp; url: string };
		StoreExploreNew: { feature: number; regexMatchURL: RegExp; url: string };
		StoreFreeToPlay: { feature: number; regexMatchURL: RegExp; url: string };
		StoreFrontPage: { feature: number; regexMatchURL: RegExp; url: string };
		StoreGameSearchPage: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		StoreGreatOnDeck: { feature: number; regexMatchURL: RegExp; url: string };
		StorePublisherPage: { feature: number; regexMatchURL: RegExp; url: string };
		StoreSpecials: { feature: number; regexMatchURL: RegExp; url: string };
		StoreStats: { feature: number; regexMatchURL: RegExp; url: string };
		StoreVR: { feature: number; regexMatchURL: RegExp; url: string };
		StoreWebMicroTxnPage: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		SupportMessages: { feature: number; regexMatchURL: RegExp; url: string };
		TextFilterSettings: { feature: number; regexMatchURL: RegExp; url: string };
		TodayPage: { feature: number; regexMatchURL: RegExp; url: string };
		TradeOffers: { feature: number; regexMatchURL: RegExp; url: string };
		UserAchievementsPage: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		UserLeaderboardsPage: {
			feature: number;
			regexMatchURL: RegExp;
			url: string;
		};
		UserStatsPage: { feature: number; regexMatchURL: RegExp; url: string };
		UserWishlist: { feature: number; regexMatchURL: RegExp; url: string };
		VideoCDN: { feature: number; regexMatchURL: RegExp; url: string };
		WatchVideo: { feature: number; regexMatchURL: RegExp; url: string };
		WebAPI: { feature: number; regexMatchURL: RegExp; url: string };
		WorkshopEula: { feature: number; regexMatchURL: RegExp; url: string };
		YearInReview: { feature: number; regexMatchURL: RegExp; url: string };
		allnotifications: { bDuplicate: boolean; feature: number; url: string };
		apphoverpublic: { bDuplicate: boolean; feature: number; url: string };
		apphoverpublicfull: { bDuplicate: boolean; feature: number; url: string };
		appnewspage: { bDuplicate: boolean; feature: number; url: string };
		asyncgames: { bDuplicate: boolean; feature: number; url: string };
		avatarbaseurl: { bDuplicate: boolean; feature: number; url: string };
		baseurlsharedcdn: { bDuplicate: boolean; feature: number; url: string };
		chat: { bDuplicate: boolean; feature: number; url: string };
		chatroot: { bDuplicate: boolean; feature: number; url: string };
		claimentitlements: { bDuplicate: boolean; feature: number; url: string };
		clanassetcdn: { bDuplicate: boolean; feature: number; url: string };
		commentnotifications: { bDuplicate: boolean; feature: number; url: string };
		communityaddfriends: { bDuplicate: boolean; feature: number; url: string };
		communitycdn: { bDuplicate: boolean; feature: number; url: string };
		communityfilepage: { bDuplicate: boolean; feature: number; url: string };
		communityfriendsthatplay: {
			bDuplicate: boolean;
			feature: number;
			url: string;
		};
		communityfrontpage: { bDuplicate: boolean; feature: number; url: string };
		communitygroupsearch: { bDuplicate: boolean; feature: number; url: string };
		communityhome: { bDuplicate: boolean; feature: number; url: string };
		communityimages: { bDuplicate: boolean; feature: number; url: string };
		communityinventory: { bDuplicate: boolean; feature: number; url: string };
		communitymarket: { bDuplicate: boolean; feature: number; url: string };
		communitymarketapp: { bDuplicate: boolean; feature: number; url: string };
		communityrecommendations: {
			bDuplicate: boolean;
			feature: number;
			url: string;
		};
		communityscreenshots: { bDuplicate: boolean; feature: number; url: string };
		communitysinglescreenshot: {
			bDuplicate: boolean;
			feature: number;
			url: string;
		};
		currentlyplayedwith: { bDuplicate: boolean; feature: number; url: string };
		eventannouncementpage: {
			bDuplicate: boolean;
			feature: number;
			url: string;
		};
		familymanagement: { bDuplicate: boolean; feature: number; url: string };
		familysharing: { bDuplicate: boolean; feature: number; url: string };
		gamehub: { bDuplicate: boolean; feature: number; url: string };
		gamehubbroadcasts: { bDuplicate: boolean; feature: number; url: string };
		gamehubdiscussions: { bDuplicate: boolean; feature: number; url: string };
		gamehubguides: { bDuplicate: boolean; feature: number; url: string };
		gamehubnews: { bDuplicate: boolean; feature: number; url: string };
		gamehubreviews: { bDuplicate: boolean; feature: number; url: string };
		globalachievementstatspage: {
			bDuplicate: boolean;
			feature: number;
			url: string;
		};
		globalleaderboardspage: {
			bDuplicate: boolean;
			feature: number;
			url: string;
		};
		groupsteamidpage: { bDuplicate: boolean; feature: number; url: string };
		hardwaresurvey: { bDuplicate: boolean; feature: number; url: string };
		helpapppage: { bDuplicate: boolean; feature: number; url: string };
		helpchangeemail: { bDuplicate: boolean; feature: number; url: string };
		helpchangepassword: { bDuplicate: boolean; feature: number; url: string };
		helpfaq: { bDuplicate: boolean; feature: number; url: string };
		helpfrontpage: { bDuplicate: boolean; feature: number; url: string };
		helpvacbans: { bDuplicate: boolean; feature: number; url: string };
		helpwithlogin: { bDuplicate: boolean; feature: number; url: string };
		helpwithlogininfo: { bDuplicate: boolean; feature: number; url: string };
		helpwithsteamguardcode: {
			bDuplicate: boolean;
			feature: number;
			url: string;
		};
		itemstoredetailpage: { bDuplicate: boolean; feature: number; url: string };
		itemstorepage: { bDuplicate: boolean; feature: number; url: string };
		jointrade: { bDuplicate: boolean; feature: number; url: string };
		legalinformation: { bDuplicate: boolean; feature: number; url: string };
		libraryappdetails: { bDuplicate: boolean; feature: number; url: string };
		libraryappreview: { bDuplicate: boolean; feature: number; url: string };
		libraryfeaturedbroadcasts: {
			bDuplicate: boolean;
			feature: number;
			url: string;
		};
		localssa: { bDuplicate: boolean; feature: number; url: string };
		managegiftspage: { bDuplicate: boolean; feature: number; url: string };
		managesteamguard: { bDuplicate: boolean; feature: number; url: string };
		mobile: { bDuplicate: boolean; feature: number; url: string };
		moderatormessages: { bDuplicate: boolean; feature: number; url: string };
		myhelprequests: { bDuplicate: boolean; feature: number; url: string };
		newshomepage: { bDuplicate: boolean; feature: number; url: string };
		officialgamegrouppage: {
			bDuplicate: boolean;
			feature: number;
			url: string;
		};
		parentalblocked: { bDuplicate: boolean; feature: number; url: string };
		parentalsetup: { bDuplicate: boolean; feature: number; url: string };
		pendingfriends: { bDuplicate: boolean; feature: number; url: string };
		pendinggift: { bDuplicate: boolean; feature: number; url: string };
		pointsshop: { bDuplicate: boolean; feature: number; url: string };
		privacypolicy: { bDuplicate: boolean; feature: number; url: string };
		recommendgame: { bDuplicate: boolean; feature: number; url: string };
		redeemwalletvoucher: { bDuplicate: boolean; feature: number; url: string };
		registerkey: { bDuplicate: boolean; feature: number; url: string };
		registerkeynoparams: { bDuplicate: boolean; feature: number; url: string };
		ssa: { bDuplicate: boolean; feature: number; url: string };
		steamannouncements: { bDuplicate: boolean; feature: number; url: string };
		steamclientbetabugreports: {
			bDuplicate: boolean;
			feature: number;
			url: string;
		};
		steamclientbetanewspage: {
			bDuplicate: boolean;
			feature: number;
			url: string;
		};
		steamclientbetanewspagefancy: {
			bDuplicate: boolean;
			feature: number;
			url: string;
		};
		steamclientbetapatchnotes: {
			bDuplicate: boolean;
			feature: number;
			url: string;
		};
		steamclientnewspage: { bDuplicate: boolean; feature: number; url: string };
		steamclientpatchnotes: {
			bDuplicate: boolean;
			feature: number;
			url: string;
		};
		steamdiscussions: { bDuplicate: boolean; feature: number; url: string };
		steamidachievementspage: {
			bDuplicate: boolean;
			feature: number;
			url: string;
		};
		steamidapptradingcardspage: {
			bDuplicate: boolean;
			feature: number;
			url: string;
		};
		steamidbadgeinfo: { bDuplicate: boolean; feature: number; url: string };
		steamidbadgepage: { bDuplicate: boolean; feature: number; url: string };
		steamidbroadcastpage: { bDuplicate: boolean; feature: number; url: string };
		steamideditpage: { bDuplicate: boolean; feature: number; url: string };
		steamideditprivacypage: {
			bDuplicate: boolean;
			feature: number;
			url: string;
		};
		steamidfriendslist: { bDuplicate: boolean; feature: number; url: string };
		steamidfriendspage: { bDuplicate: boolean; feature: number; url: string };
		steamidgroupspage: { bDuplicate: boolean; feature: number; url: string };
		steamidmyprofile: { bDuplicate: boolean; feature: number; url: string };
		steamidpage: { bDuplicate: boolean; feature: number; url: string };
		steamlanguage: { bDuplicate: boolean; feature: number; url: string };
		steampreferences: { bDuplicate: boolean; feature: number; url: string };
		steamvrhmdhelp: { bDuplicate: boolean; feature: number; url: string };
		steamworkshop: { bDuplicate: boolean; feature: number; url: string };
		steamworkshoppage: { bDuplicate: boolean; feature: number; url: string };
		steamworkshopsubscriptions: {
			bDuplicate: boolean;
			feature: number;
			url: string;
		};
		steamworkshopupdatedsubscriptions: {
			bDuplicate: boolean;
			feature: number;
			url: string;
		};
		storeaccount: { bDuplicate: boolean; feature: number; url: string };
		storeaddfundspage: { bDuplicate: boolean; feature: number; url: string };
		storeapphover: { bDuplicate: boolean; feature: number; url: string };
		storeappimages: { bDuplicate: boolean; feature: number; url: string };
		storeapppage: { bDuplicate: boolean; feature: number; url: string };
		storeapppageaddtocart: {
			bDuplicate: boolean;
			feature: number;
			url: string;
		};
		storecart: { bDuplicate: boolean; feature: number; url: string };
		storecdn: { bDuplicate: boolean; feature: number; url: string };
		storedlcpage: { bDuplicate: boolean; feature: number; url: string };
		storeexplore: { bDuplicate: boolean; feature: number; url: string };
		storeexplorenew: { bDuplicate: boolean; feature: number; url: string };
		storefreetoplay: { bDuplicate: boolean; feature: number; url: string };
		storefrontpage: { bDuplicate: boolean; feature: number; url: string };
		storegamesearchpage: { bDuplicate: boolean; feature: number; url: string };
		storegreatondeck: { bDuplicate: boolean; feature: number; url: string };
		storepublisherpage: { bDuplicate: boolean; feature: number; url: string };
		storespecials: { bDuplicate: boolean; feature: number; url: string };
		storestats: { bDuplicate: boolean; feature: number; url: string };
		storevr: { bDuplicate: boolean; feature: number; url: string };
		storewebmicrotxnpage: { bDuplicate: boolean; feature: number; url: string };
		supportmessages: { bDuplicate: boolean; feature: number; url: string };
		textfiltersettings: { bDuplicate: boolean; feature: number; url: string };
		todaypage: { bDuplicate: boolean; feature: number; url: string };
		tradeoffers: { bDuplicate: boolean; feature: number; url: string };
		userachievementspage: { bDuplicate: boolean; feature: number; url: string };
		userleaderboardspage: { bDuplicate: boolean; feature: number; url: string };
		userstatspage: { bDuplicate: boolean; feature: number; url: string };
		userwishlist: { bDuplicate: boolean; feature: number; url: string };
		videocdn: { bDuplicate: boolean; feature: number; url: string };
		watchvideo: { bDuplicate: boolean; feature: number; url: string };
		webapi: { bDuplicate: boolean; feature: number; url: string };
		workshopeula: { bDuplicate: boolean; feature: number; url: string };
		yearinreview: { bDuplicate: boolean; feature: number; url: string };
	};

	BIsSteamURL(e);
	BuildAppPointsShopURL(e);
	BuildCachedLibraryAssetURL(e, t, r);
	BuildCachedStoreAssetURL(e, t, r);
	BuildCustomAssetURL(e, t, r, n);
	BuildLibraryAssetURL(e, t, r);
	BuildSteamURL(e, ...t);
	BuildStoreAppDlcURL(e, t = null);
	BuildStoreAppURL(e, t = null);
	BuildStoreAssetURL(e, t, r);
	GetAvatarBaseURL();
	GetBaseURLSharedCDN();
	GetClanCDNAssetURL();
	GetCommunityCDNAssetURL();
	GetCommunityCDNURL();
	GetCommunityImageURL();
	GetCommunityURL();
	GetHelpURL();
	GetMatchingUrls(e);
	GetMediaCDNUrl();
	GetParentalFeature(e);
	GetParentalFeatureForFullUrl(e);
	GetStoreAppImageURL();
	GetStoreCDNURL();
	GetStoreGreatOnDeckURL();
	GetStoreIconBaseURL();
	GetStoreURL();
	GetStoreVRURL();
	GetVideoCDNAssetURL();
	GetWebApiURL();
	Init(): Promise<any>;
	NavigateToSteamURLInOwningWindow(e, t, ...r);
	ResolveURL(e, ...t);
	onURLChanges();
}
