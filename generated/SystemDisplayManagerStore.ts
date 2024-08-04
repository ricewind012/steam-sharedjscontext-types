export interface SystemDisplayManagerStore {
	ClearModeOverride(e): Promise<any>;
	GetState(): Promise<any>;
	SetMode(e, t): Promise<any>;
}
