import { Outlet } from 'react-router-dom';
import { AuthProvider } from './auth';
import Navbar from './ui/components/Navbar';

const HeroesApp = () => {
	return (
		<AuthProvider>
			<Navbar />
			<Outlet />
		</AuthProvider>
	);
};

export default HeroesApp;
