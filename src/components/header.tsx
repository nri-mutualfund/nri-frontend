import React from 'react'

const Header = () => {
  return (
    <header className="w-full  text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
    <div className="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row">
        <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            Logo
        </a>
        <nav className="flex flex-wrap items-center justify-center pl-24 text-base md:ml-auto md:mr-auto">
            <a href="#_" className="mr-5 font-lato hover:text-gray-900">Home</a>
            <a href="#_" className="mr-5 font-lato hover:text-gray-900">Join the Community</a>
            <a href="#_" className="mr-5 font-lato hover:text-gray-900">FAQ</a>
            <a href="#_" className="mr-5 font-lato hover:text-gray-900">Blog</a>
        </nav>
        <div className="items-center h-full">
            <button                 className="px-4 py-2 text-sm font-bold text-white  transition-all duration-150 bg-primary rounded-md shadow active:bg-primary hover:shadow-md focus:outline-none ease">
                Sign Up For Free
            </button>
        </div>
    </div>
</header>
  )
}

export default Header