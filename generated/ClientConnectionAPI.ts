import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface ClientConnectionAPI {
	m_connection: {
		m_ClientInfo: {
			bFriendsUIEnabled: boolean;
			rgSupportedMessages: any[];
			ulVersion: string;
			unAccountID: number;
		};
		m_bClientConnectionFailed: boolean;
		m_bReady: boolean;
		m_bSecurityException: boolean;
		m_iCallSeq: number;
		m_mapWaitingCallbacks: Map<any, any>;
		m_promiseConnect: any;
		m_socket: any;

		BSendMsg(e, t);
		Connect();
		OnSocketMessage(e);
		SendMsgAndAwaitResponse(e);
	};
	m_mapCacheSubscribedApp: Map<any, any>;

	BClientAccountMatches();
	BClientConnected();
	BClientConnectedAndSupportsMessage(e);
	BClientSupportsMessage(e);
	BIsSubscribedApp(e);
	FailureResult(e = 2);
	GenericEResultCall(e, t = !1);
	OpenChatRoomGroupDialog(e, t);
	OpenFriendChatDialog(e);
	OpenFriendsDialog();
	OpenSteamURL(e, t = !1);
	ShowChatRoomGroupInvite(e, t = !0);
}
