import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div className='py-10'>
      <section className='rounded-2xl bg-gradient-to-r from-blue-100 via-cyan-100 to-slate-100 p-8 md:p-12'>
        <p className='text-sm font-semibold uppercase tracking-wider text-blue-700'>Welcome to ShopSphere</p>
        <h1 className='mt-2 text-3xl font-bold text-slate-800 md:text-5xl'>
          Everyday essentials, handpicked for you
        </h1>
        <p className='mt-4 max-w-2xl text-slate-600'>
          Discover popular products across fashion, electronics, and home categories.
          Clean interface, fast browsing, and a better shopping flow.
        </p>
        <div className='mt-6'>
          <Link
            to='/productList'
            className='inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700'
          >
            Explore Products
          </Link>
        </div>
      </section>

      <section className='mt-10 grid grid-cols-1 gap-5 md:grid-cols-3'>
        <article className='rounded-xl border border-slate-200 bg-white p-5 shadow-sm'>
          <h3 className='font-semibold text-slate-800'>Trusted Products</h3>
          <p className='mt-2 text-sm text-slate-600'>Quality items from categories customers love most.</p>
        </article>
        <article className='rounded-xl border border-slate-200 bg-white p-5 shadow-sm'>
          <h3 className='font-semibold text-slate-800'>Fast Search</h3>
          <p className='mt-2 text-sm text-slate-600'>Find products quickly by title, description, or category.</p>
        </article>
        <article className='rounded-xl border border-slate-200 bg-white p-5 shadow-sm'>
          <h3 className='font-semibold text-slate-800'>Simple Experience</h3>
          <p className='mt-2 text-sm text-slate-600'>Easy navigation with clean pages and readable product details.</p>
        </article>
      </section>
    </div>
  )
}

export default Home