import React from 'react'

// Card component
export default function Card() {
  return (
    // Main container with border, rounded corners, and shadow
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      
      {/* Product image */}
      <a href="/">
        <img 
          className="p-8 rounded-t-lg" 
          src="https://images.pexels.com/photos/14675876/pexels-photo-14675876.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="product_image1" 
        />
      </a>

      {/* Product info section */}
      <div className="px-5 pb-5">
        
        {/* Product title */}
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>

        {/* Rating section (stars and rating number) */}
        <div className="flex items-center mt-2.5 mb-5">
          {/* 4 yellow stars */}
          <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="..." />
          </svg>
          <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="..." />
          </svg>
          <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="..." />
          </svg>
          <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="..." />
          </svg>

          {/* 1 gray (empty) star */}
          <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="..." />
          </svg>

          {/* Rating text badge */}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            4.0
          </span>
        </div>

        {/* Price and Add to Cart button */}
        <div className="flex items-center justify-between">
          {/* Price */}
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>

          {/* Add to Cart Button */}
          <a 
            href="/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>

      </div>
    </div>
  );
}
