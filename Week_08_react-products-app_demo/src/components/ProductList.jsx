import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

function ProductList(){
  const [allProducts, setAllProducts] = useState([])
  const [products, setProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  // navigate to product component
  const gotoProduct = (productObj) => {
    navigate('/product', { state: { product: productObj } })
  }

  useEffect(() =>{
    async function getProducts(){
      setLoading(true)
      try{
        let res = await fetch('https://fakestoreapi.com/products')
        if(res.status === 200){
          let productsData = await res.json()
          setAllProducts(productsData)
          setProducts(productsData)
        }
        else{
          throw new Error('Failed to fetch')
        }
      }catch(err){ 
        setError(err)
      }
      finally{
        setLoading(false)
      }
    }
    getProducts()
  }, [])

  if(loading === true){
    return <p className="text-center text-3xl bg-blue-300">Loading...</p>
  }

  if(error != null){
    return <p className="text-center text-3xl bg-red-500">{error.message}</p>
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const q = searchQuery.trim().toLowerCase()
    if(!q){
      setProducts(allProducts)
      return
    }
    const filtered = allProducts.filter(p =>
      (p.title && p.title.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q)) ||
      (p.category && p.category.toLowerCase().includes(q))
    )
    setProducts(filtered)
  }

  const clearSearch = () => {
    setSearchQuery('')
    setProducts(allProducts)
  }

  return (
    <div className='mt-10 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <form className="col-span-full mx-auto flex w-full max-w-3xl flex-col justify-center gap-3 sm:flex-row" onSubmit={handleSearch}>
        <input className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search by title, description or category"/>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700" type="submit">Search</button>
        <button type="button" onClick={clearSearch} className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-700 transition hover:bg-slate-100">Clear</button>
      </form>

      {
        products.length === 0 ? (
          <p className="col-span-full rounded-lg bg-white p-6 text-center text-slate-600 shadow-sm">No products found.</p>
        ) : (
          products.map((productObj) => (
            <div onClick={() => gotoProduct(productObj)} className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"  key={productObj.id}>
              <img src={productObj.image} alt={productObj.title} className="h-44 object-contain block mx-auto mb-10" />
              <p className="line-clamp-2 text-slate-700">{productObj.title}</p>
            </div>
          ))
        )
      }

    </div>
  )
}

export default ProductList