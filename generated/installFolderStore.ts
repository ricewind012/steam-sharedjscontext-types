export interface installFolderStore {
	m_InstallFolders: { undefined }[];
	m_bLowDiskSpace: boolean;

	BSteamDeckHasLowDiskSpace();
	GetInstallFolder(e);
	Init();
}
