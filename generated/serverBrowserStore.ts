export interface serverBrowserStore {
	m_listPendingPromise: any[];
	m_mapGameInfoDialogs: Map<any, any>;

	CloseGameInfoDialog(e);
	ConnectToFriendsGame(e, t);
	ConnectToFriendsGameBySteamID(e, t);
	GetGameInfoDialogs(e);
	Init(e);
	ShowServerGameInfoDialog(e);
	ShowUserGameInfoDialog(e, t);
}
