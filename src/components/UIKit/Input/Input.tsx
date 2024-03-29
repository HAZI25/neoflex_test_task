import { InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

const Input = ({ label, ...rest }: InputProps) => {
	return (
		<>
			{label ? (
				<label className={cls.root}>
					{label}
					<input className={cls.input} {...rest} />
				</label>
			) : (
				<input className={cls.input} {...rest} />
			)}
		</>
	);
};

export default Input;
