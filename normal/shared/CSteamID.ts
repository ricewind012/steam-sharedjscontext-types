import type { ESteamRealm } from "./enums";

export enum EAccountType {
	Invalid = 0,
	Individual = 1,
	Multiseat = 2,
	GameServer = 3,
	AnonGameServer = 4,
	Pending = 5,
	ContentServer = 6,
	Clan = 7,
	Chat = 8,
	ConsoleUser = 9,
	AnonUser = 10,
	Max = 11,
}

export interface CSteamID {
	m_ulSteamID: {
		high: number;
		low: number;
		unsigned: boolean;
	};

	BIsClanAccount(): boolean;
	BIsIndividualAccount(): boolean;
	BIsValid(): boolean;

	/**
	 * @returns SteamID 64
	 */
	ConvertTo64BitString(): string;

	GetAccountID(): number;
	GetAccountType(): EAccountType;
	GetInstance(): number;
	GetUniverse(): ESteamRealm;

	/**
	 * @returns SteamID 3
	 */
	Render(): string;

	SetAccountID(value: number): void;
	SetAccountType(value: number): void;
	SetFromComponents(
		accountId: number,
		instance: number,
		accountType: EAccountType,
		universe: ESteamRealm,
	): void;
	SetInstance(value: number): void;
	SetUniverse(value: ESteamRealm): void;
}
