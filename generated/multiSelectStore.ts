export interface multiSelectStore {
	m_anchor: { m_appid: number; m_strCollectionId: string };
	m_bShouldAutoSelectAnchor: boolean;
	m_lastRangeSelection: { m_appid: number; m_strCollectionId: string };
	m_mapOfSelectedApps: Map<any, any>;
}
