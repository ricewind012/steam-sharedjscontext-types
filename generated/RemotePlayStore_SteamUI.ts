import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface RemotePlayStore_SteamUI {
	m_bAudioDriverDialogVisible: boolean;
	m_bInputDriverDialogVisible: boolean;
	m_bInputDriverRestartNoticeVisible: boolean;
	m_bRemoteDeviceClientPairingDialogVisible: boolean;
	m_bRemoteDeviceHostPairingDialogVisible: boolean;
	m_bRestrictedSession: boolean;
	m_clientConfig: {
		array: number[];
		arrayIndexOffset_: number;
		convertedPrimitiveFields_: {};
		messageId_: any;
		pivot_: number;
		wrappers_: any;

		function(n, i);
		function();
		function();
		function();
		function();
		function();
		function();
		function();
		function();
		function(n = !0);
		function();
		function();
		function();
		function();
		function();
		function();
		function();
		function();
		function();
		function();
		function();
		function();
		getClassName();
		function();
		function();
		function(n = !0);
		function(n = !0);
		serializeBase64String();
		serializeBinary();
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		toObject(e = !1);
	};
	m_devices: any[];
	m_sRemoteDeviceBeingPaired: any;
	m_sRemoteDevicePairingPIN: any;
	m_serverConfig: {
		array: boolean[];
		arrayIndexOffset_: number;
		convertedPrimitiveFields_: {};
		messageId_: any;
		pivot_: number;
		wrappers_: any;

		function();
		function();
		function();
		function();
		function();
		function();
		function();
		function();
		getClassName();
		function();
		serializeBase64String();
		serializeBinary();
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function(n);
		function();
		toObject(e = !1);
	};
	m_setAdditionalParentalBlocks: Set<any>;
	m_settings: {
		RemotePlayClientConfig: {};
		RemotePlayServerConfig: {};
		bAV1DecodeAvailable: boolean;
		bHEVCDecodeAvailable: boolean;
		bRemotePlayClientConfigEnabled: boolean;
		bRemotePlayDisabledBySystemPolicy: boolean;
		bRemotePlayEnabled: boolean;
		bRemotePlayServerConfigAvailable: boolean;
		bRemotePlayServerConfigEnabled: boolean;
		bRemotePlaySupported: boolean;
		eRemotePlayP2PScope: number;
		nAutomaticResolutionX: number;
		nAutomaticResolutionY: number;
		nDefaultAudioChannels: number;
		strStreamingClientName: string;
		unStreamingSessionID: number;
	};

	BHasParentalBlock(e);
	BHasParentalBlocks();
	GetStreamingFormFactors();
	HideAudioDriverDialog();
	HideInputDriverDialog();
	HideInputDriverRestartNotice();
	HideRemoteDeviceClientPairingDialog();
	HideRemoteDeviceHostPairingDialog();
	Init(e);
	ShowAudioDriverDialog();
	ShowInputDriverDialog();
	ShowInputDriverRestartNotice();
	ShowRemoteDeviceClientPairingDialog(e);
	ShowRemoteDeviceHostPairingDialog(e);
}
