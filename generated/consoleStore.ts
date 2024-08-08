export interface consoleStore {
	m_listenHandle: { unregister(...args: any[]) };
	m_nLineCounter: number;
	m_rgCommandHistory: any[];
	m_rgConsoleSpew: { undefined }[];

	AddSpewLine(e, t);
	Init();
	Reset();
	StartListening();
	StopListening();
}
