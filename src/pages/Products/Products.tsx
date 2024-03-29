import ShopList from 'src/components/ShopList/ShopList';
import products from 'src/data/products.json';
import { classNames } from 'src/utils/classNames';
import cls from './Products.module.scss';

const Products = () => {
	return (
		<section className={classNames('container', cls.root)}>
			{products.map(
				(product) =>
					product.items.length !== 0 && (
						<ShopList
							key={product.category}
							category={product.category}
							items={product.items}
						/>
					)
			)}
		</section>
	);
};

export default Products;
