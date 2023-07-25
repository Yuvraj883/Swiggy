import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Search from "./components/Search";
import { children } from "react";
import RestaurantPage from "./components/RestaurantPage";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element: <Home/>,

            },
            {
                path:"search",
                element: <Search/>
        
            } ,
           
            {
                path:'restaurant-page',
                element:<RestaurantPage/>
            }
        ], 
    },

    // {
    //     path:"/search",
    //     element: <Search/>

    // } ,
   
])
export default router;