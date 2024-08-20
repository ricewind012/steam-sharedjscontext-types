import type { CMInterface } from "../normal/shared/CMInterface";

export interface communityStore {
	m_CMInterface: CMInterface;
	m_CommentThreadStore: {
		m_mapThreads: Map<any, any>;

		FindOrLoadThread(e, t, r, n);
		FindOrLoadThreadByPublishedFileID(e, t);
	};
	m_EmoticonHoverStore: {
		m_inflightRequests: {};
		m_mapEmoticonHovers: Map<any, any>;

		BLoaded(e);
		Get(e);
		Load(e): Promise<any>;
	};
	m_EmoticonStore: {
		m_CMInterface: CMInterface;
		m_bEmoticonListRequested: boolean;
		m_bInitialized: boolean;
		m_emoticonTrackerCallback: any;
		m_rgEffects: any[];
		m_rgEmoticons: any[];
		m_rgFlairs: any[];
		m_rgRecentEmoticons: any;
		m_rgRecentStickers: any;
		m_rgStickers: any[];
		m_rtLastStickerOrEffect: number;
		m_rtMostRecentEmoticon: any;
		m_stickerTrackerCallback: any;

		BInitialized();
		GetServerTime();
		Init(e);
		RequestEmoticonListInternal();
	};
	m_UserStatusPostBBCodeParser: any;

	FormatAndParseUserStatusBBCode(e, t = {});
	Init(e): Promise<any>;
}
