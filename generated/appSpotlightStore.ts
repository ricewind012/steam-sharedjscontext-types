import type { CMInterface } from "../normal/shared/CMInterface";
import type { SteamLocalStorage } from "../normal/shared/storage";

export interface appSpotlightStore {
	m_CMInterface: CMInterface;
	m_dlcLocalStore: {};
	m_gamePlayLocalStore: { 440: number };
	m_localStorage: SteamLocalStorage;
	m_mapAppData: Map<
		number,
		{
			m_bLoadedPreviousSessionData: boolean;
			m_bRerunUpdate: boolean;
			m_bUpdateInProgress: boolean;
			m_hAppDetailsAutorun(...args: any[]);
			m_postGameSummary: {
				m_rgSessionEvents: { undefined }[];

				AddAchievement(e);
				AddClip(e);
				AddTradingCard(e);
				BAddScreenshotNotification(e);
				ClearSessionEvents();
				GetSessionEvents();
				HasSessionEvents();
				RemoveClip(e);
				SetRecordingHighlights(e);
			};
			m_rgNewDLC: any[];
			m_session: {
				m_rgSessionEvents: { undefined }[];

				AddAchievement(e);
				AddClip(e);
				AddTradingCard(e);
				BAddScreenshotNotification(e);
				ClearSessionEvents();
				GetSessionEvents();
				HasSessionEvents();
				RemoveClip(e);
				SetRecordingHighlights(e);
			};
			m_unAppID: number;
		}
	>;

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
