<<<<<<< HEAD
import React , { useContext }from 'react'
=======
import React from 'react'
>>>>>>> 3cd613e60ba8b6b0942f6771ae0061757699b55a
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from "../Components/NewCollections/NewCollections"
import Newsletter from '../Components/NewsLetter/Newsletter'
<<<<<<< HEAD
import { UserContext } from '../App'

const Shop = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Hero user={user} />
=======
// import Footer from '../Components/Footer/Footer'


const Shop = () => {
  return (
    <div>
      <Hero/>
>>>>>>> 3cd613e60ba8b6b0942f6771ae0061757699b55a
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
      
    </div>
  )
}

export default Shop