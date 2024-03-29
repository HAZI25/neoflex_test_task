import { IShopItem } from 'src/types/IShopItem';
import cls from './ShopItem.module.scss';
import Button from '../UIKit/Button/Button';

type ShopItemProps = {
	item: IShopItem;
	onBuy: (item: IShopItem) => void;
};

const ShopItem = ({ item, onBuy }: ShopItemProps) => {
	return (
		<div className={cls.root}>
			<img className={cls.image} src={item.img} alt={item.name} />
			<div className={cls.name_price}>
				<p className={cls.name}>{item.name}</p>
				<div>
					<p className={cls.price}>{item.price} ₽</p>
					{item.oldPrice && <p className={cls.price_old}>{item.oldPrice} ₽</p>}
				</div>
			</div>
			<div className={cls.rating_buy}>
				<div className={cls.rating}>
					<p>{item.rating}</p>
				</div>
				<Button onClick={() => onBuy(item)} className={cls.btn}>
					Купить
				</Button>
			</div>
		</div>
	);
};

export default ShopItem;
