export interface loginStore {
	m_bSecureComputer: boolean;
	m_eLoginResult: number;
	m_eLoginState: number;
	m_hLoginStateChange: { unregister(...args: any[]) };
	m_nLoginPercentage: number;
	m_strAccountName: string;
	m_strEmailDomain: string;
	m_vecLoginUsers: {
		accountName: string;
		avatarUrl: string;
		hasPin: boolean;
		personaName: string;
		rememberPassword: boolean;
	}[];

	GetLoginUsers();
	Init(): Promise<any>;
	RemoveAllUsers(): Promise<any>;
	RemoveUser(e): Promise<any>;
	componentWillUnmount();
}
