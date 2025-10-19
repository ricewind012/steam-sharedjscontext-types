import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface screenshotStore {
	m_CMInterface: CMInterface;
	m_bOpenedItem: boolean;
	m_mapShortcutNames: Map<any, any>;
	m_mapShortcutOverrides: Map<any, any>;

	GetCMInterface();
	GetShortcutDisplayName(e);
	GetShortcutOverride(e);
	Init(e);
	IsItemOpen();
	SetShortcutDisplayName(e, t);
	SetShortcutOverride(e, t);
}
