import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface g_CreatorHomeStore {
	m_bLoadedFromConfig: boolean;
	m_mapAppToCreatorIDList: Map<any, any>;
	m_mapClanToCreatorHome: Map<any, any>;

	BHasCreatorHomeLoaded(e);
	GetCreatorHome(e);
	GetCreatorHomeByID(e);
	GetCreatorHomeListForAppIncludeHidden(e);
	InternalCreatorHome(e, t): Promise<any>;
	LazyInit();
	LoadCreatorHome(e, t): Promise<any>;
	LoadCreatorHomeListForAppIncludeHiddden(e, t): Promise<any>;
	SearchCreatorHomeStore(e, t, r): Promise<any>;
	ValidateStoreDefault(e);
	ValidateStoreDefaultAppList(e);
}
