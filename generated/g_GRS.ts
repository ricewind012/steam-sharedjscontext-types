export interface g_GRS {
	m_bClipLoadingTriggered: boolean;
	m_bEnoughDiskSpace: boolean;
	m_bLoadingAppsWithTimelines: boolean;
	m_bLoadingClips: boolean;
	m_clipExportProgress: Map<any, any>;
	m_clips: Map<any, any>;
	m_clipsGroupByGame: Map<any, any>;
	m_currentlyExportingClip: any;
	m_fnGetAchievementInfo(...args: any[]);
	m_mapActiveTimelines: Map<any, any>;
	m_mapClipLoaders: Map<any, any>;
	m_mapManualRecordingCallbacks: Map<any, any>;
	m_mapSharedClipLoaders: Map<any, any>;
	m_mapTimelineLoaders: Map<any, any>;
	m_recordingState: any;
	m_rgAppsWithTimelines: {
		file_size: string;
		game_id: string;
		is_active: boolean;
		most_recent_start_time: number;
		timeline_duration_seconds: number;
		video_duration_seconds: number;
	}[];
	m_strLastClipID: any;
	m_transport: {
		MakeReady(...args: any[]);
		SendMsg(e, t, r);
		SendNotification(e, t);
	};

	BEnoughDiskSpace();
	BLoadingAppsWithTimelines();
	BLoadingClips();
	BShouldReloadAppsWithTimelines(e, t);
	CheckEnoughDiskSpace(): Promise<any>;
	GetAppsWithTimelines();
	GetAppsWithTimelinesWithVideo();
	GetAvailableDiskSpace(): Promise<any>;
	GetBestClipTitle(e);
	GetClipExportProgress(e);
	GetClipIDs(e);
	GetClipSummaries(e);
	GetClipSummariesForGame(e);
	GetClipSummary(e);
	GetCurrentExportingClip();
	GetLastClip();
	GetRecordingState();
	GetTotalDiskSpaceUsage(e, t): Promise<any>;
	Init(e, t): Promise<any>;
	InternalAddClipSummary(e);
	LazyLoadClips(): Promise<any>;
	LoadAppsWithTimelines(): Promise<any>;
	ManuallyDeleteRecordingForApps(e);
	ReloadAppsWithTimelinesIfNeeded(e);
	ReportClipRange(e, t, r, n, i);
	ReportClipShare(e, t, r, n, i);
}
