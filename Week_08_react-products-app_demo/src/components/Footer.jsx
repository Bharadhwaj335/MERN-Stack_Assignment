import React from 'react'

function Footer() {
  return (
    <footer className='mt-16 border-t border-slate-200 bg-white/80 backdrop-blur'>
      <div className='mx-auto max-w-6xl px-6 py-8 md:flex md:items-center md:justify-between'>
        <div>
          <h3 className='text-lg font-semibold text-slate-800'>ShopSphere</h3>
          <p className='mt-1 text-sm text-slate-600'>
            Simple shopping experience with quality products and quick delivery.
          </p>
        </div>

        <div className='mt-5 flex gap-6 text-sm text-slate-600 md:mt-0'>
          <a href='/' className='hover:text-blue-600'>Home</a>
          <a href='/productList' className='hover:text-blue-600'>Products</a>
          <a href='/contact' className='hover:text-blue-600'>Contact</a>
        </div>
      </div>

      <p className='border-t border-slate-200 px-6 py-3 text-center text-xs text-slate-500'>
        © {new Date().getFullYear()} ShopSphere. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer