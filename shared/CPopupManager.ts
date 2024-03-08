import { EBrowserType } from "./enums";
import { BrowserContext } from "./interfaces";

interface RestoreDetails {
	bExpires: boolean;
	/**
	 * Date as a Unix timestamp.
	 */
	last_used: number;
	strRestoreDetails: string;
}

interface SteamPopupParameters {
	availscreenheight: number;
	availscreenwidth: number;
	bHideOnClose: boolean;
	bModal: boolean;
	bNoFocusOnShow: boolean;
	bPinned: boolean;
	/**
	 * Popup's <body> class.
	 */
	body_class: string;
	browserType: EBrowserType;
	/**
	 * Popup is centered on this window.
	 */
	center_on_window: Window;
	dimensions: {
		height: number;
		left: number;
		top: number;
		width: number;
	};
	/**
	 * {@link EPopupCreationFlags}
	 */
	eCreationFlags: number;
	/**
	 * Popup <html> class.
	 */
	html_class: string;
	/**
	 * @todo unused ?
	 */
	hwndParent: number;
	/**
	 * Popup minimum height.
	 */
	minHeight: number;
	/**
	 * Popup minimum width.
	 */
	minWidth: number;
	/**
	 * Parent browser ID.
	 */
	parent_container_popup_id: number;
	popup_class: string;
	replace_existing_popup: boolean;
	strRestoreDetails: string;
	strUserAgent: string;
	strVROverlayKey: string;
	target_browser: BrowserContext;
	/**
	 * Tab name.
	 */
	m_strName: string;
	/**
	 * Document title.
	 */
	m_strTitle: string;
	/**
	 * Parent browser ID.
	 */
	window_opener_id: number;

	DoCallback(e);
	OnBlur();
	OnClose();
	OnCreate();
	OnFocus();
	OnLoad();
	OnResize();
	Render(e, t);
	UpdateParamsBeforeShow(e);
}

interface SteamPopup {
	m_bCreateHidden: boolean;
	m_bCreated: boolean;
	m_bFocused: boolean;
	m_callbacks: {
		onLoad(e, t);
		onResize(t, r, i);
		updateParamsBeforeShow(...args: any[]);
	};
	m_element: HTMLElement;
	m_fnReadyToRender(...args: any[]);
	m_onCreateRender: any;
	m_popup: Window;
	m_renderWhenReady: {
		m_fnRender: any|undefined;
		m_rgLoadingLinks: any[];

		AddLink(e, t);
		SetTarget(e);
	};
	m_rgParams: Partial<SteamPopupParameters>;
}

export interface CPopupManager {
	DebouncedSaveSavedDimensionStore_DebounceProperties: {
		hTimer: any;
		nPending: number;
	};
	m_DynamicCSSObserver: MutationObserver;
	m_bSaveRequired: boolean;
	m_bShuttingDown: boolean;
	m_mapPopups: Map<string, SteamPopup>;
	m_mapRestoreDetails: Map<string, RestoreDetails>;
	m_rgPopupCreatedCallbacks: ((...args: any[]) => void)[];
	m_rgShutdownCallbacks: ((...args: any[]) => void)[];
	m_unCurrentAccountID: number;

	AddPopupCreatedCallback(e);
	AddShutdownCallback(e);
	AddTrackedPopup(e);
	BAnyMenuHasFocus(): boolean;
	BAnyPopupHasFocus(): boolean;
	BShuttingDown(): boolean;
	ClearSavedDimensionStore();
	ClosePopupsOwnedByBrowser(e);
	GetExistingPopup(e);
	GetLocalStorageKey();
	GetPopupForWindow(e);
	GetPopups();
	GetRestoreDetails(e);
	LoadSavedDimensionStore();
	RemoveTrackedPopup(e);
	SaveSavedDimensionStore();
	SetCurrentLoggedInAccountID(e);
	SetRestoreDetails(e, t, n);
}
