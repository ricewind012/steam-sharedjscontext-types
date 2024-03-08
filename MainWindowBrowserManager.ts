import { CCallbackList } from "./shared/interfaces";

type SteamBrowserAction = "POP" | "PUSH" | "REPLACE";

interface SteamBrowserHistoryEntry {
	hash: string;
	key: string;
	pathname: string;
	search: string;

	/**
	 * Present if `pathname` is `/browser/`.
	 */
	state?: {
		/**
		 * `true` if called from Steam.
		 */
		bExternal: boolean;
		/**
		 * Entry URL.
		 */
		strURL: string;
	};
}

interface SteamBrowserHistory {
	entries: SteamBrowserHistoryEntry[];
	index: number;
}

interface SteamBrowserHistory_Full extends SteamBrowserHistory {
	action: SteamBrowserAction;
	block(param0): any;
	canGo(index: number): boolean;
	createHref(entry: SteamBrowserHistoryEntry): string;
	go(param0: any): any;
	goBack(): void;
	goForward(): void;

	/** `entries` length. */
	length: number;

	listen(param0): any;

	/** Current location. */
	location: SteamBrowserHistoryEntry;

	push(param0, param1): any;
	replace(param0, param1): any;
}

interface TabbedBrowserWebPageRequest {
	requestid: number;
	strLastURL: string;
	strTitle: string;
	strURL: string;
}

interface CTabbedBrowserStore {
	m_cbWebPageRequestsChanged: CCallbackList;
	m_nActiveWebpageRequestID: number;
	m_nWebPageRequestID: number;
	m_rgWebPageRequests: TabbedBrowserWebPageRequest[];

	/**
	 * @param url Web page's URL. `data:text/html,<body></body>` by default.
	 */
	AddWebPageRequest(url?: string, param1?): void;

	GetWebPageRequestsChangedCallbackList(): CCallbackList;

	/**
	 * Exactly what its name says. Closes the browser, too.
	 */
	RemoveAllRequests(): void;

	/**
	 * Exactly what its name says.
	 */
	RemoveWebPageRequest(requestId: number): boolean;

	ReorderWebPageRequest(param0, param1): void;

	/**
	 * @todo Probably used to init this.
	 */
	Set(
		activeWebpageRequestId: number,
		webPageRequestId: number,
		webPageRequests: TabbedBrowserWebPageRequest[],
	): void;

	/**
	 * @param requestId Web page request ID, like in {@link TabbedBrowserWebPageRequest.requestid}}.
	 * @param url Web page's URL.
	 * @param title Web page's `<title>`.
	 *
	 * @returns Whether the request ID exists.
	 */
	UpdateWebPageRequest(
		requestId?: number,
		url?: string,
		title?: string,
	): boolean;
}

type SteamBrowserTab = "community" | "store" | "me";

export default interface MainWindowBrowserManager {
	/** Current URL. */
	m_URL: string;

	/** Current URL. */
	m_URLRequested: string;

	m_bExpectImportantReplace: boolean;

	/** Whether the page is loading or not. */
	m_bLoading: boolean;

	m_bRouterChangeTroggeredBySync: boolean;

	/** `BrowserViewPopup` */
	m_browser: any;

	/** Browser history. */
	m_browserHistory: SteamBrowserHistory;

	/** Browser history. */
	m_history: SteamBrowserHistory_Full;

	m_lastActiveTab: SteamBrowserTab;
	m_lastActiveTabURLs: {
		community: string;
		me: string;
		store: string;
	};
	m_lastLocation: SteamBrowserHistoryEntry;
	m_loadErrorCode: any | null;
	m_loadErrorDesc: any | null;
	m_loadErrorURL: any | null;

	/** `BrowserViewPageSecurity` */
	m_pageSecurity: any | null;

	m_rootTabURLs: {
		store: "StoreFrontPage";
		community: "CommunityFrontPage";
		me: "SteamIDMyProfile";
	};

	/** Current location's `<title>`. */
	m_strTitle: string;

	m_tabbedBrowserStore: CTabbedBrowserStore;
	m_tsWaitingForBrowserChange?: number;

	ActivateTab(tab: SteamBrowserTab): void;
	BIsWaitingForHistoryCallback(): boolean;
	GetLastActiveTab(): SteamBrowserTab;
	GetTabForURL(url: string): SteamBrowserTab | "ignore" | "maintain";
	LoadURL(url: string): void;

	/**
	 * Reloads the current page.
	 */
	Reload(): void;
	ShowURL(url: string, param1: any): void;
	SyncWithNewBrowserHistory(entry: SteamBrowserHistory): void;
	SyncWithNewRouterEvent(
		entry: SteamBrowserHistoryEntry,
		action: SteamBrowserAction,
	): void;
	UpdateActiveTab(url: string): void;
}
