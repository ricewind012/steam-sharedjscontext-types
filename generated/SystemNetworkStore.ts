import type { CMInterface } from "../normal/shared/CMInterface";

export interface SystemNetworkStore {
	m_WirelessDevice: any;
	m_bIsAwaitingInitialNetworkState: boolean;
	m_bIsConnectedToANetwork: boolean;
	m_bIsConnectingToANetwork: boolean;
	m_bWifiEnabled: boolean;
	m_cm: CMInterface;
	m_connectivityTestState: {
		bChecking: boolean;
		eConnectivityTestResult: number;
		eFakeState: number;
	};
	m_mapNetworkAccessPoints: Map<any, any>;
	m_proxyInfo: {
		address: string;
		exclude_local: boolean;
		port: number;
		proxy_mode: number;
	};

	Connect(e): Promise<any>;
	ForgetAllNetworks(): Promise<any>;
	GetAccessPoint(e, t);
	Init(e): Promise<any>;
	IsAnyDeviceConnected();
	IsAnyDeviceConnecting();
	RecheckConnectivity();
	SetDeviceInfo(e, t);
	SetNetFakeLocalSystemState(e);
	SetProxyInfo(e): Promise<any>;
	SetWifiEnabled(e);
	StartScanningForNetworks();
	StopScanningForNetworks();
}
