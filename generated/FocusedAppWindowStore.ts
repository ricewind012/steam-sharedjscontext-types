export interface FocusedAppWindowStore {
	m_defaultMonitor: {
		m_flDPI: number;
		m_full: {
			m_nHeight: number;
			m_nLeft: number;
			m_nTop: number;
			m_nWidth: number;
		};
		m_usable: {
			m_nHeight: number;
			m_nLeft: number;
			m_nTop: number;
			m_nWidth: number;
		};
	};
	m_nFocusedWindowID: number;
	m_unFocusedAppID: number;
	m_unFocusedOverlayAppID: number;
	m_unFocusedOverlayPID: number;

	GetDefaultMonitorDimensions();
	GetFocusedAppID();
	GetFocusedOverlayAppID();
	GetFocusedOverlayPID();
	GetFocusedWindowID();
	Init();
	Shutdown();
}
