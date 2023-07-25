import { useEffect, useState } from "react";

const useGetRestaurants = ()=>{
const [restaurants, setRestaurants] = useState(null);
    
    console.log("Hook called");
    useEffect(()=>{
        console.log("Use effect called");
        getRestaurants(); 
    },[]);
    
  
   
    const getRestaurants = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
        const json =  await data?.json();
        setRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        // handleSetRestaurant(json);
        console.log(restaurants);
        
    }

    // function handleSetRestaurant (json){
    //     setRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // }
    return restaurants;
}


export default useGetRestaurants;
