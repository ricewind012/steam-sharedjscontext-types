import type { CMInterface } from "../normal/shared/CMInterface";

export interface StoreItemCache {
	k_AlreadyResolvedBusy: Promise<any>;
	k_AlreadyResolvedInvalid: Promise<any>;
	k_AlreadyResolvedOK: Promise<any>;
	k_QueueWaitUntilRequestMS: number;
	k_nMaxBatchSize: number;
	m_PendingInfoPromise: any;
	m_PendingInfoResolve: any;
	m_PendingTimer: any;
	m_SteamInterface: CMInterface;
	m_bActivelyResettingCache: boolean;
	m_bInitialized: boolean;
	m_bReturnUnavailableItems: boolean;
	m_bUsePartnerAPI: boolean;
	m_mapApps: Map<
		number,
		{
			k_regexSalePage: RegExp;
			m_Assets: {
				m_strCommunityIcon: string;
				m_strHeaderURL: string;
				m_strHeroCapsuleURL: string;
				m_strHeroCapsuleURL_2x: any;
				m_strLibraryCapsuleURL: string;
				m_strLibraryCapsuleURL_2x: string;
				m_strLibraryHeroURL: string;
				m_strLibraryHeroURL_2x: any;
				m_strMainCapsuleURL: string;
				m_strPackageHeaderURL: any;
				m_strPageBackgroundURL: string;
				m_strSmallCapsuleURL: string;

				ConstructAssetURL(e, t);
				GetCommunityIconURL();
				GetHeaderURL();
				GetHeroCapsuleURL();
				GetHeroCapsuleURL_2x();
				GetLibraryCapsuleURL();
				GetLibraryCapsuleURL_2x();
				GetLibraryHeroURL();
				GetLibraryHeroURL_2x();
				GetMainCapsuleURL();
				GetPackageHeaderURL();
				GetPageBackgroundURL();
				GetSmallCapsuleURL();
			};
			m_AssetsWithoutOverrides: any;
			m_BasicInfo: any;
			m_BestPurchaseOption: {
				active_discounts: any[];
				hide_discount_pct_for_compliance: boolean;
				inactive_discounts: any[];
				user_active_discounts: any[];
			};
			m_ContentDescriptorIDs: number[];
			m_DataRequested: {
				include_assets: boolean;
				include_platforms: boolean;
				include_release: boolean;
				include_screenshots: boolean;
				include_tag_count: number;
			};
			m_Platforms: {
				steam_deck_compat_category: number;
				steamos_linux: boolean;
				vr_support: {};
				windows: boolean;
			};
			m_RelatedItems: {};
			m_ReleaseInfo: {
				original_release_date: number;
				steam_release_date: number;
			};
			m_ReviewInfo: any;
			m_Screenshots: {
				m_rgAllScreenshots: string[];
				m_rgOnlyAllAgesScreenshots: string[];

				GetAllAgesAndMatureScreenshots();
				GetOnlyAllAgesScreenshots();
			};
			m_SelfPurchaseOption: any;
			m_StoreCategories: {
				controller_categoryids: number[];
				feature_categoryids: number[];
				supported_player_categoryids: number[];
			};
			m_Trailers: any;
			m_bIsEarlyAccess: any;
			m_bIsFree: boolean;
			m_bIsFreeTemporary: any;
			m_bVisible: boolean;
			m_eAppType: number;
			m_eItemType: number;
			m_freeWeekend: {};
			m_rgIncludedAppIDs: any[];
			m_rgIncludedAppTypes: any[];
			m_rgLinks: any;
			m_rgPurchaseOptions: any;
			m_rgStoreTagIDs: any[];
			m_rgStoreTags: any[];
			m_rgSupportedLanguages: any;
			m_strInternalName: any;
			m_strName: string;
			m_strStoreURLPath: string;
			m_strStoreURLPathOverride: any;
			m_unAppID: number;
			m_unID: number;

			BCheckDataRequestIncluded(e);
			BContainDataRequest(e);
			BHasAgeSafeScreenshots();
			BHasHighlightTrailers();
			BHasSomeLanguageSupport(e);
			BHasStoreCategory(e);
			BHasTags();
			BHasTrailers();
			BIsApplicationOrTool();
			BIsComingSoon();
			BIsCustomComingSoonDisplay();
			BIsEarlyAccess();
			BIsFree();
			BIsFreeTemporary();
			BIsFreeWeekend();
			BIsPrePurchase();
			BIsReleased();
			BIsSalePage();
			BIsVisible();
			GetAllCreatorClanIDs();
			GetAllDeveloperCreatorClans();
			GetAllFranchiseCreatorClans();
			GetAllLanguagesWithSomeSupport();
			GetAllPublisherCreatorClans();
			GetAllPurchaseOptions();
			GetAllTrailers();
			GetAppID();
			GetAppIDToRun();
			GetAppType();
			GetAssets();
			GetAssetsWithoutOverrides();
			GetBestPurchaseOption();
			GetBestPurchaseOriginalPriceFormatted();
			GetBestPurchaseOriginalPriceInCents();
			GetBestPurchasePriceFormatted();
			GetBestPurchasePriceInCents();
			GetBothAllAgesSafeAndMatureScreenshots();
			GetCapsuleHeadline();
			GetCommunityDiscussionForumsURL();
			GetCommunityPageURL();
			GetContentDescriptorIDs();
			GetDataRequest();
			GetDeveloperNames();
			GetFilteredReviewSummary();
			GetFormattedSteamReleaseDate();
			GetFranchiseNames();
			GetFreeWeekendEnd();
			GetFreeWeekendPlayTextOverride();
			GetID();
			GetIncludedAppIDs();
			GetIncludedAppIDsOrSelf();
			GetIncludedAppTypes();
			GetInternalName();
			GetLinks();
			GetMicroTrailer();
			GetName();
			GetOnlyAllAgesSafeScreenshots();
			GetOriginalReleaseDateRTime();
			GetParentAppID();
			GetPlatforms();
			GetPublisherNames();
			GetReleaseDateRTime();
			GetSalePageVanityURL();
			GetSelfPurchaseOption();
			GetShortDescription();
			GetStoreCategories_Controller();
			GetStoreCategories_Features();
			GetStoreCategories_SupportedPlayers();
			GetStoreItemType();
			GetStorePageURL();
			GetStorePageURLOverride();
			GetStorePageURLWithOverride();
			GetTagIDs();
			GetTags();
			GetUnfilteredReviewSummary();
			GetUniqueID();
			HasContentDescriptorID(e);
			MergeData(e, t);
			ReplaceBestPurchaseOption(e);
		}
	>;
	m_mapAppsInFlight: Map<any, any>;
	m_mapBundleInFlight: Map<any, any>;
	m_mapBundles: Map<any, any>;
	m_mapCreators: Map<any, any>;
	m_mapCreatorsInFlight: Map<any, any>;
	m_mapHubCategories: Map<any, any>;
	m_mapHubCategoriesInFlight: Map<any, any>;
	m_mapPackageInFlight: Map<any, any>;
	m_mapPackages: Map<any, any>;
	m_mapTags: Map<any, any>;
	m_mapTagsInFlight: Map<any, any>;
	m_setPendingAppInfo: Set<any>;
	m_setPendingBundleInfo: Set<any>;
	m_setPendingCreatorInfo: Set<any>;
	m_setPendingDataRequest: {};
	m_setPendingHubCategoryInfo: Set<any>;
	m_setPendingPackageInfo: Set<any>;
	m_setPendingTagInfo: Set<any>;
	m_setUnavailableApps: Set<number>;
	m_setUnavailableBundles: Set<any>;
	m_setUnavailableCreators: Set<any>;
	m_setUnavailableDueToCountryRestrictionApps: Set<number>;
	m_setUnavailableDueToCountryRestrictionBundles: Set<any>;
	m_setUnavailableDueToCountryRestrictionPackages: Set<any>;
	m_setUnavailableHubCategories: Set<any>;
	m_setUnavailablePackages: Set<any>;
	m_setUnavailableTags: Set<any>;

