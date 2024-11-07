import React,{useState, useContext, useEffect} from 'react'
import logo from '../../assets/frontend/logo.png'
import search_img from '../../assets/frontend/search.png'
import cart from '../../assets/frontend/cart.png'
import { Link } from 'react-router-dom'
import './Heading.css'
import { ShopContext } from '../../Context/ShopContext'
import { InputBase, IconButton, List, ListItem, ListItemAvatar, ListItemText, Avatar, Button, Box } from '@mui/material'
import { Search as SearchIcon} from '@mui/icons-material'
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
    <Box className='heading'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <Box className='search'>
        <InputBase 
          placeholder='Search Item' 
          className='search_input' 
          value={searchTerm} 
          onChange={handleSearchChange}
        />
        <IconButton type='submit'>
          <SearchIcon />
        </IconButton>
      </Box>
      {filteredProducts.length > 0 && searchTerm.length > 0 && (
        <List
          sx={{
            position: 'absolute',
            top: '10%',
            left: '694px',
            width: '624px',
            backgroundColor: '#fff',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            maxHeight: '200px',
            overflowY: 'auto',
            zIndex: 1000,
            border: '1px solid #ccc',
            ...(window.innerWidth <= 1280 && window.innerWidth > 1024 &&{
              left: '462px',
              width: '474px',
              top: '8%'
            }),
            ...(window.innerWidth <= 1024 && window.innerWidth > 800 && {
              left: '332px',
              width: '346px',
              top: '8%'
            }),
            ...(window.innerWidth <= 800 && window.innerWidth > 500 && {
              left: '236px',
              width: '306px',
              top: '8%'
            }),
            ...(window.innerWidth <= 500 && {
              left: '100px',
              width: '136px',
              top: '8%'
            }),
          }}
        >
          {filteredProducts.map((product) => (
            <ListItem
              key={product.id}
              component={Link}
              to={`/product/${product.id}`}
              onClick={() => {
                handleProductClick();
              }}
              sx={{
                transition: 'background-color 0.2s ease',
                '&:hover':{
                  backgroundColor: '#f0f0f0'
                }
              }}
            >
              <ListItemAvatar>
                <Avatar src={product.image} alt={product.name} />
              </ListItemAvatar>
              <ListItemText primary={product.name} />
            </ListItem>
          ))}
        </List>
      )}
      <Box className='item_cart'>
        {localStorage.getItem('auth-token') ? 
          (
            <Button
              className='btn'
              onClick={()=>{localStorage.removeItem('auth-token');window.location.reload('/')}}
              variant='outlined'
            >
              Logout
            </Button>
          )
          :
          <Link to='/login'>
            <Button className='btn' variant='outlined'>Login with us</Button>
          </Link>
        }    
        <Link to='/cart'><img src={cart} alt="" /></Link>
        <div className="cart_count">{getTotalCartItems()}</div>
      </Box>
    </Box>
  )
}

export default Heading