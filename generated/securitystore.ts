export interface securitystore {
	m_ActiveLockScreenProps: any;
	m_MachineStorage: {
		GetString(e): Promise<any>;
		RemoveObject(e): Promise<any>;
		StoreString(e, t): Promise<any>;
	};
	m_Settings: {
		bLockDesktopMode: boolean;
		bLockOnLogin: boolean;
		bLockOnWake: boolean;
		bShowResetPinModal: boolean;
		bUserForgotPin: boolean;
		strOwnerAccountName: string;
		strPIN: string;
		version: number;
	};
	m_bLockTicket: boolean;

	BConsumeLockTicket();
	BResettingPIN();
	BShowResetPINModal();
	BeginPINReset(): Promise<any>;
	ClearPIN(e = !1);
	ClearPINIfNotUsed();
	GetActiveLockScreenProps();
	GetSettings();
	Init(): Promise<any>;
	InitialLoginComplete(e);
	IsLockScreenActive();
	ProvideLockTicket();
	SetHasShownResetPINModal();
}
