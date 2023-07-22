import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard";

const Restaurants= ()=>{
    const [restaurants, setRestaurants] = useState(null);

    useEffect(()=>{
        getRestaurants(); 
    },[])

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
        const json =  await data?.json();
        setRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(restaurants);
        
    }
    if(restaurants === null){
        return <div>Loading...</div>
    }

    return (
        <>
        <h1 className="text-2xl font-extrabold  px-[10%] m-2">Restaurants with online food delivery in Delhi</h1>
        <div className="flex flex-row flex-wrap  px-[10%] m-0">
        {
            restaurants?.map((restaurant)=>(
                <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant?.info}/>
                 
            )
            
            )

        }
        </div>
        </>
    )
}
export default Restaurants ;
