import type { CMInterface } from "../normal/shared/CMInterface";

export interface communityStore {
	m_CMInterface: CMInterface;
	m_CommentThreadStore: {
		m_mapThreads: Map<
			string,
			{
				m_bUpdating: boolean;
				m_eThreadType: number;
				m_gidfeature: string;
				m_gidfeature2: string;
				m_msLastUpdated: number;
				m_rgComments: any[];
				m_steamIDActor: {
					m_ulSteamID: {
						high: number;
						low: number;
						unsigned: boolean;

						function(e);
						function(e);
						function();
						function(e);
						function(e);
						function();
						function();
						function();
						function(e);
						function(e);
						function(e);
						function(e);
						function();
						function(e);
						function();
						function();
						function();
						function();
						function();
						function(e);
						function(e);
						function(e);
						function(e);
						function();
						function();
						function();
						function();
						function();
						function(e);
						function(e);
						function(e);
						function(e);
						function(e);
						function(e);
						function(e);
						function(e);
						function(e);
						function(e);
						function();
						function();
						function(e);
						function();
						function(e);
						function(e);
						function(e);
						function(e);
						function(e);
						function(e);
						function(e);
						function(e);
						function(e);
						function(e);
						function(e);
						function(e);
						function(e);
						function(e);
						function(e);
						function(e);
						function(e);
						function();
						function();
						function();
						function();
						function();
						function(e);
						function();
						function(e);
					};

					BIsClanAccount();
					BIsIndividualAccount();
					BIsValid();
					ConvertTo64BitString();
					GetAccountID();
					GetAccountType();
					GetInstance();
					GetUniverse();
					Render();
					SetAccountID(e);
					SetAccountType(e);
					SetFromComponents(e, t, n, i);
					SetInstance(e);
					SetUniverse(e);
				};
				m_threadInfo: {
					answer_actor: number;
					answer_actor_rank: number;
					answer_commentid: string;
					can_post: boolean;
					comment_thread_type: number;
					comments: any[];
					commentthreadid: string;
					count: number;
					deleted_comments: any[];
					gidfeature: string;
					gidfeature2: string;
					start: number;
					steamid: string;
					total_count: number;
					upvoters: any[];
					upvotes: number;
					user_subscribed: boolean;
					user_upvoted: boolean;
				};

				BLocalUserOwnsThread();
				DeleteComment(e): Promise<any>;
				FetchPastComments(e): Promise<any>;
				FetchRecentComments(): Promise<any>;
				GetSecondsSinceLoaded();
				GetUpVoters();
				PostCommentToThread(e): Promise<any>;
				RefreshIfNeeded();
			}
		>;

		FindOrLoadThread(e, t, r, n);
		FindOrLoadThreadByPublishedFileID(e, t);
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
		m_setEmoticonOwned: Set<any>;
		m_stickerTrackerCallback: any;

		BTransportReady();
		GetServerTime();
		Init(e);
		RequestEmoticonListInternal();
	};
	m_UserStatusPostBBCodeParser: any;

	FormatAndParseUserStatusBBCode(e, t = {});
	Init(e): Promise<any>;
}
