import { useCartStore } from 'src/store/useCartStore';
import CartItem from '../CartItem/CartItem';
import cls from './CartList.module.scss';

const CartList = () => {
	const cartItems = useCartStore((state) => state.items);

	return (
		<div className={cls.root}>
			{cartItems.length != 0 ? (
				cartItems.map((cartItem) => {
					return <CartItem key={cartItem.id} item={cartItem} />;
				})
			) : (
				<p>Ваша корзина пуста...</p>
			)}
		</div>
	);
};

export default CartList;
