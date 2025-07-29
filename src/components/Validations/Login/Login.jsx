import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 p-6">
      <section className="w-full max-w-md bg-white shadow-xl px-7 py-8 rounded-xl border border-base-300">
        {/* Logo + Title */}
        <div className="flex items-center gap-3 mb-6">
          <img 
            alt="HTA Logo"
      src={`${import.meta.env.BASE_URL}Logo-HTA.png`}
            className="w-9 h-9 rounded-full"
          />
          <h2 className="text-xl font-semibold text-neutral">
            Hatef Tejarat Alborz
          </h2>
        </div>

        {/* Headline */}
        <h1 className="text-2xl font-bold text-neutral mb-2">
          Login to your Account
        </h1>

        {/* Register Link */}
        <p className="text-sm text-gray-500 mb-6">
          Don’t have an account?{" "}
          <Link to="/validations/register" className="text-primary hover:underline font-medium">
            Register here
          </Link>
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-neutral mb-1">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="input input-bordered w-full text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-neutral mb-1">Password</label>
            <input
              type="password"
              placeholder="******"
              className="input input-bordered w-full text-sm"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-sm text-gray-500 hover:underline">Forgot password?</a>
          </div>

          {/* Remember Me */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="checkbox checkbox-primary" defaultChecked />
            <label className="text-sm text-neutral">Remember me</label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-neutral w-full text-base font-semibold hover:bg-neutral-focus hover:text-primary transition"
          >
            Login
          </button>
        </form>
      </section>
    </div>
  )
}
