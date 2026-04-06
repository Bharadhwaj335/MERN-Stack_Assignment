import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'
function RootLayout() {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Header />
      {/* component placeholder */}
      <main className='mx-auto w-full max-w-6xl px-4 md:px-8'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout