import { create } from 'zustand';

interface IModal {
  show: boolean;
  content: React.ReactNode | null;
}

interface IReferenceState {
  showSidebar: boolean;
  modal: IModal;
  handleSidebar: (value: boolean) => void;
  handleModal: ({ show, content }: IModal) => void;
}

export const referenceStore = create<IReferenceState>((set) => ({
  showSidebar: false,
  handleSidebar: (value) => {
    set(() => ({ showSidebar: value }));
  },
  handleModal: ({ show, content }) => {
    set(() => ({ modal: { show, content } }));
  },
  modal: {
    show: false,
    content: null,
  },
}));
