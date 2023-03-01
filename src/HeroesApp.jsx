import { Outlet } from 'react-router-dom';
import Navbar from './ui/components/Navbar';

const HeroesApp = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default HeroesApp;
