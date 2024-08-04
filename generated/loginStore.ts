export interface loginStore {
	m_bSecureComputer: boolean;
	m_eLoginResult: number;
	m_eLoginState: number;
	m_hLoginStateChange: { unregister(...args: any[]) };
	m_nLoginPercentage: number;
	m_strAccountName: string;
	m_strEmailDomain: string;
	m_vecLoginUsers: object[];

	GetLoginUsers();
	Init(): Promise<any>;
	RemoveAllUsers(): Promise<any>;
	RemoveUser(e): Promise<any>;
	componentWillUnmount();
}
