// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Notfound from './Components/Notfound/Notfound';


let router = createBrowserRouter([

  {path: "" , element: <Layout/> , children:[

    {index: true , element: <Home/> },
    {path: "about" , element: <About/> },
    {path: "contact" , element: <Contact/> },
    {path: "*" , element: <Notfound/> },

  ]}

])

function App() {
  // const [count, setCount] = useState(0)


  return (
    <>

    <RouterProvider router={router}></RouterProvider>


     
     

    </>
  )
}

export default App
