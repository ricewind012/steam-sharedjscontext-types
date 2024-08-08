export interface appDetailsCache {
	m_mapAppDetailsCache: Map<number, {}>;

	BHasDataForApp(e);
	FetchDataForApp(e): Promise<any>;
	GetCachedDataForApp(e, t, r): Promise<any>;
	LookupCachedDataForApp(e, t, r);
	SetCachedDataForApp(e, t, r, n);
}
