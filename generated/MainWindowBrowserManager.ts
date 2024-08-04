export interface MainWindowBrowserManager {
	m_URL: string;
	m_URLRequested: string;
	m_bExpectImportantReplace: boolean;
	m_bLoading: boolean;
	m_bRouterChangeTriggeredBySync: boolean;
	m_browser: {
		AddGlass(...args: any[]);
		CanGoBackward(...args: any[]);
		CanGoForward(...args: any[]);
		DialogResponse(...args: any[]);
		EnableSteamInput(...args: any[]);
		FindInPage(...args: any[]);
		GetBounds(...args: any[]);
		GoBack(...args: any[]);
		GoForward(...args: any[]);
		HandleContextMenuCommand(...args: any[]);
		LoadURL(...args: any[]);
		NotifyUserActivation(...args: any[]);
		Paste(...args: any[]);
		PostMessage(...args: any[]);
		Reload(...args: any[]);
		ReplaceURL(...args: any[]);
		SetBlockedProtocols(...args: any[]);
		SetBounds(...args: any[]);
		SetFocus(...args: any[]);
		SetName(...args: any[]);
		SetShowContextMenuCallback(...args: any[]);
		SetSteamURLCallback(...args: any[]);
		SetTouchGesturesToCancel(...args: any[]);
		SetVRKeyboardVisibility(...args: any[]);
		SetVisible(...args: any[]);
		SetWindowStackingOrder(...args: any[]);
		StopFindInPage(...args: any[]);
		off(...args: any[]);
		on(...args: any[]);
	};
	m_browserHistory: { entries: object[]; index: number };
	m_history: {
		action: string;
		block(...args: any[]);
		canGo(...args: any[]);
		createHref(...args: any[]);
		entries: object[];
		go(...args: any[]);
		goBack(...args: any[]);
		goForward(...args: any[]);
		index: number;
		length: number;
		listen(...args: any[]);
		location: {
			hash: string;
			key: string;
			pathname: string;
			search: string;
			state: {};
		};
		push(...args: any[]);
		replace(...args: any[]);
	};
	m_lastActiveTab: string;
	m_lastActiveTabURLs: {};
	m_lastLocation: {
		hash: string;
		key: string;
		pathname: string;
		search: string;
		state: {};
	};
	m_loadErrorCode: any;
	m_loadErrorDesc: any;
	m_loadErrorURL: any;
	m_pageSecurity: {
		bHasCertError: boolean;
		bIsEVCert: boolean;
		bIsSecure: boolean;
		certExpiry: number;
		certName: string;
		issuerName: string;
		nCertBits: number;
	};
	m_rootTabURLs: { community: string; me: string; store: string };
	m_strTitle: string;
	m_tabbedBrowserStore: {
		m_cbWebPageRequestsChanged: {
			m_vecCallbacks: function[];

			ClearAllCallbacks();
			CountRegistered();
			Dispatch(...e);
			Register(e);
		};
		m_nActiveWebpageRequestID: number;
		m_nWebPageRequestID: number;
		m_rgWebPageRequests: any[];

		AddWebPageRequest(e, t);
		GetWebPageRequestsChangedCallbackList();
		RemoveAllRequests();
		RemoveWebPageRequest(e);
		ReorderWebPageRequest(e, t);
		Set(e, t, r);
		UpdateWebPageRequest(e, t, r);
	};
	m_tsWaitingForBrowserChange: any;

	BIsWaitingForHistoryCallback();
	GetLastActiveTab();
	GetTabForURL(e);
	LoadURL(e);
	OnHistoryChanged(e);
	StartWaitingForHistoryCallback();
	SyncWithNewBrowserHistory(e);
	SyncWithNewRouterEvent(e, t);
	UpdateActiveTab(e);
}
