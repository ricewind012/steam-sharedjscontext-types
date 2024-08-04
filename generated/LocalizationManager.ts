export interface LocalizationManager {
	m_cbkTokensChanged: {
		m_vecCallbacks: any[];

		ClearAllCallbacks();
		CountRegistered();
		Dispatch(...e);
		Register(e);
	};
	m_mapFallbackTokens: {};
	m_mapTokens: {};
	m_rgLocalesToUse: string[];

	AddTokens(e, t);
	BLooksLikeToken(e);
	GetELanguageFallbackOrder(e = null);
	GetPreferredLocales();
	GetTokensChangedCallbackList();
	InitDirect(e, t);
	InitFromObjects(e, t, r, n, i);
	LocalizeIfToken(e, t);
	LocalizeString(e, t);
	LocalizeStringFromFallback(e);
	SetPreferredLocales(e);
}
