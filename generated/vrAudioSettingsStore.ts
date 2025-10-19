import type { CMInterface } from "../normal/shared/CMInterface";
import type {
	CCallbackList,
	SubscribableValue,
} from "../normal/shared/interfaces";
import type {
	SteamCloudStorage,
	SteamLocalStorage,
} from "../normal/shared/storage";

export interface vrAudioSettingsStore {
	m_AudioMirrorVolume: { available: boolean; muted: boolean; volume: number };
	m_MainVolume: { available: boolean; muted: boolean; volume: number };
	m_MicrophoneVolume: { available: boolean; muted: boolean; volume: number };

	Init(): Promise<any>;
	SetVolumeSettings(e, t);
}
