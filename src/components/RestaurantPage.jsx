import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import { IMG_CDN_URL } from "../utils/helper";
import Navbar from "./Navbar";

const RestaurantPage = ()=>{
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        getResaurantDetails();
    }, []);

    const getResaurantDetails = async()=>{
        const url = `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=${id}`
        const response = await fetch(url); 
        const data = await response.json(); 
        setRestaurantDetails(data?.data);

    }
    useEffect(()=>{
        console.log(restaurantDetails);

    },[restaurantDetails]);

    return (!restaurantDetails) ?(<h1>Loading...</h1>): 
    (
        <>
        <Navbar/>
        <img src={`${IMG_CDN_URL}${restaurantDetails?.cards[0]?.card?.card?.info?.cloudinaryImageId}`} alt="restaurant img"/>
        <h1>{restaurantDetails?.cards[0]?.card?.card?.info?.name}</h1>
        </>
    )
}
export default RestaurantPage;