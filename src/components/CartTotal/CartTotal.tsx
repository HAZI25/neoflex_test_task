import { useCartStore } from 'src/store/useCartStore';
import cls from './CartTotal.module.scss';
import Button, { ButtonVariant } from '../UIKit/Button/Button';
import { usePayModalStore } from 'src/store/usePayModalStore';

const CartTotal = () => {
	const openPayModal = usePayModalStore((state) => state.openModal);

	const total = useCartStore((state) => state.totalPrice);

	return (
		<div className={cls.root}>
			<div className={cls.total}>
				<p>Итого</p>
				<p>₽ {total}</p>
			</div>
			{!!total && (
				<Button
					variant={ButtonVariant.ROUNDED}
					className={cls.btn}
					onClick={openPayModal}
				>
					Перейти к оформлению
				</Button>
			)}
		</div>
	);
};

export default CartTotal;
