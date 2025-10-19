import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface appReviewStore {
	m_CMInterface: CMInterface;
	m_mapRecommendationDetailsByApp: Map<any, any>;

	FetchRecommendationDetails(e, t): Promise<any>;
	GetReview(e, t, r): Promise<any>;
	GetStoredReview(e, t);
	Init(e);
}
