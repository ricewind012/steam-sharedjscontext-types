import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface g_EventCalendarTrackingStore {
	m_nFutureViewableEvents: number;
	m_nFutureViewedIndex: number;
	m_nLastRecordedFilter: number;
	m_nPastViewedDays: number;
	m_nPastViewedIndex: number;
	m_sBrowserID: any;
	m_scheduledFilterChange: {
		m_fnCallback: any;
		m_schTimer: any;

		Cancel();
		IsScheduled();
		Schedule(e, t);
	};
	m_scheduledFutureStats: {
		m_fnCallback: any;
		m_schTimer: any;

		Cancel();
		IsScheduled();
		Schedule(e, t);
	};
	m_scheduledPastStats: {
		m_fnCallback: any;
		m_schTimer: any;

		Cancel();
		IsScheduled();
		Schedule(e, t);
	};

	GetTimeSpentOnPageS(e);
	InitBrowserID();
	RecordAppInteractionEvent(e, t);
	RecordFilterChangeEvent(e);
	RecordViewedEvent(e, t);
	SendExperimentEventToSteam(e, t);
}
