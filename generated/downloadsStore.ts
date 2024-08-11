import type { CCallbackList } from "../normal/shared/interfaces";
import type { SteamLocalStorage } from "../normal/shared/storage";
import type { CMInterface } from "../normal/shared/CMInterface";

export interface downloadsStore {
	m_DownloadHistory: {
		historyItems: {
			disc_bytes_per_second: number;
			is_upload: boolean;
			network_bytes_per_second: number;
			sample_time: number;
		}[];
		peakDiskBytesPerSecond: number;
		peakNetworkBytesPerSecond: number;
		totalBytes: number;
	};
	m_DownloadItems: { undefined }[];
	m_DownloadOverview: {
		lan_peer_hostname: string;
		paused: boolean;
		throttling_suspended: boolean;
		update_appid: number;
		update_bytes_downloaded: number;
		update_bytes_processed: number;
		update_bytes_staged: number;
		update_bytes_to_download: number;
		update_bytes_to_process: number;
		update_bytes_to_stage: number;
		update_disc_bytes_per_second: number;
		update_is_install: boolean;
		update_is_prefetch_estimate: boolean;
		update_is_shader: boolean;
		update_is_upload: boolean;
		update_is_workshop: boolean;
		update_network_bytes_per_second: number;
		update_peak_network_bytes_per_second: number;
		update_seconds_remaining: number;
		update_start_time: number;
		update_state: string;
	};
	m_MachineStorage: SteamLocalStorage;
	m_cmInterface: CMInterface;
	m_fnCallbackOnDownloadItemsUpdate: CCallbackList;
	m_mapRecentDownloadPreviousBuilds: Map<number, {}>;
	m_rgRecentlyCompleted: { undefined }[];

	GetDownloadItemForAppId(e);
	Init(e);
	LocalizeTimeRemaining(e);
	RecentlyCompletedSortFunction(e, t);
	RegisterForDownloadItemsUpdate(e);
	UpdateRecentlyCompleted(e);
}
