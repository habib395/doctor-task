import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Help from './components/Help'
import Review from './components/Review'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-white text-black'>
      <Navbar></Navbar>
      <Home></Home>
      <Help></Help>
      <Review></Review>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
