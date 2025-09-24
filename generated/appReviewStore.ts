import type { CMInterface } from "../normal/shared/CMInterface";

export interface appReviewStore {
	m_CMInterface: CMInterface;
	m_mapRecommendationDetailsByApp: Map<
		number,
		{
			changeListeners_: any;
			data_: Map<
				string,
				{
					changeListeners_: any;
					dehancer: any;
					diffValue_: number;
					enhancer(...args: any[]);
					equals(...args: any[]);
					hasUnreportedChange_: boolean;
					interceptors_: any;
					isBeingObserved: boolean;
					isPendingUnobservation: boolean;
					lastAccessedBy_: number;
					lowestObserverState_: number;
					name_: string;
					observers_: Set<{ undefined }>;
					onBOL: any;
					onBUOL: any;
					value_: {
						appid: number;
						comment_count: number;
						comments_disabled: boolean;
						developer_response: string;
						is_public: boolean;
						language: string;
						last_playtime: number;
						playtime_2weeks: number;
						playtime_at_review: number;
						playtime_forever: number;
						reactions: any[];
						received_compensation: boolean;
						recommendationid: string;
						review: string;
						review_qualities: any[];
						steamid: string;
						tags: any[];
						time_created: number;
						time_developer_responded: number;
						time_updated: number;
						vote_score: number;
						voted_up: boolean;
						votes_down: number;
						votes_funny: number;
						votes_up: number;
						written_during_early_access: boolean;
					};

					function(e);
					function();
					function(e);
					function(e, t);
					function(e);
					function();
					function(e);
					function(e);
					function();
					function();
					function();
				}
			>;
			dehancer: any;
			enhancer_(...args: any[]);
			hasMap_: Map<
				string,
				{
					changeListeners_: any;
					dehancer: any;
					diffValue_: number;
					enhancer(...args: any[]);
					equals(...args: any[]);
					hasUnreportedChange_: boolean;
					interceptors_: any;
					isBeingObserved: boolean;
					isPendingUnobservation: boolean;
					lastAccessedBy_: number;
					lowestObserverState_: number;
					name_: string;
					observers_: Set<{ undefined }>;
					onBOL: any;
					onBUOL: Set<function>;
					value_: boolean;

					function(e);
					function();
					function(e);
					function(e, t);
					function(e);
					function();
					function(e);
					function(e);
					function();
					function();
					function();
				}
			>;
			interceptors_: any;
			keysAtom_: {
				diffValue_: number;
				isBeingObserved: boolean;
				isPendingUnobservation: boolean;
				lastAccessedBy_: number;
				lowestObserverState_: number;
				name_: string;
				observers_: Set<any>;
				onBOL: any;
				onBUOL: any;

				function();
				function();
				function();
				function();
				function();
			};
			name_: string;

			function(e, t);
			function();
			function(e);
			function(e);
			function();
			function(e, t);
			function(e);
			function(e);
			function(e);
			function(e);
			function();
			function(e);
			function(e, t);
			function(e);
			function(e, t);
			function();
			function();
			function(e, t);
			function();
		}
	>;

	FetchRecommendationDetails(e, t): Promise<any>;
	GetReview(e, t, r): Promise<any>;
	GetStoredReview(e, t);
	Init(e);
}
