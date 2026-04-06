import { useLocation } from 'react-router'

function Product() {
  const {state}=useLocation()
  
  return (
    <div>
      <div className='flex flex-col items-center gap-10 p-10'>
        <div className='w-2/5'>
        <img src={state?.product?.image}  className='h-44 object-contain block mx-auto mb-10' />
        </div>
        <div className='w-3/5  p-2 sm:p-10 '>
        <p className='text-2xl font-bold'>{state?.product?.title}</p>
        <p className='text-xl text-gray-500'>{state?.product?.description}</p>
        <p className='text-2xl text-blue-500'>${state?.product?.price}</p>
        <p className='text-sm text-gray-400'>Category: {state?.product?.category}</p>
        </div>
      </div>
    </div>
  )
}

export default Product