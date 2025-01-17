import type { CCallbackList } from "./shared/interfaces";

// TODO: https://www.npmjs.com/package/@types/react-router?activeTab=code

export type SteamBrowserAction = "POP" | "PUSH" | "REPLACE";

export type SteamBrowserTab = "community" | "store" | "me";

export type SteamBrowserTabs = {
	[key in SteamBrowserTab]: string;
};

export interface SteamBrowserHistoryEntry {
	hash: string;
	key: string;
	pathname: string;
	search: string;

	/**
	 * Present if `pathname` is `/browser/`.
	 * @todo Move this to different interfaces according to the route.
	 */
	state?: {
		/**
		 * `true` if called from Steam.
		 */
		bExternal?: boolean;
		/**
		 * Entry URL.
		 */
		strURL?: string;
	};
}

export interface SteamWebBrowserHistory {
	entries: SteamBrowserHistoryEntry[];
	index: number;
}

export interface SteamRouterHistory extends SteamWebBrowserHistory {
	action: SteamBrowserAction;
	block(param0: any): any;
	canGo(index: number): boolean;

	/**
	 * Creates a route string from a history entry.
	 */
	createHref(entry: SteamBrowserHistoryEntry): string;
	go(param0: any): any;
	goBack(): void;
	goForward(): void;

	/** `entries` length. */
	length: number;

	listen(param0: any): any;

	/** Current route. */
	location: SteamBrowserHistoryEntry;

	push(param0: any, param1: any): any;
	replace(param0: any, param1: any): any;
}

export interface TabbedBrowserWebPageRequest {
	requestid: number;
	strLastURL: string;
	strTitle: string;
	strURL: string;
}

export interface CTabbedBrowserStore {
	m_cbWebPageRequestsChanged: CCallbackList;
	m_nActiveWebpageRequestID: number;
	m_nWebPageRequestID: number;
	m_rgWebPageRequests: TabbedBrowserWebPageRequest[];

	/**
	 * @param url Web page's URL. `data:text/html,<body></body>` by default.
	 */
	AddWebPageRequest(url?: string, param1?: any): void;

	GetWebPageRequestsChangedCallbackList(): CCallbackList;

	/**
	 * Exactly what its name says. Closes the browser, too.
	 */
	RemoveAllRequests(): void;

	/**
	 * Exactly what its name says.
	 */
	RemoveWebPageRequest(requestId: number): boolean;

	ReorderWebPageRequest(param0: any, param1: any): void;

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

	/** Web browser history. */
	m_browserHistory: SteamWebBrowserHistory;

	/** Router history. */
	m_history: SteamRouterHistory;

	m_lastActiveTab: SteamBrowserTab;
	m_lastActiveTabURLs: SteamBrowserTabs;
	m_lastLocation: SteamBrowserHistoryEntry;
	m_loadErrorCode: any | null;
	m_loadErrorDesc: any | null;
	m_loadErrorURL: any | null;

	/** `BrowserViewPageSecurity` */
	m_pageSecurity: any | null;

	m_rootTabURLs: SteamBrowserTabs;

	/** Current location's `<title>`. */
	m_strTitle: string;

	m_tabbedBrowserStore: CTabbedBrowserStore;
	m_tsWaitingForBrowserChange: number | undefined;

	ActivateTab(tab: SteamBrowserTab): void;
	BIsWaitingForHistoryCallback(): boolean;
	GetLastActiveTab(): SteamBrowserTab;
	GetTabForURL(url: string): SteamBrowserTab | "ignore" | "maintain";

	/**
	 * @todo Loads a URL, but `bExternal` is `false`.
	 */
	LoadURL(url: string): void;

	/**
	 * Reloads the current page.
	 */
	Reload(): void;

	/**
	 * @todo Loads a URL, but `bExternal` is `true`.
	 */
	ShowURL(url: string, param1: any): void;
	SyncWithNewBrowserHistory(entry: SteamWebBrowserHistory): void;
	SyncWithNewRouterEvent(
		entry: SteamBrowserHistoryEntry,
		action: SteamBrowserAction,
	): void;
	UpdateActiveTab(url: string): void;
}
