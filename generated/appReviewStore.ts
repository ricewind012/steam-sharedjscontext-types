import type { CMInterface } from "../normal/shared/CMInterface";

export interface appReviewStore {
	m_CMInterface: CMInterface;
	m_mapRecommendationDetailsByApp: Map<any, any>;

	FetchRecommendationDetails(e, t): Promise<any>;
	GetReview(e, t, r): Promise<any>;
	GetStoredReview(e, t);
	Init(e);
}
