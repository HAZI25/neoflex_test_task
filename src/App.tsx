import './styles/index.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppRouter from './router/AppRouter';

const App = () => {
	return (
		<div className="app">
			<Header />
			<main>
				<AppRouter />
			</main>
			<Footer />
		</div>
	);
};

export default App;
