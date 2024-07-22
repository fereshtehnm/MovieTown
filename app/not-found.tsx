import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="not-found-container">
        <h1 className="not-found-h">404</h1>
        <div className="not-found">
            Page Not Found
        </div>
        {/* <button className="mt-5">
          <a
            className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
          >
            <span
              className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
            ></span>
    
            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              <Link href='/'>kihdgiher</Link>
            </span>
          </a>
        </button> */}
    </div>
  )
}

export default NotFound