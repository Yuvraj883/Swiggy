import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import RestaurantContext from './context/restaurantContext';
import useGetRestaurants from './utils/useGetRestaurants';
import { Outlet } from 'react-router-dom';
import Shimmer from './components/Shimmer';

function App() {
  const { fetchRestaurants } = useGetRestaurants();
  const [restaurants, setRestaurants] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const restaurantsData = await fetchRestaurants();
        setRestaurants(restaurantsData);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      } finally {
        setIsLoading(false); // Set loading state to false regardless of success or error
      }
    };

    fetchData();
  }, []);

  // Handle loading state
  if (isLoading) {
    return <Shimmer />;
  }

  return (
    <>
      <Navbar />
      {restaurants && (
        <RestaurantContext.Provider value={restaurants}>
          <div className="px-[10%]">
            <Outlet />
          </div>
        </RestaurantContext.Provider>
      )}
    </>
  );
}

export default App;
