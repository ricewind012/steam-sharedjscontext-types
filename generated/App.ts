import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface App {
	m_CurrentUser: {
		NotificationCounts: {
			async_game_updates: number;
			comments: number;
			gifts: number;
			help_request_replies: number;
			inventory_items: number;
			invites: number;
			moderator_messages: number;
			offline_messages: number;
			trade_offers: number;
		};
		bHWSurveyPending: boolean;
		bIsLimited: boolean;
		bIsOfflineMode: boolean;
		bPromptToChangePassword: boolean;
		bSupportAckOnlyMessages: boolean;
		bSupportAlertActive: boolean;
		bSupportPopupMessage: boolean;
		strAccountBalance: string;
		strAccountBalancePending: string;
		strAccountName: string;
		strClientInstanceID: string;
		strFamilyGroupID: string;
		strSteamID: string;
	};
	m_bFinishedStage1: boolean;
	m_bHaveShownSupportAlertModal: boolean;
	m_bServicesInitialized: boolean;
	m_bStartedStage2: boolean;
	m_bWasEverLoggedIn: boolean;
	m_cm: CMInterface;
	m_eLoginState: number;
	m_mapCloudStorage: Map<
		number,
		{
			m_eNamespace: number;

			Get(e);
			GetByPrefix(e);
			GetMapForPrefix(e);
			GetObject(e): Promise<any>;
			GetString(e): Promise<any>;
			RegisterForChangeNotifications(e);
			RemoveObject(e, t, r): Promise<any>;
			StoreObject(e, t, r, n): Promise<any>;
			StoreString(e, t, r, n): Promise<any>;
		}
	>;

	BFinishedInitStageOne();
	BHardwareSurveyPending();
	BHasAckOnlyActiveSupportAlerts();
	BHasActiveSupportAlerts();
	BHasCurrentUser();
	BIsFamilyGroupMember(e);
	BIsInFamilyGroup();
	BIsInOOBE();
	BIsOfflineMode();
	BMustShowSupportAlertDialog();
	BWasEverLoggedIn();
	GetCloudStorage(e = 1);
	GetCloudStorageForLibrary();
	GetCurrentUser();
	GetFamilyGroupID();
	GetFamilyGroupName();
	GetServicesInitialized();
	Init(e): Promise<any>;
	InitStage2(): Promise<any>;
	OptOutOfSurvey();
	PrefetchParentalSettingsForChildren(e);
	SendSurvey();
	ShowSupportAlertsModal();
	WaitForServicesInitialized(): Promise<any>;
}
