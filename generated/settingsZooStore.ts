export interface settingsZooStore {
	m_mapToggles: Map<
		number,
		{
			currentValue: boolean;
			eShowInPanel: number;
			strDescription: string;
			strLabel: string;
		}
	>;

	GetAllToggles();
	GetToggle(e);
	GetToggleSetting(e);
	GetTogglesForPanel(e);
	Init(): Promise<any>;
}
