import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface g_EventCalendarDevFeatures {
	bIncludeFeaturedAsGameSource: boolean;
	bOpenEventLandingPage: boolean;
	nOverrideDateNow: any;

	BHasTimeOverride();
	GetTimeNowWithOverride();
	GetTimeNowWithOverrideAsDate();
	ParseDevOverrides(e);
}
