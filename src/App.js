import React from "react";
import Navbar from "./components/Navbar";
import Restaurants from "./components/Restaurants";
// import useGetRestaurants from "./utils/useGetRestaurants";
import Search from "./components/Search"


const App = () => {

    const [searchText, setSearchText] = React.useState('');
  const [restaurants, setRestaurants] = React.useState(null);
    const [result, setResult] = React.useState(null);

 const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data?.json();
    const responseData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(JSON.stringify(responseData));
    // console.log(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[6]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[7]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[8]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[9]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[10]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[11]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[12]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setRestaurants(responseData);
  };

  React.useEffect(() => {
    getRestaurants();
  }, []);

  React.useEffect(() => {
    filterSearchResult();
  }, [searchText]);

  const filterSearchResult = () => {
    console.log("filter", searchText, restaurants?.length)
    if(!restaurants){
        getRestaurants();
    }
    const temp = restaurants?.filter((restaurant) => {
        return true;
        console.log("restaurant?.info?.name?.toLowerCase()", restaurant?.info?.name?.toLowerCase())
        restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase());
        console.log(searchText);

    });
    console.log("temp", temp, temp?.length)
    setResult(temp?.slice(0,5));

}
  
  return (
    <>
      <Navbar />
<Search searchText={searchText} setSearchText={setSearchText}/>

      <Restaurants data={result ? result : restaurants}/>
    </>
  );
};
export default App;
