import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface showcaseStore {
	m_cloudStorage: SteamCloudStorage;
	m_localStorage: SteamLocalStorage;
	m_mapCollectionStorage: {
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
	m_mapShowcases: Map<
		number,
		{
			bExpanded: boolean;
			eSortBy: number;
			nOrder: any;
			nShowcaseId: number;
			strCollectionId: string;
		}
	>;
	m_roamingStorage: SteamLocalStorage;

	AddNewShowcase(e = "");
	BHasEmptyShowcase();
	DeleteShowcase(e);
	Init(e): Promise<any>;
	LoadShowcases(): Promise<any>;
	MaybeUpgrade(): Promise<any>;
	OnDeleteCollection(e);
	SaveShowcase(e, t);
	SetCollectionId(e, t);
	SetDeleting(e, t);
	SetExpanded(e, t);
	SetOrder(e, t);
	SetSortBy(e, t);
}
