import type { CMInterface } from "../normal/shared/CMInterface";

export interface badgeStore {
	m_CMInterface: CMInterface;
	m_mapBadgeData: Map<
		number,
		{
			bMaxed: number;
			dtNextRetry: number;
			nLevel: number;
			nMaxLevel: number;
			nNextLevelXP: number;
			nXP: number;
			rgCards: {
				nOwned: number;
				strArtworkURL: string;
				strImgURL: string;
				strMarketHash: string;
				strName: string;
				strTitle: string;
			}[];
			strIconURL: string;
			strName: string;
			strNextLevelName: string;
		}
	>;
	m_mapCommunityItemDefs: Map<any, any>;

	FetchBadgeData(e): Promise<any>;
	FetchCommunityItemDefinitions(e): Promise<any>;
	GetBadgeData(e);
	GetCommunityItemDefinition(e, t, r);
	GetCommunityItemDefinitions(e);
	Init(e);
	InvalidateBadgeData(e);
}
