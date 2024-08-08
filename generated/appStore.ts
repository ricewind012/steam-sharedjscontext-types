import type { CMInterface } from "../normal/shared/CMInterface";

export interface appStore {
	m_bIsInitialized: boolean;
	m_cm: CMInterface;
	m_collator: {};
	m_mapApps: Map<
		number,
		{
			LOG_CHANGE(...args: any[]);
			__cachedLastPlayedSection: any;
			__cachedLastPlayedTime: any;
			__cachedReleaseYearString: any;
			app_type: number;
			appid: number;
			canonicalAppType: number;
			display_name: string;
			header_filename: string;
			icon_data: any;
			icon_data_format: any;
			icon_hash: string;
			library_capsule_filename: any;
			library_id: string;
			local_cache_version: number;
			m_gameid: any;
			m_setStoreCategories: Set<number>;
			m_setStoreTags: Set<number>;
			m_ulGameId: any;
			mastersub_appid: any;
			mastersub_includedwith_logo: any;
			metacritic_score: any;
			minutes_playtime_forever: number;
			minutes_playtime_last_two_weeks: number;
			most_available_clientid: string;
			mru_index: number;
			number_of_copies: number;
			optional_parent_app_id: any;
			owner_account_id: any;
			per_client_data: {
				bytes_downloaded: string;
				bytes_total: string;
				client_name: string;
				clientid: string;
				display_status: number;
				installed: boolean;
				is_available_on_current_platform: boolean;
				status_percentage: number;
			}[];
			review_percentage_with_bombs: number;
			review_percentage_without_bombs: number;
			review_score_with_bombs: number;
			review_score_without_bombs: number;
			rt_custom_image_mtime: any;
			rt_last_time_locally_played: number;
			rt_last_time_played: number;
			rt_last_time_played_or_installed: number;
			rt_original_release_date: number;
			rt_purchased_time: number;
			rt_recent_activity_time: number;
			rt_steam_release_date: number;
			rt_store_asset_mtime: number;
			selected_clientid: string;
			shortcut_override_appid: any;
			site_license_site_name: any;
			size_on_disk: string;
			sort_as: string;
			steam_hw_compat_category_packed: number;
			subscribed_to: boolean;
			third_party_mod: any;
			visible_in_game_list: boolean;
			vr_only: any;
			vr_supported: any;
			xbox_controller_support: number;

			BHasObservables();
		}
	>;
	m_mapStoreTagLocalization: Map<number, { name: string; tagid: number }>;
	m_msTagMapLoaded: number;

	GetAppOverviewByAppID(e);
	GetAppOverviewByGameID(e);
	GetCachedVerticalCapsuleURL(e);
	GetCustomHeroImageURLs(e);
	GetCustomImageURLs(e, t);
	GetCustomLandcapeImageURLs(e);
	GetCustomLogoImageURLs(e);
	GetCustomVerticalCapsuleURLs(e);
	GetIconURLForApp(e);
	GetPregeneratedVerticalCapsuleForApp(e);
	GetStorePageURLForApp(e);
	GetTopStoreTags(e);
	GetVerticalCapsuleURLForApp(e);
	Init(e): Promise<any>;
	RefreshTagsIfNeeded();
}
