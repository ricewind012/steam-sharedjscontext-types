import type { CMInterface } from "../normal/shared/CMInterface";

export interface workshopStore {
	m_CMInterface: CMInterface;
	m_LoadDelayMS: number;
	m_LoadQueue: any[];
	m_LoadTimer: number;
	m_hRegisterForItemInstalled: { unregister(...args: any[]) };
	m_hRegisterForWorkshopChanges: { unregister(...args: any[]) };
	m_mapPublishedFiles: Map<any, any>;
	m_mapWorkshopItemsDownloaded: Map<any, any>;
	m_mapWorkshopItemsDownloading: Map<any, any>;
	m_mapWorkshopItemsSubscribed: Map<any, any>;
	m_mapWorkshopItemsSubscriptionCount: Map<any, any>;
	m_mapWorkshopItemsTrendy: Map<any, any>;

	BConnectedToSteam();
	BVotedForPublishedFile(e);
	CreateNewCollection(e, t, r, n): Promise<any>;
	Download(e, t);
	FetchDownloadedItems(e): Promise<any>;
	FetchItemDataUsingRequest(e): Promise<any>;
	FetchSubscribedItems(e): Promise<any>;
	FetchTopClassicItems(e): Promise<any>;
	FetchTrendyItems(e): Promise<any>;
	FetchTrendyWorkshopItems(e): Promise<any>;
	GetDownloadedItems(e);
	GetDownloadingItems(e);
	GetNumSubscribedItems(e);
	GetPublishedFile(e);
	GetPublishedFiles(e);
	GetSubscribedItems(e);
	GetTrendyWorkshopItems(e);
	HideWorkshopItem(e, t): Promise<any>;
	Init(e);
	InvalidateWorkshopItems(e);
	LoadPublishedFiles(e): Promise<any>;
	RefreshVoteSummary(e): Promise<any>;
	ReorderSubscribedItems(e, t, r);
	ReorderSubscribedItemsByDependencies(e);
	SaveToCollection(e, t, r): Promise<any>;
	SetSubscriptionsFromCollection(e, t, r): Promise<any>;
	Subscribe(e, t);
	Unsubscribe(e, t);
	VoteOnPublishedFile(e, t): Promise<any>;
}
