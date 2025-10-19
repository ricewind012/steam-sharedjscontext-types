import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

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
