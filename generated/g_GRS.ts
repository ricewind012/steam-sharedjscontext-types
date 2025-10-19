import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface g_GRS {
	m_bClipLoadingTriggered: boolean;
	m_bEnoughDiskSpace: boolean;
	m_bLoadingAppsWithBackgroundVideo: boolean;
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
	m_rgAppsWithBackgroundVideo: {
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
		SendMsg(e, t, n);
		SendNotification(e, t);
	};

	BEnoughDiskSpace();
	BLoadingAppsWithBackgroundVideo();
	BLoadingClips();
	CheckEnoughDiskSpace(): Promise<any>;
	GetAppsWithBackgroundVideo();
	GetAvailableDiskSpace(): Promise<any>;
	GetBestClipTitle(e);
	GetClipExportProgress(e);
	GetClipIDs(e);
	GetClipSummaries(e);
	GetClipSummariesForGame(e);
	GetClipSummary(e);
	GetCurrentExportingClip();
	GetLastClip();
	GetRecordingHighlights(e, t): Promise<any>;
	GetRecordingState();
	GetTotalDiskSpaceUsage(e, t): Promise<any>;
	Init(e, t): Promise<any>;
	InternalAddClipSummary(e);
	LazyLoadClips(): Promise<any>;
	LoadAppsWithBackgroundVideo(): Promise<any>;
	ManuallyDeleteRecordingForApps(e);
	ReloadAppsWithBackgroundVideoIfNecessary(e);
	ReportClipRange(e, t, r, n, i);
	ReportClipShare(e, t, r, n, i);
}
