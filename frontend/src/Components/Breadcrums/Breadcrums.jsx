import React from 'react'
import './Breadcrums.css'
const Breadcrums = (props) => {

    const {product} = props

    const categoryChange = () => {
        switch(product.category){
            case 'coffee':
                return{
                    category: 'Coffee',
                }
            case 'tea':
                return{
                    category: 'Tea',
                }
            case 'bean and seed':
                return{
                    category: 'Bean And Seed',
                }
            default:
                return{
                    category: '',
                }
        }
    }

    const {category} = categoryChange() 

  return (
    <div className="breadcrum">
        Home / {category} / {product.name}
    </div>
  )
}

export default Breadcrums