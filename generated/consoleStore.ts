export interface consoleStore {
	m_listenHandle: any;
	m_nLineCounter: number;
	m_rgCommandHistory: any[];
	m_rgConsoleSpew: any[];

	AddSpewLine(e, t);
	Init();
	Reset();
	StartListening();
	StopListening();
}
