import React,{useState, useContext, useEffect} from 'react'
import logo from '../../assets/frontend/logo.png'
import search_img from '../../assets/frontend/search.png'
import cart from '../../assets/frontend/cart.png'
import { Link } from 'react-router-dom'
import './Heading.css'
import { ShopContext } from '../../Context/ShopContext'
const Heading = () => {

  const {all_product, getTotalCartItems} = useContext(ShopContext)

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const results = all_product.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [all_product,searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleProductClick = () => {
    setSearchTerm('');
  };

  return (
    <div className='heading'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className='search'>
        <input type="text" name="" id="" placeholder='Search Item' 
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <img src={search_img} alt="" />
        {filteredProducts.length > 0 && (
          <div className="search_results">
            <ul>
              {filteredProducts.map(product => (
                <li key={product.id} className="search_item">
                <Link to={`/product/${product.id}`}
                  style={{textDecoration: 'none',color: 'inherit'}}
                  onClick={handleProductClick}
                >
                  <img src={product.image} alt={product.name} className="search_item_image" />
                  <span>{product.name}</span>
                </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className='item_cart'>
        {localStorage.getItem('auth-token')? <button className='btn' onClick={()=>{localStorage.removeItem('auth-token');window.location.reload('/')}}>Logout</button>
          :
          <Link to='/login'><button className='btn'>Login with us</button></Link>
        }    
        <Link to='/cart'><img src={cart} alt="" /></Link>
        <div className="cart_count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Heading