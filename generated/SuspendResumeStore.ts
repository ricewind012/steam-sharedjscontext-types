export interface SuspendResumeStore {
	m_bResuming: boolean;
	m_bShowResumeUI: boolean;
	m_bSuspending: boolean;
	m_cSuspendBlockers: number;
	m_eSuspendResumeProgress: any;
	m_nSuspendSleepMS: number;

	BShowSuspendResumeDialogs();
	BlockSuspendAction();
	GetSuspendResumeState();
	Init();
	InitiateResume();
	InitiateSleep();
	NotifyResumeUIDone();
}
