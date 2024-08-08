export interface g_ClanStore {
	m_bLoadedFromConfig: boolean;
	m_mapAppIDToClanInfo: Map<any, any>;
	m_mapClanAccountIDToClanInfo: Map<any, any>;
	m_mapPromisesLoading: Map<any, any>;
	m_mapVanityToClanInfo: Map<any, any>;
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
