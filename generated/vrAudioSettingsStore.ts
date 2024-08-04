export interface vrAudioSettingsStore {
	m_AudioMirrorVolume: { available: boolean; muted: boolean; volume: number };
	m_MainVolume: { available: boolean; muted: boolean; volume: number };
	m_MicrophoneVolume: { available: boolean; muted: boolean; volume: number };

	Init(): Promise<any>;
	SetVolumeSettings(e, t);
}
