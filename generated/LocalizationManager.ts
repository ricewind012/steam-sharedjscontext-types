import type { CCallbackList } from "../normal/shared/interfaces";

export interface LocalizationManager {
	m_cbkTokensChanged: CCallbackList;
	m_mapFallbackTokens: Map<any, any>;
	m_mapTokens: Map<
		string,
		{
			0: string;
			1: string;
			2: string;
			3: string;
			4: string;
			5: string;
			6: string;
		}
	>;
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
