import { InfoPanelEnum } from '@/enums';
import { create } from 'zustand';

interface InfoPanelState {
  isOpen: boolean;
  activePanel: InfoPanelEnum | null;
  openPanel: (panel: InfoPanelEnum) => void;
  closePanel: () => void;
  togglePanel: () => void;
  setActivePanel: (panel: InfoPanelEnum | null) => void;
}

const useInfoPanelStore = create<InfoPanelState>(set => ({
  isOpen: false,
  activePanel: null,

  openPanel: (panel: InfoPanelEnum) =>
    set({ isOpen: true, activePanel: panel }),

  closePanel: () => set({ isOpen: false, activePanel: null }),

  togglePanel: () => set(state => ({ isOpen: !state.isOpen })),

  setActivePanel: (panel: InfoPanelEnum | null) => set({ activePanel: panel })
}));

export default useInfoPanelStore;
