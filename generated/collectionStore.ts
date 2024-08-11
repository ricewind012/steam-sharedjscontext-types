import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface collectionStore {
	m_cloudStorage: SteamCloudStorage;
	m_cloudStorageMap: {
		m_cloudStorage: SteamCloudStorage;
		m_strKeyPrefix: string;

		GetObject(e);
		OnChange(e);
		StoreObject(e, t, r, n): Promise<any>;
		StoreString(e, t, r, n): Promise<any>;
		clear(e, t);
		delete(e, t, r);
		entries();
		forEach(e, t);
		get(e);
		has(e);
		keys();
		set(e, t, r, n);
		values();
	};
	m_localStorage: SteamLocalStorage;
	m_mapCollectionsFromStorage: Map<
		string,
		{
			m_filter: any;
			m_mapFilterToAppCounts: Map<number, {}>;
			m_rgApps: any[];
			m_setAddedManually: Set<number>;
			m_setApps: Set<number>;
			m_setRemovedManually: Set<any>;
			m_strId: string;
			m_strName: string;

			AsDeletableCollection();
			AsDragDropCollection();
			AsEditableCollection();
			Delete(): Promise<any>;
			Save(): Promise<any>;
		}
	>;
	m_mapPartnerCollectionIdToName: Map<
		string,
		{
			0: string;
			1: string;
			2: string;
			3: string;
			4: string;
			5: string;
			6: string;
		}
	>;
	m_mapSystemCollectionIdToName: Map<
		string,
		{
			0: string;
			1: string;
			2: string;
			3: string;
			4: string;
			5: string;
			6: string;
			7: string;
			8: string;
		}
	>;
	m_shortcutCollectionInfo: {
		favorite: { added: number[]; id: string; removed: any[] };
	};

	AddOrRemoveApp(e, t, r);
	BHasNonGamepadOptions();
	BIncludeInFamilyGroupCollection(e);
	BIncludeInSharedLibraryCollection(e);
	ImportUserTags(e, t, r): Promise<any>;
	Init(e): Promise<any>;
	InitPartnerCollectionNameMap();
	InitSystemCollectionNameMap();
	OnAppOverviewChange(e, t);
	Register(): Promise<any>;
}
