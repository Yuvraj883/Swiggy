import { useEffect, useState } from "react";

const useGetRestaurants = ()=>{
  
     
    const getRestaurants = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
        const json =  await data?.json();
        const restaurants= (json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        
        console.log(restaurants);
        
        return restaurants;
    }

   
    return {
        getRestaurants
    }
}


export default useGetRestaurants;
