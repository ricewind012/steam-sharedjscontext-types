import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface appAchievementProgressCache {
	m_CMInterface: CMInterface;
	m_achievementProgress: {
		mapCache: Map<
			number,
			{
				all_unlocked: boolean;
				appid: number;
				cache_time: number;
				percentage: number;
				total: number;
				unlocked: number;
				vetted: boolean;
			}
		>;
		nVersion: number;
	};
	m_cacheUpdateTimer: any;
	m_mapQueuedCacheMisses: Map<any, any>;

	BGameHasAchievements(e);
	GetAchievementProgress(e);
	Init(e): Promise<any>;
	LoadCacheFile(): Promise<any>;
	QueueCacheUpdate(e);
	RequestCacheUpdate(): Promise<any>;
	SaveCacheFile(): Promise<any>;
}
