import { useState, useEffect } from "react"

const Restaurants= ()=>{
    const [restraunts, setRestraunts] = useState(null);

    useEffect(()=>{
        getRestraunts(); 
    },[])

    async function getRestraunts(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
        const json =  await data?.json();
        console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    return(
        <>
        <h2>Restraunts</h2>
        </>
    )
}
export default Restaurants ;
