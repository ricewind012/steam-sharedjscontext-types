export interface g_PartnerEventStore {
	m_PendingInfoPromise: any;
	m_PendingInfoResolve: any;
	m_QueuedEventTimeout: {
		m_fnCallback: any;
		m_schTimer: any;

		Cancel();
		IsScheduled();
		Schedule(e, t);
	};
	m_bLoadedFromConfig: boolean;
	m_mapAdjacentAnnouncementGIDs: Map<any, any>;
	m_mapAnnouncementBodyToEvent: Map<any, any>;
	m_mapAppIDToGIDs: Map<any, any>;
	m_mapClanToGIDs: Map<any, any>;
	m_mapEventUpdateCallback: Map<any, any>;
	m_mapExistingEvents: Map<any, any>;
	m_mapUpdatedApps: Map<any, any>;
	m_rgQueuedEventsClanIDs: any[];
	m_rgQueuedEventsForEditFlags: any[];
	m_rgQueuedEventsUniqueIDs: any[];
	m_tsUpdatedAppsQueryTime: number;

	BHasClanAnnouncementGID(e);
	BHasClanEventModel(e);
	BIsOldAnnouncement(e);
	DefaultEventSortFunction(e, t);
	DeleteClanEvent(e, t): Promise<any>;
	FlushEventFromCache(e, t);
	GetAllClanEvents(e);
	GetAppImportantUpdate(e);
	GetBestEventsForCurrentUser(e, t, r): Promise<any>;
	GetClanEventFromAnnouncementGID(e);
	GetClanEventGIDFromAnnouncementGID(e);
	GetClanEventGIDs(e);
	GetClanEventGIDsForApp(e);
	GetClanEventModel(e);
	GetEventLookupKey(e);
	GetRankedClanEvents(e, t);
	HelperInitializeNumSalesHeaderArray(e);
	HintLoadImportantUpdates(): Promise<any>;
	Init();
	InsertEventModelFromClanEventData(e, t);
	InsertUniqueEventGID(e, t, r);
	InternalLoadAdjacentPartnerEvents(e, t, r, n, i, o, c, u): Promise<any>;
	InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
		e,
		t,
		r,
		n,
		i,
		s = !1,
	): Promise<any>;
	InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
		e,
		t,
		r,
		n,
		i,
		a,
	): Promise<any>;
	InternalLoadPartnerEventList(e, t, r): Promise<any>;
	LoadAdjacentPartnerEvents(e, t, r, n, i, a, s): Promise<any>;
	LoadAdjacentPartnerEventsByAnnouncement(e, t, r, n, i, a, s): Promise<any>;
	LoadAdjacentPartnerEventsByEvent(e, t, r, n, i, a, s): Promise<any>;
	LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(e, t, r): Promise<any>;
	LoadClanEventLocalizationFromAnnouncementGID(e, t): Promise<any>;
	LoadHiddenPartnerEvent(e, t): Promise<any>;
	LoadHiddenPartnerEventByAnnouncementGID(e, t): Promise<any>;
	LoadImportantEventsAroundToday(e, t, r, n, i, o): Promise<any>;
	LoadPartnerEventFromAnnoucementGID(e, t, r): Promise<any>;
	LoadPartnerEventFromAnnoucementGIDAndClanSteamID(e, t, r, n): Promise<any>;
	LoadPartnerEventFromClanEventGID(e, t, r): Promise<any>;
	LoadPartnerEventFromClanEventGIDAndClanSteamID(e, t, r, n): Promise<any>;
	LoadPartnerEventGeneric(e, t, r, n, i): Promise<any>;
	LoadPartnerEventsPageable(e, t, r = 0, n = 0): Promise<any>;
	QueueLoadPartnerEvent(e, t, r): Promise<any>;
	RegisterClanEvents(e);
	RemoveGIDFromList(e, t);
	ResetModel();
	ValidateAdjacentEvent(e);
	ValidateStoreDefault(e);
}
