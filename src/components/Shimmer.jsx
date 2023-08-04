const Shimmer = ()=>{
    return(
        <>
        <div className="flex flex-wrap justify-start px-[10%]">

            {
              Array(10).fill("").map((a, index)=>{
                return (<div className="h-56 w-[23%] m-2 bg-gray-300" key={index}>

                </div>)
               })
                
            }

            </div>
        </>
    )
}
export default Shimmer;