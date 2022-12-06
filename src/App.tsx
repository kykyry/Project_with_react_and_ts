import { Route, Routes } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { ProductPage } from './pages/ProductsPage'
import { Navigation } from './components/Navigation'
import { ProductDetailsPage } from './pages/ProductDetailsPage'
// import { useProduct } from "./hooks/products";
import { PathGenerate } from "./components/Product"
import { Component } from 'react'


function App() {
  // const { products } = useProduct()

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/about' element={<AboutPage />} />
        {/* <Route path={PathGenerate(products[0].id)} element={<ProductDetailsPage product={products[0]} key={products[0].id} />} />
      <Route path={PathGenerate(products[1].id)} element={<ProductDetailsPage product={products[1]} key={products[1].id} />} /> */}

        {/* {products.map(prod =>
          <Route path={PathGenerate(prod.id)} element={<ProductDetailsPage product={prod} />} />
        )} */}

        {/* {products.map(prod =>
          <Route path={'/productDetails:id'} element={<ProductDetailsPage/>} />
        )} */}

        <Route path={'/productDetails:id'} element={<ProductDetailsPage />} />
      </Routes></>
  )
}

export default App
