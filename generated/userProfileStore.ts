import type { CMInterface } from "../normal/shared/CMInterface";
import type { SteamLocalStorage } from "../normal/shared/storage";

export interface userProfileStore {
	m_CMInterface: CMInterface;
	m_FriendEquippedProfileItemsChangedHandler: { invoke(r, n); unregister() };
	m_equippedItems: {
		animated_avatar: { profile_colors: any[] };
		avatar_frame: { profile_colors: any[] };
		mini_profile_background: { profile_colors: any[] };
		profile_background: { profile_colors: any[] };
		profile_modifier: { profile_colors: any[] };
		steam_deck_keyboard_skin: { profile_colors: any[] };
	};
	m_keyboardSkins: any;
	m_localStorage: SteamLocalStorage;
	m_mapKeyboardSkinThemes: Map<any, any>;
	m_notifyClaimRewardsTimer: any;
	m_promiseEquipped: Promise<any>;
	m_startupMovies: any;
	m_steamDeckRegistration: any;
	m_strCachedKeyboardTheme: any;

	BHasClaimedSteamDeckRewards(e);
	BIsValidSteamDeckSerialNumber(e);
	CheckClaimSteamDeckRewards();
	ClaimSteamDeckRewards(e, t): Promise<any>;
	DownloadMovie(e): Promise<any>;
	EquipKeyboardSkin(e): Promise<any>;
	ForceRefreshEquippedItems();
	GetEquippedItems();
	GetEquippedProfileItemsForUser(e): Promise<any>;
	GetKeyboardSkinTheme();
	GetKeyboardSkins();
	GetProfileItemsOwned(e): Promise<any>;
	GetStartupMovies();
	GetSteamDeckRegistration();
	IgnoreSteamDeckRewardsPrompt();
	Init(e): Promise<any>;
	NotifyToClaimSteamDeckRewards(e);
	PopulateStartupMovies();
	RemoveMovieFromDisk(e): Promise<any>;
	SetStartupMovie(e): Promise<any>;
}
