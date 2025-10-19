import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface uiStore {
	SetGameListSelection(...args: any[]);
	m_RecentGamesFirstApp: number;
	m_bGameListGroupedByCollection: boolean;
	m_bGameListGroupedBySharedLibraries: boolean;
	m_bGameListSortedByRecent: boolean;
	m_bIsCollectionEditorOpen: boolean;
	m_bIsCollectionRenameOpen: boolean;
	m_bIsSearchByTypePaneOpen: boolean;
	m_cm: CMInterface;
	m_collectionsAppFilter: {
		m_filterSpec: {
			filterGroups: { bAcceptUnion: boolean; rgOptions: number[] }[];
			nFormatVersion: number;
			setSuggestions: Set<any>;
			strSearchText: string;
		};

		MatchesImpl(e);
		MatchesScoredImpl(e);
	};
	m_collectionsAppFilterGamepad: {
		m_filterSpec: {
			filterGroups: { bAcceptUnion: boolean; rgOptions: number[] }[];
			nFormatVersion: number;
			setSuggestions: Set<any>;
			strSearchText: string;
		};

		MatchesImpl(e);
		MatchesScoredImpl(e);
	};
	m_currentAppFilter: {
		m_filterSpec: {
			filterGroups: { bAcceptUnion: boolean; rgOptions: number[] }[];
			nFormatVersion: number;
			setSuggestions: Set<any>;
			strSearchText: string;
		};

		MatchesImpl(e);
		MatchesScoredImpl(e);
	};
	m_eSelectedGameListView: number;
	m_gameListSelection: { nAppId: number; strCollectionId: string };
	m_latchedMostRecentApp: number;
	m_localStorage: SteamLocalStorage;
	m_mapLibrarySectionCollapseState: Map<string, {}>;
	m_setClientSuggestionIds: Set<any>;
	m_setStoreSuggestionIds: Set<any>;
	m_setStoreSuggestions: any;

	BIsSuggestionVisible(e);
	CleanupCollapseStateMap();
	EnsureLargeMode();
	GetActiveWindowInstance();
	GetRecentGamesFirstApp();
	Init(e): Promise<any>;
	InitializeAppFilter(e, t);
	IsGamepadUIWindowActive(e);
	NavigateForward();
	NavigateLibrary(e, t, r);
	PreserveNavigation();
	RestoreNavigation();
	SetCollectionEditorOpen(e);
	SetCollectionRenameOpen(e);
	SetMultiSelectHooksForGameListSelection();
	SetRecentGamesFirstApp(e);
	ShowCollectionViewWithAppTypes(...e);
	ShowSharedAppsInLibrary(e, t);
	UpdateGameListSelection();
}
