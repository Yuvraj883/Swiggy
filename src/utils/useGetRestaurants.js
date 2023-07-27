import { useState } from "react";

const useGetRestaurants = ()=>{
    const [restaurants, setRestaurants] = useState(null);
     
    const getRestaurants = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
        const json =  await data?.json();
        const responseData= (json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(JSON.stringify(json));
        console.log(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[6]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[7]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[8]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[9]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[10]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[11]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[12]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        
       setRestaurants(responseData);
    }

   
    return {
        restaurants,
        getRestaurants
    }
}


export default useGetRestaurants;
