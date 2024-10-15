import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import Reviews from '../Components/Reviews/Reviews'

const Product = () => {

    const {all_product} = useContext(ShopContext)
    const {productId} = useParams()
    const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <Reviews />
    </div>
  )
}

export default Product