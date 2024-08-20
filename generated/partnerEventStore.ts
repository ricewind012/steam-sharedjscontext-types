export interface partnerEventStore {
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

	DeleteOldAnnouncement(e, t): Promise<any>;
}
