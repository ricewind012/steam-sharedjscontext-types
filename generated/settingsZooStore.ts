import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface settingsZooStore {
	m_mapToggles: Map<
		number,
		{
			currentValue: boolean;
			eShowInPanel: number;
			strDescription: string;
			strLabel: string;
		}
	>;

	GetAllToggles();
	GetToggle(e);
	GetToggleSetting(e);
	GetTogglesForPanel(e);
	Init(): Promise<any>;
}
