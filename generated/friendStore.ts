import type { CMInterface } from "../normal/shared/CMInterface";

export interface friendStore {
	k_strPlayerCacheKey: string;
	m_CMInterface: CMInterface;
	m_FriendsUIFriendStore: any;
	m_Storage: any;
	m_mapPlayerCache: Map<any, any>;
	m_ownedGamesCache: any;

	BShouldCachePlayer(e);
	GetCountFriendsInGame(e);
	GetCountFriendsPlayingGames();
	GetFriendState(e);
	GetFriendsInGame(e);
	GetMaxCountFriendsInGame();
	GetOwnedGames(e);
	Init(e, t): Promise<any>;
	InitPlayerCache(): Promise<any>;
	IsLibraryAccessDenied(e);
	RefreshOwnedGames(e);
}
