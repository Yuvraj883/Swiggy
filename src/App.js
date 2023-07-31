import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import RestaurantContext from './context/restaurantContext';
// import useGetRestaurants from './utils/useGetRestaurants';
import OnlineRestaurants from './components/OnlineRestaurants';

function App() {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {

    fetchRestaurants();

  }, []);

  useEffect(()=>{
    console.log(restaurants);

  },[restaurants]);


  const fetchRestaurants = async () => {
    const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const response = await fetch(url);
    response.json().then((data) => {
      console.log(data);
      setRestaurants(data);
    })

  }

  // if(!restaurants){
  //  return <div>...Loading</div>
  // }


  return (
    <>
   <Navbar />

{
  restaurants &&
  <RestaurantContext.Provider value={restaurants}>

        <div className="px-[10%]">
          <OnlineRestaurants />
        </div>
      </RestaurantContext.Provider>
}
      

    </>
  );
}

export default App;
