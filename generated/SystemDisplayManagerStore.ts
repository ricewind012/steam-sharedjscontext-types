import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface SystemDisplayManagerStore {
	ClearModeOverride(e): Promise<any>;
	GetState(): Promise<any>;
	SetMode(e, t): Promise<any>;
}
