import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface appDetailsCache {
	m_mapAppDetailsCache: Map<number, {}>;

	BHasDataForApp(e);
	FetchDataForApp(e): Promise<any>;
	GetCachedDataForApp(e, t, r): Promise<any>;
	LookupCachedDataForApp(e, t, r);
	SetCachedDataForApp(e, t, r, n);
}
