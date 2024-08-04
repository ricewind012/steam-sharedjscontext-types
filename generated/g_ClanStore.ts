export interface g_ClanStore {
	m_bLoadedFromConfig: boolean;
	m_mapAppIDToClanInfo: {
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
	m_mapClanAccountIDToClanInfo: {
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
	m_mapPromisesLoading: {};
	m_mapVanityToClanInfo: {
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
	m_rgQueuedEventsClanIDs: any[];

	BHasClanInfoLoaded(e);
	BHasClanInfoLoadedByAccountID(e);
	GetClanInfoByClanAccountID(e);
	GetClanMemberCount(e);
	GetClanSteamIDForAppID(e);
	GetClanVanityForAppID(e);
	GetClanVanityForClanSteamID(e);
	GetCreatorStoreURL(e);
	GetOGGClanInfo(e);
	GetRequestParam();
	HasLoadedClanAccountID(e);
	Init();
	InternalLoadClanInfoForClanSteamID(e): Promise<any>;
	InternalLoadOGGClanInfoForAppID(e): Promise<any>;
	InternalLoadOGGClanInfoForGroupVanity(e): Promise<any>;
	InternalLoadOGGClanInfoForIdentifier(e): Promise<any>;
	InternalSetupValue(e);
	LazyInit();
	LoadClanInfoForClanAccountID(e): Promise<any>;
	LoadClanInfoForClanSteamID(e): Promise<any>;
	LoadOGGClanInfoForAppID(e): Promise<any>;
	LoadOGGClanInfoForGroupVanity(e): Promise<any>;
	LoadOGGClanInfoForIdentifier(e): Promise<any>;
	RegisterClanData(e);
	ValidateClanConfig(e);
}
