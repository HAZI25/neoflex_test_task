import { classNames } from 'src/utils/classNames';
import Favourites from 'src/assets/icons/favourites.svg?react';
import Cart from 'src/assets/icons/cart.svg?react';
import cls from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useCartStore } from 'src/store/useCartStore';
import { Routes } from 'src/router/Routes';

const Header = () => {
	const count = useCartStore((state) => state.totalCount);

	return (
		<header className={classNames('container', cls.root)}>
			<Link className="logo" to={Routes.Home}>
				QPICK
			</Link>
			<ul className={cls.actions}>
				<li>
					<Link to="#">
						<Favourites className={cls.action_item} />
					</Link>
				</li>
				<li className={cls.cart}>
					<Link to={Routes.Cart}>
						<Cart className={cls.action_item} />
						<div className={cls.cart_count}>{count}</div>
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
