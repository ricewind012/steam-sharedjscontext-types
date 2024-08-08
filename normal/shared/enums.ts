export enum EBrowserType {
	OffScreen = 0,
	OpenVROverlay = 1,
	OpenVROverlay_Dashboard = 2,
	DirectHWND = 3,
	DirectHWND_Borderless = 4,
	DirectHWND_Hidden = 5,
	ChildHWNDNative = 6,
	Transparent_Toplevel = 7,
	OffScreen_SharedTexture = 8,
	OffScreen_GameOverlay = 9,
	OffScreen_GameOverlay_SharedTexture = 10,
	Offscreen_FriendsUI = 11,
	Offscreen_SteamUI = 12,
	OpenVROverlay_Subview = 13,
}

export enum EUIMode {
	Unknown = -1,
	GamePad = 4,
	Desktop = 7,
}

export enum ESteamRealm {
	Unknown = 0,
	Global = 1,
	China = 2,
}
