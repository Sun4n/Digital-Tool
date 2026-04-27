
import { Suspense } from 'react'
import './App.css'
import Banner from './Component/Banner/Banner'
import NavBar from './Component/NavBar/NavBar'
import Premium from './Component/Premium/Premium'
import Rating from './Component/Rating/Rating'
import Step from './Component/Steps/Step'
import Pricing from './Component/Pricing/Pricing'

function App() {
  const product = async()=>{
    const res = await fetch("/data.json")
    return res.json()
  }



  const productPromise = product()
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Rating></Rating>
      <Suspense>
      <Premium productPromise = {productPromise}></Premium>

      </Suspense>
      <Step></Step>
      <Pricing></Pricing>
    </>
  )
}

export default App
