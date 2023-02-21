import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './Components/HomeComponent/Home'
import { ProductPage } from './Components/ProductComponent/Product'
import { DetalidPage } from './Components/Detalid/Detalid'
import { RootComponent } from './Components/Root/RootComponent'
function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <RootComponent />, children: [

        { path: '/', element: <HomePage /> },
        { path: 'Product', element: <ProductPage /> },
        { path: 'Ditaled/:id', element: <DetalidPage /> }
      ]
    }


  ])

  return <RouterProvider router={router} />
}

export default App
