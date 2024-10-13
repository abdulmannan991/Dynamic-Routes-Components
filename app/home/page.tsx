import Link from "next/link"

function HomePage(){

    return(
        <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
            <h1 className="text-center ">Welcome to Home Page</h1>
        <ul className="flex justify-end space-x-8 p-4">
            <li className="text-gray-500">
            <Link href="/home ">NavBar home</Link>
            </li>
            <li className="text-gray-500">
            <Link href="/about">Navbar about</Link>
            </li>
          
        </ul>
        </div>
    )
}

export default HomePage;