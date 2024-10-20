import { create } from 'zustand';

interface MarkerStore {
  showMarkers: boolean;
  hideMarkers: () => void;
  toggleMarkers: () => void;
}

const useHazardMarkerStore = create<MarkerStore>(set => ({
  showMarkers: true,
  hideMarkers: () => set({ showMarkers: false }),
  toggleMarkers: () => set(state => ({ showMarkers: !state.showMarkers }))
}));

export default useHazardMarkerStore;
