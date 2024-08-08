export interface UpdateStore {
	m_currentOSBranch: { eBranch: number; sRawName: string };
	m_rgOSBranches: any[];
	m_updater: {
		m_bOOBEUpdateSucceded: boolean;
		m_bUpdateStateForced: boolean;
		m_promiseEnsureOOBEUpdateApplying: any;
		m_spoofer: any;
		m_updateState: {
			state: number;
			supports_os_updates: boolean;
			update_apply_results: any[];
			update_check_results: {
				available: boolean;
				eresult: number;
				rtime_checked: number;
				type: number;
			}[];
		};

		ApplyUpdate(e, t, r = !1): Promise<any>;
		CheckForUpdates(e): Promise<any>;
		EnsureOOOBEUpdateApplying();
		ForceUpdateStateApplying();
		ForceUpdateStateAvailable();
		ForceUpdateStateRollBack();
		GetApplyResult(e);
		GetAvailableTypes();
		GetCheckResult(e);
		GetCurrentBytes();
		GetLastCheckTime();
		GetMostSpecificApplyResult();
		GetMostSpecificCheckResult();
		GetProgressPercent();
		GetUpdateSize();
		SelectOSBranch(e, t = null): Promise<any>;
		SetUpdateState(e);
		ToggleFakeUpdate();
	};

	ForceUpdateCurrentOSBranch();
	ForceUpdateOSBranches();
	ForceUpdateStateApplying();
	ForceUpdateStateAvailable();
	ForceUpdateStateRollBack();
}
