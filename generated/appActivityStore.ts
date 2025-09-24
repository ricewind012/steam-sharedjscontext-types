import type { CMInterface } from "../normal/shared/CMInterface";
import type { SteamLocalStorage } from "../normal/shared/storage";

export interface appActivityStore {
	RestoreCachedActivity(...args: any[]);
	m_CMInterface: CMInterface;
	m_deckCompatibilityFeedback_EligibleApps: {};
	m_localStorage: SteamLocalStorage;
	m_mapAppActivity: Map<
		number,
		{
			MergeUserNews(...args: any[]);
			m_AchievementMap: Map<number, {}>;
			m_bNoMoreHistoryAvailable: boolean;
			m_mapActivityByDay: Map<
				number,
				{
					m_mapAchievementsByUser: Map<
						number,
						{
							activeThread: number;
							bIsGameActivity: boolean;
							commentThreads: { undefined }[];
							eEventSubType: any;
							eEventType: number;
							eGameActivityType: any;
							gameid: string;
							m_rgAchievements: {
								bAchieved: boolean;
								bHidden: any;
								flAchieved: number;
								rtUnlocked: number;
								strDescription: string;
								strID: string;
								strImage: string;
								strName: string;
							}[];
							m_rtOldestAchievement: number;
							rtEventTime: number;
							steamIDActor: {
								m_ulSteamID: {
									high: number;
									low: number;
									unsigned: boolean;

									function(e);
									function(e);
									function();
									function(e);
									function(e);
									function();
									function();
									function();
									function(e);
									function(e);
									function(e);
									function(e);
									function();
									function(e);
									function();
									function();
									function();
									function();
									function();
									function(e);
									function(e);
									function(e);
									function(e);
									function();
									function();
									function();
									function();
									function();
									function(e);
									function(e);
									function(e);
									function(e);
									function(e);
									function(e);
									function(e);
									function(e);
									function(e);
									function(e);
									function();
									function();
									function(e);
									function();
									function(e);
									function(e);
									function(e);
									function(e);
									function(e);
									function(e);
									function(e);
									function(e);
									function(e);
									function(e);
									function(e);
									function(e);
									function(e);
									function(e);
									function(e);
									function(e);
									function(e);
									function();
									function();
									function();
									function();
									function();
									function(e);
									function();
									function(e);
								};

								BIsClanAccount();
								BIsIndividualAccount();
								BIsValid();
								ConvertTo64BitString();
								GetAccountID();
								GetAccountType();
								GetInstance();
								GetUniverse();
								Render();
								SetAccountID(e);
								SetAccountType(e);
								SetFromComponents(e, t, n, i);
								SetInstance(e);
								SetUniverse(e);
							};
							steamIDTarget: any;
							unUniqueID: number;

							AddAchievement(e, t);
						}
					>;
					m_mapReceivedGameByUser: Map<any, any>;
					m_mapScreenshotsByUser: Map<any, any>;
					m_mapTradingCardsByUser: Map<any, any>;
					m_mapVideosByUser: Map<any, any>;
					m_mapWishlistedGameByUser: Map<any, any>;
					m_rgEvents: { undefined }[];
					m_rtDayBegin: any;

					AddAchievementEvent(e, t, r): Promise<any>;
					AddActivityEvent(e, t, r, n);
					AddEvent(e);
					AddPartnerEvent(e, t): Promise<any>;
					AddReceivedGameEvent(e, t, r): Promise<any>;
					AddRecommendedGameEvent(e, t, r): Promise<any>;
					AddScreenshotEvent(e, t): Promise<any>;
					AddSteamTradingCardEvent(e, t, r);
					AddUserStatusEvent(e, t): Promise<any>;
					AddVideoEvent(e, t): Promise<any>;
					AddWishlistedGameEvent(e, t): Promise<any>;
					BHasEvents();
					GetEarliestEventTime();
					GetLatestEventTime();
					RemoveEvent(e);
					SortEvents();
				}
			>;
			m_rgCachedGameActivityEvents: any[];
			m_rgCachedUserNewsEvents: { undefined }[];
			m_rtEarliestGameActivityTime: number;
			m_rtEarliestUserNewsTime: number;
			m_rtLatestGameActivityTime: number;
			m_rtLatestUserNewsTime: number;
			m_unAppID: number;

			AddGameActivityEvent(e, t);
			AddNewsEvents(e);
			AddUserNewsEvent(e): Promise<any>;
			BEventIsTooOldToCache(e);
			BHasEvents();
			CacheGameActivityEvent(e);
			CacheUserNewsEvent(e);
			DeleteEvent(e): Promise<any>;
			DeleteLocally(e): Promise<any>;
			GetAchievementMapCache();
			GetGameActivityCache();
			GetUserNewsCache();
			MergeGameActivity(e, t);
			RequestStoreItems(): Promise<any>;
			RestoreAchievementMapFromCache(e);
			SortEvents();
		}
	>;
	m_rgDeckCompatibilityFeedback_Ask: any[];
	m_setAppFetchRequested: Set<any>;
	m_setAppsLoading: Set<any>;

	BAllowDeckCompatibilityFeedback(e);
	BShouldPromptForDeckCompatibilityFeedback(e);
	ClearDeckCompatibilityFeedbackAskList();
	FetchActivityHistory(e, t): Promise<any>;
	FetchLatestActivity(e, t);
	FetchLatestActivityFromServer(e, t): Promise<any>;
	GetAppActivity(e);
	GetDeckCompatibilityFeedback(e);
	Init(e);
	RequestRestoreActivity(e);
	RestoreActivity(e): Promise<any>;
	SetDeckCompatibilityFeedback(e, t): Promise<any>;
	writeDeckCompatibilityFeedbackToLocalStorage();
}
