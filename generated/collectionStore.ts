export interface collectionStore {
	m_cloudStorage: {
		m_eNamespace: number;

		Get(e);
		GetByPrefix(e);
		GetMapForPrefix(e);
		GetObject(e): Promise<any>;
		GetString(e): Promise<any>;
		RegisterForChangeNotifications(e);
		RemoveObject(e, t, r): Promise<any>;
		StoreObject(e, t, r, n): Promise<any>;
		StoreString(e, t, r, n): Promise<any>;
	};
	m_cloudStorageMap: {
		m_cloudStorage: {
			m_eNamespace: number;

			Get(e);
			GetByPrefix(e);
			GetMapForPrefix(e);
			GetObject(e): Promise<any>;
			GetString(e): Promise<any>;
			RegisterForChangeNotifications(e);
			RemoveObject(e, t, r): Promise<any>;
			StoreObject(e, t, r, n): Promise<any>;
			StoreString(e, t, r, n): Promise<any>;
		};
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
	m_localStorage: {
		GetString(e): Promise<any>;
		RemoveObject(e): Promise<any>;
		StoreString(e, t): Promise<any>;
	};
	m_mapCollectionsFromStorage: {
		changeListeners_: any;
		data_: {};
		dehancer: any;
		enhancer_(...args: any[]);
		hasMap_: {};
		interceptors_: any;
		keysAtom_: {
			diffValue_: number;
			isBeingObserved: boolean;
			isPendingUnobservation: boolean;
			lastAccessedBy_: number;
			lowestObserverState_: number;
			name_: string;
			observers_: Set<object>;
			onBOL: any;
			onBUOL: any;

			function();
			function();
			function();
			function();
			function();
		};
		name_: string;

		function(e, t);
		function();
		function(e);
		function(e);
		function();
		function(e, t);
		function(e);
		function(e);
		function(e);
		function(e);
		function();
		function(e);
		function(e, t);
		function(e);
		function(e, t);
		function();
		function();
		function(e, t);
		function();
	};
	m_mapPartnerCollectionIdToName: {};
	m_mapSystemCollectionIdToName: {};
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
