export interface ClientConnectionAPI {
	m_bAllowAccountMismatch: boolean;
	m_connection: {
		m_ClientInfo: {
			bFriendsUIEnabled: boolean;
			rgSupportedMessages: string[];
			ulVersion: string;
			unAccountID: number;
		};
		m_bClientConnectionFailed: boolean;
		m_bReady: boolean;
		m_bSecurityException: boolean;
		m_iCallSeq: number;
		m_mapWaitingCallbacks: Map<any, any>;
		m_promiseConnect: any;
		m_socket: {};

		BSendMsg(e, t);
		Connect();
		OnSocketMessage(e);
		SendMsgAndAwaitResponse(e);
	};
	m_mapCacheSubscribedApp: Map<number, {}>;

	BClientAccountMatches();
	BClientConnected();
	BClientSupportsMessage(e);
	BIsSubscribedApp(e);
	FailureResult(e = 2);
	GenericEResultCall(e);
	OpenChatRoomGroupDialog(e, t);
	OpenFriendChatDialog(e);
	OpenFriendsDialog();
	OpenSteamURL(e);
	SetAllowAccountMismatch(e);
	ShowChatRoomGroupInvite(e);
}
