import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <section className="max-w-md w-full text-white shadow-2xl px-7 py-5 border border-white/5 rounded-xl">
                <div className="flex items-center space-x-2 mb-6">
                    <img 
                        alt="Flowbite logo, blue circular icon with white swirl inside"
                        className=" bg-white rounded-full w-6 h-6"
                        height="24"
                        src="/Logo-HTA.png"
                        width="24"
                    />
                    <span className="font-semibold text-lg select-none">Hatef Tejarat Alborz</span>
                </div>
                <h1 className="text-white text-2xl font-semibold mb-2">Login your Account</h1>
                <Link to='/validations/register' className="my-5 border-none outline-none btn btn-info bg-blue-600 hover:bg-blue-700 text-white px-4 py-1">Register here.</Link>
                    <form className="max-w-sm mx-auto">
                        <div className='mt-5'>
                            <label className="block text-gray-400 text-xs font-semibold mb-1">Your email</label>
                            <input 
                                className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="example@gmail.com"
                                type="email"
                            />
                        </div>
                        <div className='my-5'>
                            <label className="block text-gray-400 text-xs font-semibold mb-1">Your Password</label>
                            <input 
                                className="w-full bg-[#334155] text-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="******"
                                type="password"
                            />
                        </div>
                        <a href="#" className='text-sm text-gray-400 hover:underline transition'>Forget password?</a>
                        <div className="flex items-start my-10">
                            <div className="flex items-center h-5">
                            <input
                                id="remember"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                required
                            />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Remember me
                            </label>
                        </div>
                        <a href='#'
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Submit
                        </a>
                    </form>
            </section>
        </div>
  )
}
