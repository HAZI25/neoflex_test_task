import { IShopItem } from 'src/types/IShopItem';
import ShopItem from '../ShopItem/ShopItem';
import cls from './ShopList.module.scss';
import { useCartStore } from 'src/store/useCartStore';

type ShopListProps = {
	category: string;
	items: IShopItem[];
};

const ShopList = ({ category, items }: ShopListProps) => {
	const addItem = useCartStore((state) => state.addItem);

	return (
		<div>
			<p className={cls.category}>{category}</p>
			<div className={cls.list}>
				{items.map((item) => (
					<ShopItem key={item.id} item={item} onBuy={addItem} />
				))}
			</div>
		</div>
	);
};

export default ShopList;
