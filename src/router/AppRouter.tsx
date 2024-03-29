import { Route, Routes } from 'react-router-dom';
import Cart from 'src/pages/Cart/Cart';
import Products from 'src/pages/Products/Products';
import { Routes as AppRoutes } from './Routes';

const AppRouter = () => {
	return (
		<Routes>
			<Route path={AppRoutes.Home} element={<Products />} />
			<Route path={AppRoutes.Cart} element={<Cart />} />
		</Routes>
	);
};

export default AppRouter;
