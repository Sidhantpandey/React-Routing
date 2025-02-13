import React from 'react'
import { Link, NavLink } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-blue-800-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fillRule="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                        </Link>
                        <button
                              type="submit"
                              className="md:w-38 bg-blue-950 hover:bg-blue-dark text-white font-bold py-3 px-7 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                          >
                              Download Now
                          </button>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://imgs.search.brave.com/Uu9T4e7w0CWi2DCgnlZ3HHKqfDQHHm4Zp6c32hRgJ8M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC15b3Vu/Zy1zdHVkZW50LXdp/dGgtYm9vay1lZHVj/YXRpb24tZGF5XzIz/LTIxNTA5ODAwOTgu/anBnP3NlbXQ9YWlz/X2h5YnJpZA" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://imgs.search.brave.com/CKAunKDH1SM4jZp0CkhhHzWOB2ktbVHzE-XtPzLZqTw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzMxLzYz/LzRiLzMxNjM0Yjkw/Yzc4YTZjZTY0MTE4/YzdhZTkwNDAxOWI1/LmpwZw" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, ullam?   </h1>
        </div>
    );
}
