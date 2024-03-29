import { usePayModalStore } from 'src/store/usePayModalStore';
import Button, { ButtonVariant } from '../UIKit/Button/Button';
import Modal from '../UIKit/Modal/Modal';
import Input from '../UIKit/Input/Input';
import cls from './PayModal.module.scss';
import { useCartStore } from 'src/store/useCartStore';

const PayModal = () => {
	const closeModal = usePayModalStore((state) => state.closeModal);
	const reset = useCartStore((state) => state.reset);

	const onPayClick = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.preventDefault();
		reset();
		closeModal();
	};

	return (
		<Modal closeModal={closeModal}>
			<p className={cls.title}>Оплата</p>
			<form className={cls.form}>
				<div className={cls.inputs}>
					<Input type="text" label="Имя:" />
					<Input type="text" label="Email:" />
					<Input type="text" label="Адрес доставки:" />
				</div>
				<Button
					className={cls.btn}
					variant={ButtonVariant.ROUNDED}
					onClick={onPayClick}
				>
					Оплатить
				</Button>
			</form>
		</Modal>
	);
};

export default PayModal;