	BHasApp(e, t);
	BHasBundle(e, t);
	BHasCreator(e, t);
	BHasHubCategory(e, t);
	BHasPackage(e, t);
	BHasStoreItem(e, t, r);
	BHasTag(e, t);
	BIsAppMissing(e);
	BIsAppUnavailableDueToCountryRestriction(e);
	BIsBundleMissing(e);
	BIsBundleUnavailableDueToCountryRestriction(e);
	BIsCreatorMissing(e);
	BIsHubCategoryMissing(e);
	BIsPackageMissing(e);
	BIsPackageUnavailableDueToCountryRestriction(e);
	BIsStoreItemMissing(e, t);
	BIsStoreItemUnavailableDueToCountryRestriction(e, t);
	BIsTagMissing(e);
	FlushPendingInfo(): Promise<any>;
	GetApp(e);
	GetBundle(e);
	GetCreator(e);
	GetHubCategory(e);
	GetMapForType(e);
	GetPackage(e);
	GetPreviousSupersetLoadPromise(e, t, r);
	GetReturnUnavailableItems();
	GetSteamInterface();
	GetStoreItem(e, t);
	GetStoreItemDataRequest(e, t);
	GetStoreItemWithLegacyVisibilityCheck(e, t);
	GetTag(e);
	HintLoadStoreApps(e, t): Promise<any>;
	HintLoadStoreBundles(e, t): Promise<any>;
	HintLoadStoreItems(e, t, r, n, i, a, s, o): Promise<any>;
	HintLoadStorePackages(e, t): Promise<any>;
	InternalHandleLoadStoreItems(e, t, r): Promise<any>;
	MarkStoreItemIDUnavailable(e);
	QueueAppRequest(e, t): Promise<any>;
	QueueBundleRequest(e, t): Promise<any>;
	QueueCreatorRequest(e, t): Promise<any>;
	QueueHubCategoryRequest(e, t): Promise<any>;
	QueueMultipleAppRequests(e, t): Promise<any>;
	QueueMultipleBundleRequests(e, t): Promise<any>;
	QueueMultipleCreatorRequests(e, t): Promise<any>;
	QueueMultipleHubCategoryRequests(e, t): Promise<any>;
	QueueMultiplePackageRequests(e, t): Promise<any>;
	QueueMultipleStoreItemRequests(e, t, r): Promise<any>;
	QueueMultipleTagRequests(e, t): Promise<any>;
	QueuePackageRequest(e, t): Promise<any>;
	QueueStoreItemRequest(e, t, r): Promise<any>;
	QueueTagRequest(e, t): Promise<any>;
	ReadItem(e, t);
	ReadResults(e, t);
	ResetCache(): Promise<any>;
	SetReturnUnavailableItems(e);
	SetSteamInterface(e);
	SortStoreItems(e);
}
