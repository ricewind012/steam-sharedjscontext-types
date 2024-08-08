import type { CMInterface } from "../normal/shared/CMInterface";

export interface badgeStore {
	m_CMInterface: CMInterface;
	m_mapBadgeData: Map<any, any>;
	m_mapCommunityItemDefs: Map<any, any>;

	FetchBadgeData(e): Promise<any>;
	FetchCommunityItemDefinitions(e): Promise<any>;
	GetBadgeData(e);
	GetCommunityItemDefinition(e, t, r);
	GetCommunityItemDefinitions(e);
	Init(e);
	InvalidateBadgeData(e);
}
