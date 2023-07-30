import { useEffect, useState } from "react";

const GetRestaurants = ()=>{
    const [restaurants, setRestaurants] = useState(null);

    useEffect(()=>{
        fetchRestaurants()
    },[]);

    async function fetchRestaurants(){
       try{
        const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

        const response = await fetch (url);
        if(!response.ok){
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setRestaurants(data);

       }
       catch(error){
        console.log("Error: ", error);
       }

       return restaurants;
    }

}
export default GetRestaurants;