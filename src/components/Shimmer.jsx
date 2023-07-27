const Shimmer = ()=>{

    return(
        <>
        <div className="px-[10%] m-4 flex flex-row flex-wrap justify-start">

        {
            Array(10).fill(" ").map((e)=>(
            <div className="bg-gray-200 p-4 m-2 h-64 w-64">
        </div>

            
            ))
        }
          </div>   
        </>
    )
}
export default Shimmer;