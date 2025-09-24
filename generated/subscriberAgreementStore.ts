import type { CMInterface } from "../normal/shared/CMInterface";
import type { CCallbackList } from "../normal/shared/interfaces";

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
