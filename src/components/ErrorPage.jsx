import { Link } from "react-router-dom"

const ErrorPage = ()=>{
    return (
        <>
        <div className="flex flex-col justify-center items-center mt-[20%]">
            <h1 className="text-4xl font-bold ">Error 404, couldn't find the page...</h1>
            <Link className="text-xl underline text-blue-700" to="/">Go back to home page</Link>

        </div>
        
        </>
    )
}
export default ErrorPage;