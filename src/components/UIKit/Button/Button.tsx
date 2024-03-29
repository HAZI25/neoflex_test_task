import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';
import { classNames } from 'src/utils/classNames';

export enum ButtonVariant {
	TRANSPARENT = 'transparent',
	ROUNDED = 'rounded'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
}

const Button = (props: ButtonProps) => {
	const {
		className,
		children,
		variant = ButtonVariant.TRANSPARENT,
		...rest
	} = props;
	return (
		<button className={classNames(cls.root, cls[variant], className)} {...rest}>
			{children}
		</button>
	);
};

export default Button;
