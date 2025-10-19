import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface SuspendResumeStore {
	m_bResuming: boolean;
	m_bShowResumeUI: boolean;
	m_bSuspending: boolean;
	m_cSuspendBlockers: number;
	m_eSuspendResumeProgress: number;
	m_nSuspendSleepMS: number;

	BShowSuspendResumeDialogs();
	BlockSuspendAction();
	GetSuspendResumeState();
	Init();
	InitiateResume();
	InitiateSleep();
	NotifyResumeUIDone();
}
