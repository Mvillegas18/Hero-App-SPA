import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import { LoginPage } from '../auth';
import { MarvelPage, DcPage, HeroPage, SearchPage } from '../heroes';
import HeroesApp from '../HeroesApp';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HeroesApp />,
		children: [
			{
				path: 'marvel',
				element: <MarvelPage />,
			},
			{
				path: 'dc',
				element: <DcPage />,
			},
			{
				path: 'search',
				element: <SearchPage />,
			},
			{
				path: 'hero/:id',
				element: <HeroPage />,
			},
			{
				path: '/',
				element: <Navigate to={'/marvel'} />,
			},
		],
	},
	{
		path: 'login',
		element: <LoginPage />,
	},
	{
		path: '*',
		element: <Navigate to={'login'} />,
	},
]);

export const AppRouter = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};
