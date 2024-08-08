export interface NetworkDiagnosticsStore {
	m_hcallbackAppSummaryUpdate: any;
	m_hcallbackConnectionStatsUpdate: any;
	m_mapAppIDSummaries: Map<any, any>;
	m_mapConnectionState: Map<any, any>;
	m_mapConnectionSummaries: Map<any, any>;
	m_nRefCountAppSummaryUpdates: number;
	m_nRefCountDetailedConnectionStateUpdates: number;
	m_rgActiveConnectionKeys: any[];
	m_rgClosedConnectionKeys: any[];

	BeginAppSummaryUpdates(e);
	BeginDetailedConnectionStateUpdates();
	EndAppSummaryUpdates(e);
	EndDetailedConnectionStateUpdates();
	GetAppSummaryObserved(e);
	InternalGetAppSummary(e);
	ResetConnections();
	activeConnectionKeys();
	closedConnectionKeys();
	connectionSummary(e);
	getConnectionDetailsObserved(e);
	updateConnection(e);
}
