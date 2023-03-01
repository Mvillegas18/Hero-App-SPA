import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import { LoginPage } from '../auth';
import { MarvelPage, DcPage } from '../heroes';
import HeroesApp from '../HeroesApp';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HeroesApp />,
		children: [
			{
				path: '/marvel',
				element: <MarvelPage />,
			},
			{
				path: '/dc',
				element: <DcPage />,
			},
			{
				path: '/login',
				element: <LoginPage />,
			},
			{
				path: '/',
				element: <Navigate to={'/marvel'} />,
			},
		],
	},
]);

const AppRouter = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default AppRouter;
