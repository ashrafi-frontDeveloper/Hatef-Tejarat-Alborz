import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <section className="max-w-md w-full text-white shadow-2xl px-7 py-5 border border-white/5 rounded-xl">
                <div className="flex items-center space-x-2 mb-6">
                    <img 
                        alt="Flowbite logo, blue circular icon with white swirl inside"
                        className=" bg-white rounded-full w-8 h-8"
                        height="32"
                        src="/Logo-HTA.png"
                        width="32"
                    />
                    <span className="font-semibold text-lg select-none text-neutral">Hatef Tejarat Alborz</span>
                </div>
                <h1 className="text-neutral text-2xl font-semibold mb-2">Login your Account</h1>
                <Link to='/validations/register' className="my-5 btn btn-neutral text-primary px-4 py-1">Register here.</Link>
                    <form className="max-w-sm mx-auto">
                        <div className='mt-5'>
                            <label className="block text-neutral text-xs font-semibold mb-1">Your email</label>
                            <input 
                                className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                placeholder="example@gmail.com"
                                type="email"
                            />
                        </div>
                        <div className='my-5'>
                            <label className="block text-neutral text-xs font-semibold mb-1">Your Password</label>
                            <input 
                                className="w-full input input-neutral text-neutral text-sm rounded-md px-3 py-2 focus:outline-none"
                                placeholder="******"
                                type="password"
                            />
                        </div>
                        <a href="#" className='text-sm text-neutral hover:underline transition'>Forget password?</a>
                        <div className="flex items-start my-5">
                            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
                            <label className="label">
                                <input type="checkbox" defaultChecked className="checkbox" />
                                <span className="text-neutral">Remember me</span>
                            </label>
                            </fieldset>
                        </div>
                        <a href='#'
                            type="submit"
                            className="btn btn-outline w-full inline-flex items-center justify-center hover:bg-neutral text-neutral hover:text-primary font-semibold rounded-md py-2 text-sm transition duration-300"
                        >
                            Submit
                        </a>
                    </form>
            </section>
        </div>
  )
}
