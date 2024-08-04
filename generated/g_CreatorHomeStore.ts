export interface g_CreatorHomeStore {
	m_bLoadedFromConfig: boolean;
	m_mapAppToCreatorIDList: {
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
			observers_: Set<any>;
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
	m_mapClanToCreatorHome: {
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
			observers_: Set<any>;
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
