import type { SubscribableValue } from "../normal/shared/interfaces";
import type { SteamLocalStorage } from "../normal/shared/storage";
import type { CMInterface } from "../normal/shared/CMInterface";

export interface settingsStore {
	m_BatteryPreferences: SubscribableValue<{ bShowBatteryPercentage: boolean }>;
	m_CMInterface: CMInterface;
	m_ClientSettings: {
		always_show_user_chooser: boolean;
		always_use_gamepadui_overlay: boolean;
		auto_scale_factor: number;
		bigpicture_windowed: boolean;
		broadcast_bitrate: number;
		broadcast_chat_corner: number;
		broadcast_encoding_option: number;
		broadcast_output_height: number;
		broadcast_output_width: number;
		broadcast_permissions: number;
		broadcast_record_all_audio: boolean;
		broadcast_record_all_video: boolean;
		broadcast_record_microphone: boolean;
		broadcast_show_live_reminder: boolean;
		broadcast_show_upload_stats: boolean;
		cef_remote_debugging_enabled: boolean;
		cloud_enabled: boolean;
		controller_combine_nintendo_joycons: boolean;
		controller_generic_support: boolean;
		controller_guide_button_focus_steam: boolean;
		controller_power_off_timeout: number;
		controller_ps_support: number;
		controller_switch_support: boolean;
		controller_xbox_driver: boolean;
		controller_xbox_support: boolean;
		default_ping_rate: number;
		disable_all_toasts: boolean;
		disable_toasts_in_game: boolean;
		display_name: string;
		download_peer_content: number;
		download_rate_bits_per_s: boolean;
		download_region: number;
		download_throttle_rate: number;
		download_throttle_while_streaming: boolean;
		download_while_app_running: boolean;
		enable_avif_screenshots: boolean;
		enable_dpi_scaling: boolean;
		enable_gpu_accelerated_webviews: boolean;
		enable_hardware_video_decoding: boolean;
		enable_marketing_messages: boolean;
		enable_overlay: boolean;
		enable_screenshot_notification: boolean;
		enable_screenshot_sound: boolean;
		enable_shader_background_processing: boolean;
		enable_shader_precache: boolean;
		enable_ui_sounds: boolean;
		force_deck_perf_tab: boolean;
		force_fake_mandatory_update: boolean;
		force_oobe: boolean;
		g_background_a_m: boolean;
		g_background_a_s: boolean;
		g_background_audio: number;
		g_background_br: number;
		g_background_max_keep: string;
		g_background_mk: {
			alt_key: boolean;
			ctrl_key: boolean;
			display_name: string;
			key_code: number;
			meta_key: boolean;
			shift_key: boolean;
		};
		g_background_mode: number;
		g_background_path: string;
		g_background_tg: {
			alt_key: boolean;
			ctrl_key: boolean;
			display_name: string;
			key_code: number;
			meta_key: boolean;
			shift_key: boolean;
		};
		g_background_time_resolution: number;
		g_max_fps: number;
		game_notes_enable_spellcheck: boolean;
		gamescope_allow_tearing: boolean;
		gamescope_app_target_framerate: number;
		gamescope_composite_debug: boolean;
		gamescope_disable_framelimit: boolean;
		gamescope_disable_mura_correction: boolean;
		gamescope_display_refresh_rate: number;
		gamescope_enable_app_target_framerate: boolean;
		gamescope_force_composite: boolean;
		gamescope_hdr_visualization: number;
		gamescope_include_steamui_in_screenshots: boolean;
		gamescope_use_game_refresh_rate_in_steam: boolean;
		gamestream_hardware_video_encode: boolean;
		hdr_compat_testing: boolean;
		in_client_beta: boolean;
		is_external_display: boolean;
		is_steam_sideloaded: boolean;
		jumplist_flags: number;
		library_disable_community_content: boolean;
		library_display_icon_in_game_list: boolean;
		library_display_size: number;
		library_low_bandwidth_mode: boolean;
		library_low_perf_mode: boolean;
		library_whats_new_show_only_product_updates: boolean;
		max_scale_factor: number;
		min_scale_factor: number;
		music_download_high_quality: boolean;
		music_pause_on_app_start: boolean;
		music_pause_on_voice_chat: boolean;
		music_playlist_notification: boolean;
		music_volume: number;
		needs_steam_service_repair: boolean;
		no_save_personal_info: boolean;
		oobe_test_mode_enabled: boolean;
		overlay_fps_counter_corner: number;
		overlay_fps_counter_high_contrast: boolean;
		overlay_key: {
			alt_key: boolean;
			ctrl_key: boolean;
			display_name: string;
			key_code: number;
			meta_key: boolean;
			shift_key: boolean;
		};
		overlay_restore_browser_tabs: boolean;
		overlay_scale_interface: boolean;
		overlay_tabs: string;
		overlay_toolbar_list_view: boolean;
		override_browser_composer_mode: number;
		play_sound_on_toast: boolean;
		preferred_monitor: string;
		ready_to_play_includes_streaming: boolean;
		restrict_auto_updates: boolean;
		restrict_auto_updates_end: number;
		restrict_auto_updates_start: number;
		run_at_startup: boolean;
		save_uncompressed_screenshots: boolean;
		screenshot_items_per_row: number;
		screenshot_key: {
			alt_key: boolean;
			ctrl_key: boolean;
			display_name: string;
			key_code: number;
			meta_key: boolean;
			shift_key: boolean;
		};
		screenshots_path: string;
		server_ping_rate: number;
		setting_validation_bool: boolean;
		setting_validation_enum: number;
		setting_validation_float: number;
		setting_validation_int32: number;
		setting_validation_string: string;
		setting_validation_uint32: number;
		setting_validation_uint64: string;
		shader_precached_size: string;
		show_copy_count_in_library: boolean;
		show_family_sharing_notifications: boolean;
		show_screenshot_manager: boolean;
		show_steam_deck_info: boolean;
		show_store_content_on_home: boolean;
		show_timestamps_in_console: boolean;
		skip_steamvr_install_dialog: boolean;
		small_mode: boolean;
		smooth_scroll_webviews: boolean;
		start_in_big_picture_mode: boolean;
		start_page: string;
		startup_movie_id: string;
		startup_movie_local_path: string;
		startup_movie_shuffle: boolean;
		startup_movie_used_for_resume: boolean;
		steam_cef_gpu_blocklist_disabled: boolean;
		steam_input_configurator_error_msg_enable: boolean;
		steam_networking_share_ip: number;
		steam_os_underscan_enabled: boolean;
		steam_os_underscan_level: number;
		steamos_cec_enabled: boolean;
		steamos_cec_wake_on_resume: boolean;
		steamos_magnifier_scale: number;
		steamos_status_led_brightness: number;
		steamos_tdp_limit: number;
		steamos_tdp_limit_enabled: boolean;
		steamos_wifi_debug: boolean;
		steamos_wifi_force_wpa_supplicant: boolean;
		system_bluetooth_enabled: boolean;
		turn_off_controller_on_exit: boolean;
		voice_mic_device_name: string;
		voice_mic_input_gain: number;
		voice_push_to_talk_key: {
			alt_key: boolean;
			ctrl_key: boolean;
			display_name: string;
			key_code: number;
			meta_key: boolean;
			shift_key: boolean;
		};
		voice_push_to_talk_setting: number;
		voice_speaker_output_gain: number;
		web_browser_home: string;
	};
	m_CommunityPreferences: {
		bParenthesizeNicknames: boolean;
		bTextFilterIgnoreFriends: boolean;
		content_descriptor_preferences: {
			content_descriptors_to_exclude: {
				content_descriptorid: number;
				timestamp_added: any;
			}[];
		};
		eTextFilterSetting: number;
	};
	m_FriendSettings: {
		b24HourClock: boolean;
		bAlwaysNewChatWindow: boolean;
		bAnimatedAvatars: boolean;
		bCategorizeInGameFriendsByGame: boolean;
		bCompactFriendsList: boolean;
		bCompactQuickAccess: boolean;
		bDisableEmbedInlining: boolean;
		bDisableRoomEffects: boolean;
		bDisableSpellcheck: boolean;
		bDoNotDisturbMode: boolean;
		bForceAlphabeticFriendSorting: boolean;
		bHideCategorizedFriends: boolean;
		bHideOfflineFriendsInTagGroups: boolean;
		bNotifications_EventsAndAnnouncements: boolean;
		bNotifications_ShowChatRoomNotification: boolean;
		bNotifications_ShowIngame: boolean;
		bNotifications_ShowMessage: boolean;
		bNotifications_ShowOnline: boolean;
		bRememberOpenChats: boolean;
		bSignIntoFriends: boolean;
		bSounds_EventsAndAnnouncements: boolean;
		bSounds_PlayChatRoomNotification: boolean;
		bSounds_PlayIngame: boolean;
		bSounds_PlayMessage: boolean;
		bSounds_PlayOnline: boolean;
		featuresEnabled: {
			DoNotDisturb: number;
			FriendsFilter: number;
			LoaderWindowSynchronization: number;
			NewVoiceHotKeyState: number;
			NonFriendMessageHandling: number;
			PersonaNotifications: number;
			ServerVirtualizedMemberLists: number;
			SteamworksChatAPI: number;
		};
		nChatFlashMode: number;
		nChatFontSize: number;
	};
	m_MonitorInfo: any;
	m_NotificationSettings: {
		notification_targets: number;
		notification_type: number;
	}[];
	m_Settings: {
		bChangeBetaEnabled: boolean;
		bCompatEnabled: boolean;
		bCompatEnabledForOtherTitles: boolean;
		bDisplayIsExternal: boolean;
		bDisplayIsUsingAutoScale: boolean;
		bEnableSoftProcessKill: boolean;
		bFamilyGroupsEnabled: boolean;
		bIsInClientBeta: boolean;
		bIsInDesktopUIBeta: boolean;
		bIsSteamSideload: boolean;
		bIsValveEmail: boolean;
		bUnderscanEnabled: boolean;
		eClientBetaState: number;
		flAutoDisplayScaleFactor: number;
		flCurrentDisplayScaleFactor: number;
		flCurrentUnderscanLevel: number;
		flMaxDisplayScaleFactor: number;
		flMinDisplayScaleFactor: number;
		nAvailableBetas: number;
		nSelectedBetaID: number;
		strCompatTool: string;
		strDisplayName: string;
		strSelectedBetaName: string;
		vecAvailableClientBetas: { nBetaID: number; strName: string }[];
		vecNightModeScheduledHours: { nHour: number; strDisplay: string }[];
		vecValidAutoUpdateRestrictHours: { nHour: number; strDisplay: string }[];
		vecValidDownloadRegions: { nRegionID: number; strRegionName: string }[];
	};
	m_StorePreferences: {
		content_descriptor_preferences: { content_descriptors_to_exclude: any[] };
		eReviewScorePreference: number;
		provide_deck_feedback: number;
	};
	m_bSteamIsInTournamentMode: boolean;
	m_bWindowed: boolean;
	m_localStorage: SteamLocalStorage;
	m_setDeferredSettings: Set<any>;
	m_strTimeZoneID: SubscribableValue<string>;

	BIsConnectedToSteam();
	CommunityPreferencesToMessage(e);
	GetClientSetting(e);
	Init(e): Promise<any>;
	InitDefaultCommunityContentDescriptorPreferences();
	InitDefaultStoreContentDescriptorPreferences();
	IsDeferred(e);
	IsSteamInTournamentMode();
	MergeCommunityPreferences(e, t);
	MergeNotificationPreferences(e);
	MergeStorePreferences(e, t);
	function(...r);
	function(...r);
	SetCommunityPreferences(e);
	SetDeferred(e);
	SetStorePreferences(e);
	ToggleNotificationPreference(e, t);
	UpdateCommunityPreference(e, t);
	UpdateCommunityPreferences(e);
	UpdateFriendSetting(e, t);
	UpdateFriendSettings(e);
}
