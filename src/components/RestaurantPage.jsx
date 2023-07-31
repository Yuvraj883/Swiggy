import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';

const RestaurantPage = ()=>{
    const [restrauntDetails, setRestaurantDetails] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        getResaurantDetails();
    }, []);

    const getResaurantDetails = async()=>{
        const url = `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=${id}`
        const response = await fetch(url); 
        const data = await response.json(); 
        setRestaurantDetails(data?.data?.cards);

    }
    useEffect(()=>{
        console.log(restrauntDetails);

    },[restrauntDetails]);

    return(
        <>
        <h1>{id}</h1>
        </>
    )
}
export default RestaurantPage;