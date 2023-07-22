const RestaurantCard = (restaurant) => {
    const IMG_URL = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';
    console.log(restaurant.restaurant);
    return (
        <>
            <div className="flex-col h-80 w-[23%] mx-2 my-5">
                <img className="h-48 w-[99%] rounded-xl" src={IMG_URL + restaurant?.restaurant?.cloudinaryImageId} alt="restro-img" />
                <div>   <h1 className="font-bold text-xl line-clamp-1">{restaurant?.restaurant.name}</h1>
                    <p className='flex flex-row'>
                        <img className='h-6 p-1' src={require('./assets/star.png')} alt="star" />
                        <h2 className="text-lg">{restaurant?.restaurant?.avgRating}</h2>
                    </p>

                    <p className="line-clamp-1 ">{restaurant?.restaurant?.cuisines.join(" ")}</p>
                    <p className="line-clamp-1 "> {restaurant?.restaurant?.areaName}</p>
                </div>
            </div>
        </>
    )
}

export default RestaurantCard;