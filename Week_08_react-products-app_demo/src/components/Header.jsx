import React from 'react'
import { NavLink } from 'react-router'
function Header() {
  return (
        <header className='sticky top-0 z-20 border-b border-slate-200 bg-white/90 px-6 py-3 text-slate-800 backdrop-blur md:px-10'>
            <div className='mx-auto flex max-w-6xl items-center justify-between'>
        {/*Logo Image */}
        <img width="80px"
                className='rounded-full border border-slate-200 bg-white p-2'
        alt='logo'
        src='https://www.bing.com/th/id/OIP.uPgEWI1CRGnGkWFVNb185QHaHa?w=167&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
        />
        {/* ul of links */}
                <nav className='flex gap-2 md:gap-4'>
            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? "rounded-lg bg-blue-600 px-4 py-2 text-white" : "rounded-lg px-4 py-2 text-slate-700 hover:bg-slate-100"}>Home</NavLink>
            </li>
            <li>
                                <NavLink to="/productList" className={({ isActive }) => isActive ? "rounded-lg bg-blue-600 px-4 py-2 text-white" : "rounded-lg px-4 py-2 text-slate-700 hover:bg-slate-100"}>Products</NavLink>
            </li>
            <li>
                                <NavLink to="/contact" className={({ isActive }) => isActive ? "rounded-lg bg-blue-600 px-4 py-2 text-white" : "rounded-lg px-4 py-2 text-slate-700 hover:bg-slate-100"}>Contact</NavLink>
            </li>
        </nav>
            </div>
        </header>
  )
}

export default Header