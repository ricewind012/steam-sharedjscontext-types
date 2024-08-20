import type { CMInterface } from "../normal/shared/CMInterface";

export interface libraryEventStore {
	m_CMInterface: CMInterface;
	m_TimeEventsLastLoaded: number;
	m_TimeoutInitialLoad: any;
	m_TimeoutJustChangedPriority: any;
	m_bConnectedToSteam: boolean;
	m_bEventsLoaded: boolean;
	m_bInitialLoadPending: boolean;
	m_bLastPriorityChangeWasLower: boolean;
	m_bNoMoreOrLessDataFetched: boolean;
	m_iGetBestEventsForUserErrorBackoff: number;
	m_mapAppEventPriorities: Map<any, any>;
	m_mapFailedImagesThisSession: Map<any, any>;
	m_nAppIDJustChangedPriority: number;
	m_nEventsReturnedLastTime: string;
	m_nLastConnectionToSteam: number;
	m_rgEventsHiddenLocally: any[];
	m_schScheduledUpdateBestEventsForUser: {
		m_fnCallback();
		m_schTimer: number;

		Cancel();
		IsScheduled();
		Schedule(e, t);
	};
	m_vecAppsShowingLess: any[];
	m_vecAppsShowingMore: any[];
	m_vecHomeBestEventsForUser: any[];
	m_vecHomeTakeOverEventsForUser: any[];

	AddToDoNotShowList(e);
	BNoShowMoreOrLessDataFetched();
	BNotYetLoaded();
	ClearJustChangedAppPriority();
	FetchUpdatedEventAppPrioritiesForUser(): Promise<any>;
	GetAppsShowingLess();
	GetAppsShowingMore();
	GetEventsCountLastTime();
	GetJustChangedPriorityAppID();
	GetLibraryHomeBestEventsForUser();
	GetTakeOverEvents();
	GetUserAppPrioritySetting(e);
	GetWasJustChangedPriorityLower();
	GetWhatsNewEvents();
	Init(e): Promise<any>;
	LowerAppPriorityForApp(e): Promise<any>;
	OnSteamConnectionEstablished();
	RaiseAppPriorityForApp(e): Promise<any>;
	RemoveEvent(e);
	ResetDoNotShowList();
	ResetUserAppPriorityForApp(e): Promise<any>;
	ScheduleUpdateBestEventsForUser(e);
	SetEventsLoaded(e);
	TrackEventClickedByUser(e, t);
	TrackEventShownToUser(e, t);
	TrackEventShownToUserByGID(e, t, r);
	UpdateBestEventsForCurrentUser();
}
