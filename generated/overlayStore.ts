export interface overlayStore {
	m_OnBrowserClosedCallbacks: {
		m_vecCallbacks: function[];

		ClearAllCallbacks();
		CountRegistered();
		Dispatch(...e);
		Register(e);
	};
	m_OnBrowserCreatedCallbacks: {
		m_vecCallbacks: function[];

		ClearAllCallbacks();
		CountRegistered();
		Dispatch(...e);
		Register(e);
	};
	m_OnBrowserUpdatedCallbacks: {
		m_vecCallbacks: function[];

		ClearAllCallbacks();
		CountRegistered();
		Dispatch(...e);
		Register(e);
	};
	m_OnNotificationPositionChangedCallbacks: {
		m_vecCallbacks: function[];

		ClearAllCallbacks();
		CountRegistered();
		Dispatch(...e);
		Register(e);
	};
	m_hOverlayBrowserInfoChanged: { unregister(...args: any[]) };
	m_mapBrowserInfo: {};

	HasOverlayInstance(e);
	Init(e);
	OverlayBrowserChanged(e, t, r, n);
	OverlayBrowserClosed(e);
	OverlayBrowserCreated(e, t, r, n);
	RegisterForBrowserClosed(e);
	RegisterForBrowserCreated(e);
	RegisterForBrowserUpdated(e);
	RegisterForNotificationPositionChanged(e);
}
