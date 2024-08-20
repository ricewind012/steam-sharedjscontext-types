import type { CMInterface } from "../normal/shared/CMInterface";

export interface SystemNetworkStore {
	m_WirelessDevice: {
		estate: number;
		etype: number;
		id: number;
		ip4: {
			addresses: { ip: number; netmask: number }[];
			dns_ip: any[];
			gateway_ip: number;
			is_default_route: boolean;
			is_dhcp_enabled: boolean;
			is_enabled: boolean;
		};
		ip6: {
			addresses: any[];
			dns_ip: any[];
			gateway_ip: string;
			is_default_route: boolean;
			is_dhcp_enabled: boolean;
			is_enabled: boolean;
		};
		mac: string;
		product: string;
		vendor: string;
		wireless: {
			aps: {
				esecurity: number;
				estrength: number;
				id: number;
				is_active: boolean;
				is_autoconnect: boolean;
				password: string;
				ssid: string;
				strength_raw: number;
			}[];
			esecurity_supported: number;
		};
	};
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
	m_mapNetworkAccessPoints: Map<
		string,
		{
			m_DeviceInfo: {
				estate: number;
				etype: number;
				id: number;
				ip4: {
					addresses: { ip: number; netmask: number }[];
					dns_ip: any[];
					gateway_ip: number;
					is_default_route: boolean;
					is_dhcp_enabled: boolean;
					is_enabled: boolean;
				};
				ip6: {
					addresses: any[];
					dns_ip: any[];
					gateway_ip: string;
					is_default_route: boolean;
					is_dhcp_enabled: boolean;
					is_enabled: boolean;
				};
				mac: string;
				product: string;
				vendor: string;
				wireless: {
					aps: {
						esecurity: number;
						estrength: number;
						id: number;
						is_active: boolean;
						is_autoconnect: boolean;
						password: string;
						ssid: string;
						strength_raw: number;
					}[];
					esecurity_supported: number;
				};
			};
			m_DeviceWapId: number;
			m_NoLongerPresent: boolean;
			m_nWirelessAPInfoIndex: number;

			Disconnect(): Promise<any>;
			Forget(): Promise<any>;
			MarkAsNotPresent();
			SetAutoconnectEnabled(e): Promise<any>;
			SetDeviceInfo(e);
		}
	>;
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
