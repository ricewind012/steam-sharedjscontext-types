import type { CloudStorage } from "./shared/storage";
import type { CMInterface } from "../normal/shared/CMInterface";

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
	m_bSupportAlertModalActive: boolean;
	m_bWasEverLoggedIn: boolean;
	m_cloudStorage: CloudStorage;
	m_cm: CMInterface;
	m_eLoginState: number;

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
	BSupportAlertDialogActive();
	BWasEverLoggedIn();
	CloseSupportAlertsModal();
	GetCloudStorageForLibrary();
	GetCurrentUser();
	GetFamilyGroupID();
	GetFamilyGroupName();
	GetServicesInitialized();
	Init(e): Promise<any>;
	InitStage2(): Promise<any>;
	OptOutOfSurvey();
	SendSurvey();
	ShowSupportAlertsModal();
	WaitForServicesInitialized(): Promise<any>;
}
