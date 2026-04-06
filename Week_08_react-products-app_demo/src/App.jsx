import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import ProductList from "./components/ProductList"
import Product from "./components/Product"
import ContactUs from "./components/ContactUs"


function App() {
  //routing configuration
  const routingObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/productList",
          element: <ProductList />
        },
        {
          path: "/product",
          element: <Product />
        },
        {
          path: "/contact",
          element: <ContactUs />
        },
      ],
    },
  ])

  return <RouterProvider router={routingObj} />;
}

export default App
