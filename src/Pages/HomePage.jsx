import React from 'react'
import Banner from '../Components/Banner/Banner'
import CoffeeSpecial from '../Components/CoffeeSpecial/CoffeeSpecial'
import TeaSpecial from '../Components/TeaSpecial/TeaSpecial'

const HomePage = () => {
  return (
    <div>
        <Banner />
        <CoffeeSpecial />
        <TeaSpecial />
    </div>
  )
}

export default HomePage