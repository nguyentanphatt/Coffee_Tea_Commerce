import React from 'react'
import Banner from '../Components/Banner/Banner'
import CoffeeSpecial from '../Components/CoffeeSpecial/CoffeeSpecial'
import TeaSpecial from '../Components/TeaSpecial/TeaSpecial'
import NewSeed from '../Components/NewSeed/NewSeed'
import News from './News'

const HomePage = () => {
  return (
    <div style={{backgroundColor: '#f5f5f5'}}>
        <Banner />
        <CoffeeSpecial />
        <TeaSpecial />
        <NewSeed />
    </div>
  )
}

export default HomePage