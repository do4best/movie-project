
import {Link,NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import {MdDarkMode} from "react-icons/md";
import React from 'react'
import {LuSunDim} from "react-icons/lu";
import {useNavigate} from "react-router-dom";

export function Header() {
    const[darkMode,setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode'))||true)

    const [hidden,setHidden] = useState(true)
const navigator = useNavigate()


    useEffect(() => {
        localStorage.setItem('darkMode',JSON.stringify(darkMode))
        if(darkMode){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
    }}, [darkMode]);
const handelSubmit=(event)=>{
    event.preventDefault()
    const querySlector = event.target.search.value;
    event.target.reset();
    return navigator(`/search?q=${querySlector}`)

}
    const chance="block py-2 px-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-red"
    const notachance = "  block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    return (
        <header className="">


            <nav className=" border-gray-200 px-2 sm:px-4  border-b-2 dark:bg-gray-900  ">
                <div
                    className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 dark:bg-gray-900 ">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ravi Movies</span>
                    </Link>
                    <div id={"mobile-nav"} className="flex md:order-2 dark:bg-black dark:text-white">

                        <button onClick={() => setDarkMode(!darkMode)}
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">{darkMode ?
                            <MdDarkMode/> : <LuSunDim/>}</button>
                        <button onClick={() => setHidden(!hidden)} type="button" data-collapse-toggle="navbar-search"
                                aria-controls="navbar-search" aria-expanded="false"
                                className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="false"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <form onSubmit={handelSubmit}>
                                <input type="text" id="search-navbar" name={"search"}
                                       className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Search..."/>
                            </form>
                        </div>
                        <button data-collapse-toggle="navbar-search" type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-search" aria-expanded="false"
                                onClick={() => setHidden(!hidden)}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`{${hidden ? " hidden " : ""} items-center justify-between   w-full md:flex md:w-auto md:order-1" id="nav-links"`}>
                        <div className="relative mt-3 md:hidden">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <form onSubmit={handelSubmit}>
                                <input type="text" id="search-navbar"
                                       className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Search..."/>
                            </form>
                        </div>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to="/"
                                         className={({isActive}) => isActive ? chance : notachance} end>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/movies/popular"
                                         className={({isActive}) => isActive ? chance : notachance}>Popular</NavLink>
                            </li>
                            <li>
                                <NavLink to="/movies/top"
                                         className={({isActive}) => isActive ? chance : notachance}>Top</NavLink>
                            </li>
                            <li>
                                <NavLink to="/movies/upcoming"
                                         className={({isActive}) => isActive ? chance : notachance}>Upcoming</NavLink>
                            </li>


                        </ul>
                        <button onClick={() => setDarkMode(!darkMode)}
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg ">{darkMode ?
                            <MdDarkMode/> : <LuSunDim/>}</button>
                    </div>

                </div>

            </nav>

        </header>
    );
}

