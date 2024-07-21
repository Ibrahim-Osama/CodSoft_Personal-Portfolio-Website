import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import About from './components/AboutUS/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Layout from './components/Layout/Layout'

import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)
  return<>
    <BrowserRouter>
        <Header/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </BrowserRouter>
      
    </>
  

  
  // let routes = createBrowserRouter([
  //   {path:'', element: <Layout/> ,errorElement:<h1 className="text-center my-5"> Not Found</h1>, children:[
  //   {path:'Home', element: <Home/> },
  //   {path:'About_ME', element: <About/> },
  //   {path:'Projects', element: <Projects/> },
  //   {path:'Contact', element: <Contact/> },
  //   ]},
   
  // ])
  // return <RouterProvider router={routes}></RouterProvider>

}

export default App
