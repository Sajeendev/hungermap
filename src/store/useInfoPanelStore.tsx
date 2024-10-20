import { create } from 'zustand';

interface InfoPanelState {
  isOpen: boolean;
  closePanel: () => void;
  togglePanel: () => void;
}

const useInfoPanelStore = create<InfoPanelState>(set => ({
  isOpen: false,

  closePanel: () => set({ isOpen: false }),

  togglePanel: () => set(state => ({ isOpen: !state.isOpen }))
}));

export default useInfoPanelStore;
