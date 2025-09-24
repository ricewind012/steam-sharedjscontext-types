import type { CCallbackList } from "../normal/shared/interfaces";

export interface overlayStore {
	m_OnBrowserClosedCallbacks: CCallbackList;
	m_OnBrowserCreatedCallbacks: CCallbackList;
	m_OnBrowserUpdatedCallbacks: CCallbackList;
	m_OnNotificationPositionChangedCallbacks: CCallbackList;
	m_eUIMode: number;
	m_hOverlayBrowserInfoChanged: { unregister(...args: any[]) };
	m_mapBrowserInfo: Map<any, any>;

	HasOverlayInstance(e);
	Init(e);
	OnUIModeChanged(e);
	OverlayBrowserChanged(e, t, r, n);
	OverlayBrowserClosed(e);
	OverlayBrowserCreated(e, t, r, n);
	RegisterForBrowserClosed(e);
	RegisterForBrowserCreated(e);
	RegisterForBrowserUpdated(e);
	RegisterForNotificationPositionChanged(e);
}
