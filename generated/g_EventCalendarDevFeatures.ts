export interface g_EventCalendarDevFeatures {
	bIncludeFeaturedAsGameSource: boolean;
	bOpenEventLandingPage: boolean;
	nOverrideDateNow: any;

	BHasTimeOverride();
	GetTimeNowWithOverride();
	GetTimeNowWithOverrideAsDate();
	ParseDevOverrides(e);
}
