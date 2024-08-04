export interface installFolderStore {
	m_InstallFolders: object[];
	m_bLowDiskSpace: boolean;

	BSteamDeckHasLowDiskSpace();
	GetInstallFolder(e);
	Init();
}
