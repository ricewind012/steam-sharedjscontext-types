export interface SystemPowerStore {
	m_bHasBattery: boolean;
	m_bNotificationToastEnabled: boolean;
	m_bSayFull: boolean;
	m_bShowingConnectedSlowDetails: boolean;
	m_bShutdownRequested: boolean;
	m_bShuttingDown: boolean;
	m_eACState: number;
	m_eBatteryState: number;
	m_eBatteryTimeConfidence: number;
	m_flBatteryLevel: number;
	m_nBatterySecondsRemaining: number;
	m_nBatteryTimeConfidenceTimeoutID: any;
	m_nSayFullTimeoutID: any;

	ShowBatteryFullDetails();
	ShowConnectedSlowDetails();
}
