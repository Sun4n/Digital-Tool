
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Component/Banner/Banner'
import NavBar from './Component/NavBar/NavBar'
import Premium from './Component/Premium/Premium'
import Rating from './Component/Rating/Rating'
import Step from './Component/Steps/Step'
import Pricing from './Component/Pricing/Pricing'
import Footer from './Component/Footer/Footer'
import { ToastContainer } from 'react-toastify'

function App() {
  const product = async () => {
    const res = await fetch("/data.json")
    return res.json()
  }

  const [selectedItem, setSelectedItem] = useState([])
  const [total, setTotal] = useState(0)
  const [count,setCount]=useState(0)

  const productPromise = product()
  return (
    <>
      <NavBar count={count} setCount={setCount}></NavBar>
      <Banner></Banner>
      <Rating></Rating>
      <Suspense fallback={<span className="loading loading-spinner text-primary "></span> }>
        <Premium productPromise={productPromise} selectedItem={selectedItem} setSelectedItem={setSelectedItem} total={total} setTotal={setTotal} count={count} setCount={setCount}></Premium>

      </Suspense>
      <Step></Step>
      <Pricing></Pricing>
      <Footer></Footer>
    <ToastContainer />

    </>
  )
}

export default App
