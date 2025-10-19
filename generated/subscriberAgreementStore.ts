import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface subscriberAgreementStore {
	m_PromiseLoading: any;
	m_SubscriberAgreementInfo: any;
	m_SubscriberAgreementInfoChangedCallbacks: CCallbackList;
	m_cm: CMInterface;

	AcceptSSA(e): Promise<any>;
	EnsureLoaded();
	GetSubscriberAgreementInfo();
	Init(e);
	LoadSubscriberAgreementInfo(): Promise<any>;
}
