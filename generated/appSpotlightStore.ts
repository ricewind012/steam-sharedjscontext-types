import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface appSpotlightStore {
	m_CMInterface: CMInterface;
	m_dlcLocalStore: {};
	m_gamePlayLocalStore: { 440: number };
	m_localStorage: SteamLocalStorage;
	m_mapAppData: Map<any, any>;

	BHasAppData(e);
	BSimulateSummaryFakeAchievement(e);
	EnterAppDetailsPage(e);
	ExitAppDetailsPage(e);
	GetCM();
	GetFeaturedNewDLC(e);
	GetGamePlaySpotlightTime(e);
	GetNewDLCTimeRanges(e);
	GetOrCreateAppData(e);
	GetPostGameSummary(e);
	GetStartOfSessionTimestamp(e);
	Init(e): Promise<any>;
	LoadPreviousSessionData(e): Promise<any>;
	SetNewDLCTimeRanges(e, t);
	SimulateNewDLC(e);
	SimulatePressSummary(): Promise<any>;
	SimulateSummaryClear(e);
	SimulateSummaryForceNewDay(e);
	StopShowingGamePlaySpotlight(e);
	StopShowingNewDLC(e);
	UpdateNewDLCToShow(e, t);
	UpdatePostGameSummaryForApp(e): Promise<any>;
	UpdatePostGameSummaryForApp_Internal(e): Promise<any>;
	WaitForAchievementsInRange(e, t, r): Promise<any>;
	WaitForClips(e, t): Promise<any>;
	WaitForRecordingHighlights(e, t): Promise<any>;
}
