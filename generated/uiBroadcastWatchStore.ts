export interface uiBroadcastWatchStore {
	m_activeVideo: any;
	m_broadcastInfos: {};
	m_broadcastSettings: {
		bMuted: boolean;
		nVolume: number;
		ulViewerToken: string;
	};
	m_mapBroadcasts: {
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
	m_mapClips: {};
	m_mapVODs: {};
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
