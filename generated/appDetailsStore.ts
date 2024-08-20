import type { CMInterface } from "../normal/shared/CMInterface";

export interface appDetailsStore {
	m_CMInterface: CMInterface;
	m_mapAppData: Map<
		number,
		{
			appDetailsSpotlight: any;
			associationData: any;
			bLoadingAchievments: boolean;
			cRegistered: number;
			customImageInfo: any;
			customImageInfoRtime: number;
			descriptionsData: any;
			details: {
				achievements: {
					nAchieved: number;
					nTotal: number;
					vecAchievedHidden: any[];
					vecHighlight: any[];
					vecUnachieved: any[];
				};
				bAvailableContentOnStore: boolean;
				bCanMoveInstallFolder: boolean;
				bCloudAvailable: boolean;
				bCloudEnabledForAccount: boolean;
				bCloudEnabledForApp: boolean;
				bCloudSyncOnSuspendAvailable: boolean;
				bCloudSyncOnSuspendEnabled: boolean;
				bCommunityMarketPresence: boolean;
				bControllerSurveyFilledOut: boolean;
				bEnableAllowDesktopConfiguration: boolean;
				bFreeRemovableLicense: boolean;
				bGamepadRequired: boolean;
				bHasAIGeneratedContent: boolean;
				bHasAllLegacyCDKeys: boolean;
				bHasAnyLocalContent: boolean;
				bHasDifferentCopies: boolean;
				bHasLockedPrivateBetas: boolean;
				bIsExcludedFromSharing: boolean;
				bIsSubscribedTo: boolean;
				bIsThirdPartyUpdater: boolean;
				bOverlayEnabled: boolean;
				bOverrideInternalResolution: boolean;
				bRemotePlayTogether: boolean;
				bRequiresLegacyCDKey: boolean;
				bShowCDKeyInMenus: boolean;
				bShowControllerConfig: boolean;
				bStorePagePublished: boolean;
				bSupportsCDKeyCopyToClipboard: boolean;
				bWorkshopVisible: boolean;
				deckDerivedProperties: {
					gamescope_frame_limiter_not_supported: boolean;
					hdr_support: number;
					non_deck_display_glyphs: boolean;
					primary_player_is_controller_slot_0: boolean;
					requires_h264: boolean;
					requires_internet_for_setup: boolean;
					requires_internet_for_singleplayer: boolean;
					requires_manual_keyboard_invoke: boolean;
					requires_non_controller_launcher_nav: boolean;
					small_text: boolean;
					supported_input: number;
				};
				eAppOwnershipFlags: number;
				eAppUpdateError: number;
				eAutoUpdateValue: number;
				eBackgroundDownloads: number;
				eCloudStatus: number;
				eCloudSync: number;
				eControllerRumblePreference: number;
				eDisplayStatus: number;
				eEnableThirdPartyControllerConfiguration: number;
				eSteamInputControllerMask: number;
				iInstallFolder: number;
				lDiskUsageBytes: number;
				lDlcUsageBytes: number;
				libraryAssets: {
					logoPosition: {
						nHeightPct: number;
						nWidthPct: number;
						pinnedPosition: string;
					};
					strCapsuleImage: string;
					strHeaderImage: string;
					strHeroBlurImage: string;
					strHeroImage: string;
					strLogoImage: string;
				};
				nBuildID: number;
				nCompatToolPriority: number;
				nPlaytimeForever: number;
				nScreenshots: number;
				rtLastTimePlayed: number;
				rtLastUpdated: number;
				rtPurchased: number;
				selectedLanguage: { strDisplayName: string; strShortName: string };
				strCloudBytesAvailable: string;
				strCloudBytesUsed: string;
				strCompatExperiment: string;
				strCompatToolDisplayName: string;
				strCompatToolName: string;
				strDeveloperName: string;
				strDeveloperURL: string;
				strDisplayName: string;
				strExternalSubscriptionURL: string;
				strFallbackHeaderImage: string;
				strFlatpakAppID: string;
				strHomepageURL: string;
				strInstallFolder: string;
				strLaunchOptions: string;
				strLockedBySteamID: string;
				strManualURL: string;
				strOwnerSteamID: string;
				strResolutionOverride: string;
				strSelectedBeta: string;
				strSteamDeckBlogURL: string;
				strStoreHeaderImage: string;
				unAppID: number;
				unEntitledContentApp: number;
				unMemberCopies: number;
				unMembersPlaying: number;
				unTimedTrialSecondsAllowed: number;
				unTimedTrialSecondsPlayed: number;
				vecBetas: any[];
				vecChildConfigApps: any[];
				vecDLC: any[];
				vecDeckCompatTestResults: {
					test_loc_token: string;
					test_result: number;
				}[];
				vecLanguages: { strDisplayName: string; strShortName: string }[];
				vecLegacyCDKeys: any[];
				vecMusicAlbums: any[];
				vecPlatforms: string[];
				vecScreenShots: any[];
			};
			hAppDetails: { unregister(...args: any[]) };
			listeners: any[];
			screenshots: any;
			socialMediaData: any;
		}
	>;
	m_mapRecentlyLaunchedApps: Map<any, any>;
	m_setDetailsInProgress: Set<any>;

	BAchievementIsHiddenAndAchieved(e, t);
	BHasMarketPresence(e);
	BHasRecentlyLaunched(e);
	BIsWorkshopVisible(e);
	CMInterface();
	ClearCustomLogoPosition(e);
	GetAchievements(e);
	GetAppData(e);
	GetAppDetails(e);
	GetAppDetailsSpotlight(e);
	GetAppScreenshots(e);
	GetAssociations(e);
	GetCustomLogoPosition(e);
	GetDescriptions(e);
	GetHeaderImages(e);
	GetHeaderImagesForAppId(e, t, r);
	GetHeroBlurImages(e);
	GetHeroBlurImagesForAppId(e, t, r);
	GetHeroImages(e);
	GetHeroImagesForAppId(e, t, r);
	GetLogoImages(e);
	GetLogoImagesForAppId(e, t, r);
	GetSocialMediaData(e);
	Init(e);
	MarkAppAsRecentlyLaunched(e);
	RegisterForAppData(e, t);
	RequestAppDetails(e): Promise<any>;
	RequestAppDetailsSpotlight(e): Promise<any>;
	RequestAppScreenshots(e): Promise<any>;
	RequestCustomImageInfo(e): Promise<any>;
	SaveCustomLogoPosition(e, t): Promise<any>;
	UnregisterForAppData(e, t);
	ValidateCustomImageInfo(e);
}
