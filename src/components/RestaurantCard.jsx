import { IMG_URL } from '../utils/helper'
const RestaurantCard = (restaurant) => {
    const restro = restaurant?.restaurant?.info;

    console.log(restro);
    return (<>
        <div className='h-72 w-[25%] p-2 my-2' key={restro?.id}>

            <img className='h-48 w-full rounded-xl' src={`${IMG_URL}${restro?.cloudinaryImageId}`} alt="restaurant" />
            <h1 className='line-clamp-1'>{restro?.name} </h1>

            <span className='flex flex-row'>
                <img className='h-6 mx-1' src={require('../assets/green-star.png')} alt="star-icon" />
                {restro?.avgRating}
            </span>

            <p>{restro?.cuisines?.join(" ")}</p>

        </div>
    </>)
}

export default RestaurantCard;