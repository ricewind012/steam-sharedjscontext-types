import type { CCallbackList } from "../normal/shared/interfaces";

export interface overlayStore {
	m_OnBrowserClosedCallbacks: CCallbackList;
	m_OnBrowserCreatedCallbacks: CCallbackList;
	m_OnBrowserUpdatedCallbacks: CCallbackList;
	m_OnNotificationPositionChangedCallbacks: CCallbackList;
	m_hOverlayBrowserInfoChanged: { unregister(...args: any[]) };
	m_mapBrowserInfo: Map<
		number,
		{
			m_eBrowserType: number;
			m_eUIMode: number;
			m_gameID: string;
			m_nBrowserID: number;
			m_unAppID: number;
			m_unPID: number;
		}
	>;

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
