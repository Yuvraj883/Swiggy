import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Search from './components/Search';
import RestaurantPage from './components/RestaurantPage';

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                path:'/',
                element:<Home/>

            },
            {
                path:'search',
                element:<Search/>,
            }
        ]

    },
    {
        path:'restaurant/:id',
        element:<RestaurantPage/>
    }
]);
export default router;