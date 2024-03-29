import { classNames } from 'src/utils/classNames';
import cls from './Footer.module.scss';
import Vk from 'src/assets/icons/vk.svg?react';
import Telegram from 'src/assets/icons/telegram.svg?react';
import Whatsapp from 'src/assets/icons/whatsapp.svg?react';
import { Link } from 'react-router-dom';
import { Routes } from 'src/router/Routes';

const Footer = () => {
	return (
		<footer className={classNames('container', cls.root)}>
			<Link to={Routes.Home} className={classNames('logo', cls.logo)}>
				QPICK
			</Link>
			<nav>
				<ul className={cls.nav_list}>
					<li>Избранное</li>
					<li>Корзина</li>
					<li>Контакты</li>
				</ul>
			</nav>
			<div className={cls.additional}>
				<ul className={cls.nav_list}>
					<li>Условия сервиса</li>
				</ul>
				<ul className={cls.languages}>
					<li className={cls.active}>Рус</li>
					<li>Eng</li>
				</ul>
			</div>
			<div className={cls.socials}>
				<Vk />
				<Telegram />
				<Whatsapp />
			</div>
		</footer>
	);
};

export default Footer;
