

const useGetRestaurants = ()=>{
  
     const fetchRestaurants = async ()=>{
        const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        const response = await fetch(url);
        const data = await response.json();
        return data;
       
      
    }

    return {fetchRestaurants};

}
export default useGetRestaurants;