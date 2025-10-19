import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface LocalizationManager {
	m_bReportIndividualMissingTokens: boolean;
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
	InitFromObjects(e, t, n, r, i, s);
	LocalizeIfToken(e, t);
	LocalizeString(e, t);
	LocalizeStringFromFallback(e);
	SetPreferredLocales(e);
}
