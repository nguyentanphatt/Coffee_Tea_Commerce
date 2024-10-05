import React from 'react'
import './CategoryMenu.css'
import { Link } from 'react-router-dom'
const CategoryMenu = ({onClose}) => {

    //const [menu,setMenu] = useState()

  return (
    <div className='category_menu'>
        <button onClick={onClose}>X</button>
        <div className="category_menu-category">
            <h3><Link style={{textDecoration: 'none' ,color: 'inherit'}} to='/coffee' onClick={onClose}>COFFEE</Link></h3>
            <hr />
            <p>Light Favor</p>
            <p>Strong Favor</p>
            <p>Good With Milk</p>
        </div>
        <div className="category_menu-category">
            <h3><Link style={{textDecoration: 'none',color: 'inherit'}} to='/tea' onClick={onClose}>TEA LEAF</Link></h3>
            <hr />
            <p>Light Favor</p>
            <p>Strong Favor</p>
            <p>Special Leaf</p>
        </div>
        <div className="category_menu-category">
            <h3><Link style={{textDecoration: 'none',color: 'inherit'}} to='/seed' onClick={onClose}>SEED</Link></h3>
            <hr />
            <p>Coffee Bean</p>
            <p>Tea Leaf Seed</p>
        </div>
        <div className="category_menu-category">
            <h3>WANT TO KNOW MORE</h3>
            <hr />
            <p>Sign in or Sign up to get more info</p>
        </div>
    </div>
  )
}

export default CategoryMenu