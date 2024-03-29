import { ReactNode } from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
	children: ReactNode;
	closeModal: () => void;
}

const Modal = ({ children, closeModal }: ModalProps) => {
	return (
		<div className={cls.root} onClick={() => closeModal()}>
			<div className={cls.inner} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Modal;
