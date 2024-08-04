export interface libraryHoverStore {
	m_embeddedElements: {
		m_mapEmbeddedHovers: {};
		m_strUniqueID: string;

		GetEmbeddedElement(e);
		HideElement(e, t, r);
		ShowElement(e, t, r);
		ShowElementDelayed(e, t, r, n);
	};

	HideHover(e, t, r);
	IsElementChildOfHover(e, t);
	ShowHover(e, t, r);
}
