import type { CMInterface } from "../normal/shared/CMInterface";
import type { SubscribableValue } from "../normal/shared/interfaces";

export interface searchstore {
	m_cm: CMInterface;
	m_strSearchText: SubscribableValue<string>;

	BIsSuggestionVisible(e);
	ClearSearchText();
	FetchSearchSuggestions(e, t): Promise<any>;
	GetSearchText();
	Init(e): Promise<any>;
	SetSearchText(e);
}
