export interface showcaseStore {
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
	m_localStorage: {
		GetString(e): Promise<any>;
		RemoveObject(e): Promise<any>;
		StoreString(e, t): Promise<any>;
	};
	m_mapCollectionStorage: {
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
	m_mapShowcases: {
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
	m_roamingStorage: {
		GetObject(e): Promise<any>;
		GetString(e): Promise<any>;
		RemoveObject(e): Promise<any>;
		StoreObject(e, t): Promise<any>;
		StoreString(e, t): Promise<any>;
	};

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
