import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface uiBroadcastWatchStore {
	m_activeVideo: any;
	m_broadcastInfos: {};
	m_broadcastSettings: {
		bMuted: boolean;
		nVolume: number;
		ulViewerToken: string;
	};
	m_mapBroadcasts: Map<any, any>;
	m_mapClips: Map<any, any>;
	m_mapVODs: Map<any, any>;
	m_schSaveSettings: {
		m_fnCallback: any;
		m_schTimer: any;

		Cancel();
		IsScheduled();
		Schedule(e, t);
	};

	BroadcastDownloadFailed(e, t = !0, r = A.N_.Invalid);
	CreateBroadcastVideo(e, t, r, n);
	CreateClipVideo(e, t, r);
	CreateVODVideo(e, t, r);
	DelayedGetBroadcastManifest(e, t, r = Date.now());
	GetBroadcast(e);
	GetBroadcastClip(e);
	GetBroadcastManifest(e, t, r = Date.now()): Promise<any>;
	GetBroadcastState(e);
	GetBroadcastStateDescription(e);
	GetBroadcastVOD(e);
	GetClipManifest(e, t): Promise<any>;
	GetOrCreateBroadcast(e);
	GetOrCreateBroadcastInfo(e);
	GetOrCreateClip(e);
	GetOrCreateVOD(e);
	GetVODManifest(e, t): Promise<any>;
	GetViewerToken();
	HeartbeatBroadcast(e): Promise<any>;
	LoadBroadcast(e);
	LoadBroadcastInfo(e): Promise<any>;
	LoadBroadcastSettings();
	LoadClip(e);
	LoadVOD(e);
	PauseAllVideo();
	RemoveBroadcastIfUnused(e);
	SaveBroadcastSettings();
	SaveVolumeChange(e, t);
	SetActiveVideo(e);
	SetViewerToken(e);
	StartInfo(e);
	StartVideo(e);
	StopInfo(e);
	StopVideo(e): Promise<any>;
	UserInputClickVideo(e);
}
