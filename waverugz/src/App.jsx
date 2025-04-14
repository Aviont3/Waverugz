import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wavehead from './components/wave'
import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from './components/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <Wavehead/>
        <Gallery/>
        <Footer/>

       
      </div>
      
    </>
  )
}

export default App
