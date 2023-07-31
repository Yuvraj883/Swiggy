import { useEffect, useState } from "react";

const useGetRestaurants = ()=>{
    const [restaurants, setRestaurants] = useState(null);
  
  useEffect(()=>{
    const res = fetchRestaurants();
   setRestaurants(res);
//    console.log(restaurants);
        
    },[]);
  
     const fetchRestaurants = async ()=>{
        const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        const response = await fetch(url);
        const data = await response.json();
        return data;
       
      
    }

    return restaurants;

}
export default useGetRestaurants;