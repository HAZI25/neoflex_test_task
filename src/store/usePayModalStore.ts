import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type ModalState = {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
};

export const usePayModalStore = create<ModalState>()(
	devtools(
		immer((set) => ({
			isOpen: false,
			openModal: () =>
				set((state) => {
					state.isOpen = true;
				}),
			closeModal: () =>
				set((state) => {
					state.isOpen = false;
				}),
		}))
	)
);
