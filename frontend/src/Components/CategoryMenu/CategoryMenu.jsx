import React from 'react'
import './CategoryMenu.css'
import { Link } from 'react-router-dom'
import { Button, Typography, Divider, Box } from '@mui/material';
const CategoryMenu = ({onClose}) => {

    return (
        <Box className="category_menu" sx={{ padding: 2, backgroundColor: 'gray', borderRadius: 1 }}>
            <Button onClick={onClose} variant="contained" color="error" sx={{}}> <Typography sx={{color:'#fff'}}>X</Typography></Button>        
            <Box className="category_menu-category" sx={{ mb: 3, mt: 5 }}>
                <Typography variant="h4" 
                    sx={{
                        mb: 2,
                        fontWeight: '600',
                        textShadow: '3px 3px 5px rgba(0, 0, 0, 0.4)',
                        '&:hover':{
                            color: '#3D3434',
                            textShadow: '3px 3px 5px rgba(255, 255, 255, 0.4)',
                        }
                    }}
                >
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/coffee' onClick={onClose}>COFFEE</Link>
                </Typography>
                <Divider sx={{mb:2}}/>
                <Typography variant="body1" sx={{mb:2, fontSize: 18}}>Light Favor</Typography>
                <Typography variant="body1" sx={{mb:2, fontSize: 18}}>Strong Favor</Typography>
                <Typography variant="body1" sx={{mb:2, fontSize: 18}}>Good With Milk</Typography>
            </Box>

            <Box className="category_menu-category" sx={{ mb: 3 }}>
                <Typography variant="h4"
                    sx={{
                        mb: 2,
                        fontWeight: '600',
                        textShadow: '3px 3px 5px rgba(0, 0, 0, 0.4)',
                        '&:hover':{
                            color: '#3D3434',
                            textShadow: '3px 3px 5px rgba(255, 255, 255, 0.4)',
                        }
                    }}
                >
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/tea' onClick={onClose}>TEA LEAF</Link>
                </Typography>
                <Divider  sx={{mb:2}}/>
                <Typography variant="body1" sx={{mb:2,fontSize: 18}}>Light Favor</Typography>
                <Typography variant="body1" sx={{mb:2,fontSize: 18}}>Strong Favor</Typography>
                <Typography variant="body1" sx={{mb:2,fontSize: 18}}>Special Leaf</Typography>
            </Box>

            <Box className="category_menu-category" sx={{ mb: 3 }}>
                <Typography variant="h4"
                    sx={{
                        mb: 2,
                        fontWeight: '600',
                        textShadow: '3px 3px 5px rgba(0, 0, 0, 0.4)',
                        '&:hover':{
                            color: '#3D3434',
                            textShadow: '3px 3px 5px rgba(255, 255, 255, 0.4)',
                        }
                    }}
                >
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/seed' onClick={onClose}>SEED</Link>
                </Typography>
                <Divider sx={{mb:2}}/>
                <Typography variant="body1" sx={{mb:2,fontSize: 18}}>Coffee Bean</Typography>
                <Typography variant="body1" sx={{mb:2,fontSize: 18}}>Tea Leaf Seed</Typography>
            </Box>

            <Box className="category_menu-category">
                <Typography variant="h4"
                    sx={{mb: 2}}
                >
                    WANT TO KNOW MORE</Typography>
                <Divider sx={{mb:2}}/>
                <Typography variant="body1" sx={{mb:2,fontSize: 18}}>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/login' onClick={onClose}>Sign in or Sign up to get more info</Link>
                </Typography>
            </Box>
        </Box>
    );
}

export default CategoryMenu