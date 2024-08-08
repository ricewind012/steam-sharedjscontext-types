import type { SubscribableValue } from "../normal/shared/interfaces";
import type { CMInterface } from "../normal/shared/CMInterface";

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
