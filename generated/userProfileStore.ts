import type { CMInterface } from "../normal/shared/CMInterface";
import type { SteamLocalStorage } from "../normal/shared/storage";

export interface userProfileStore {
	m_CMInterface: CMInterface;
	m_FriendEquippedProfileItemsChangedHandler: { invoke(n, r); unregister() };
	m_equippedItems: any;
	m_keyboardSkins: any;
	m_localStorage: SteamLocalStorage;
	m_mapKeyboardSkinThemes: Map<any, any>;
	m_notifyClaimRewardsTimer: any;
	m_promiseEquipped: any;
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
