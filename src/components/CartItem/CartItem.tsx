import cls from './CartItem.module.scss';
import Delete from 'src/assets/icons/delete.svg?react';
import { useCartStore } from 'src/store/useCartStore';
import { ICartItem } from 'src/types/ICartItem';
import Button from '../UIKit/Button/Button';

type CartItemProps = {
	item: ICartItem;
};

const CartItem = ({ item }: CartItemProps) => {
	const deleteItem = useCartStore((state) => state.deleteItem);
	const decrementCount = useCartStore((state) => state.decrementCount);
	const addItem = useCartStore((state) => state.addItem);

	return (
		<div className={cls.root}>
			<div className={cls.content}>
				<div className={cls.info}>
					<img className={cls.img} src={item.img} alt={item.name} />
					<div className={cls.count}>
						<div
							className={cls.decrement}
							onClick={() => decrementCount(item.id)}
						>
							-
						</div>
						<p>{item.count}</p>
						<div
							className={cls.increment}
							onClick={() => {
								addItem(item);
							}}
						>
							+
						</div>
					</div>
				</div>
				<div>
					<p className={cls.name}>{item.name}</p>
					<p className={cls.price}>{item.price} ₽</p>
				</div>
			</div>
			<Button className={cls.delete} onClick={() => deleteItem(item.id)}>
				<Delete />
			</Button>
			<div className={cls.count_price}>
				<p className={cls.total_price}>{item.price * item.count} ₽</p>
			</div>
		</div>
	);
};

export default CartItem;
