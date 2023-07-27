import { useState } from "react";

const useGetRestaurants = () => {
  const [result, setResult] = useState(null);


 

  const filterSearchResult = (searchText) => {
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
    setResult(temp);

}

  return {
    filterSearchResult
  };
};

export default useGetRestaurants;
