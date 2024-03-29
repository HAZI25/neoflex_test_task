import { ICartItem } from 'src/types/ICartItem';
import { IShopItem } from 'src/types/IShopItem';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type CartState = {
	items: ICartItem[];
	totalCount: number;
	totalPrice: number;
	addItem: (item: IShopItem | ICartItem) => void;
	decrementCount: (id: number) => void;
	deleteItem: (id: number) => void;
	reset: () => void;
};

export const useCartStore = create<CartState>()(
	devtools(
		immer((set) => ({
			items: [],
			totalCount: 0,
			totalPrice: 0,
			addItem: (item) =>
				set((state) => {
					const dupl = state.items.find((cartItem) => cartItem.id === item.id);
					if (dupl) {
						dupl.count++;
					} else {
						state.items.push({ ...item, count: 1 });
					}
					state.totalCount += 1;
					state.totalPrice += item.price;
				}),
			deleteItem: (id) =>
				set((state) => {
					state.items = state.items.filter((item) => item.id !== id);
					state.totalCount = getTotalCount(state.items);
					state.totalPrice = getTotalPrice(state.items);
				}),
			decrementCount: (id) =>
				set((state) => {
					const item = state.items.find((item) => item.id === id);
					if (item && item.count > 1) {
						item.count -= 1;
						state.totalCount -= 1;
						state.totalPrice -= item.price;
					}
				}),
			reset: () =>
				set((state) => {
					(state.items = []), (state.totalCount = 0), (state.totalPrice = 0);
				}),
		}))
	)
);

const getTotalPrice = (items: ICartItem[]) => {
	return items.reduce(
		(prev, current) => (prev += current.price * current.count),
		0
	);
};

const getTotalCount = (items: ICartItem[]) => {
	return items.reduce((prev, current) => (prev += current.count), 0);
};
