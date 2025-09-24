import type { CMInterface } from "../normal/shared/CMInterface";
import type { CCallbackList } from "../normal/shared/interfaces";
import type { SteamLocalStorage } from "../normal/shared/storage";

export interface downloadsStore {
	m_DownloadHistory: {
		historyItems: {
			appid: number;
			disc_bytes_per_second: number;
			is_upload: boolean;
			network_bytes_per_second: number;
			rt_sample_time: number;
		}[];
	};
	m_DownloadItems: { undefined }[];
	m_DownloadOverview: {
		history: any;
		lan_peer_hostname: string;
		overall_percent_complete: number;
		paused: boolean;
		progress: {
			bytes_in_progress: number;
			bytes_total: number;
			estimated_time_remaining_sec: number;
		}[];
		throttling_suspended: boolean;
		update_appid: number;
		update_disc_bytes_per_second: number;
		update_is_install: boolean;
		update_is_prefetch_estimate: boolean;
		update_is_shader: boolean;
		update_is_upload: boolean;
		update_is_workshop: boolean;
		update_network_bytes_per_second: number;
		update_peak_network_bytes_per_second: number;
		update_publishedfileid: string;
		update_start_time: number;
		update_state: string;
		update_state_flags: number;
	};
	m_MachineStorage: SteamLocalStorage;
	m_cmInterface: CMInterface;
	m_fnCallbackOnDownloadItemsUpdate: CCallbackList;
	m_mapRecentDownloadPreviousBuilds: Map<number, { undefined }>;
	m_rgRecentlyCompleted: { undefined }[];

	GetDownloadItemForAppId(e);
	Init(e);
	LocalizeTimeRemaining(e);
	RecentlyCompletedSortFunction(e, t);
	RegisterForDownloadItemsUpdate(e);
	UpdateRecentlyCompleted(e);
}
