import CartList from 'src/components/CartList/CartList';
import { classNames } from 'src/utils/classNames';
import cls from './Cart.module.scss';
import CartTotal from 'src/components/CartTotal/CartTotal';
import { usePayModalStore } from 'src/store/usePayModalStore';
import PayModal from 'src/components/PayModal/PayModal';

const Cart = () => {
	const isPayModalOpen = usePayModalStore((state) => state.isOpen);

	return (
		<div className={classNames('container', cls.root)}>
			<p className={cls.title}>Корзина</p>
			<div className={cls.info}>
				<CartList />
				<CartTotal />
			</div>
			{isPayModalOpen && <PayModal />}
		</div>
	);
};

export default Cart;
