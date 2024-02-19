import { create } from 'zustand';

interface IReferenceState {
  showSidebar: boolean;
  handleSidebar: (value: boolean) => void;
}

export const referenceStore = create<IReferenceState>((set) => ({
  showSidebar: false,
  handleSidebar: (value) => {
    set(() => ({ showSidebar: value }));
  },
}));
