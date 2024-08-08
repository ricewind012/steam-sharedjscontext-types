import type { CloudStorage } from "./shared/storage";

export interface showcaseStore {
	m_cloudStorage: CloudStorage;
	m_localStorage: Storage;
	m_mapCollectionStorage: {
		m_cloudStorage: CloudStorage;
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
			nOrder: number;
			nShowcaseId: number;
			strCollectionId: string;
		}
	>;
	m_roamingStorage: Storage;

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
