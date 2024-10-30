import React, { useEffect, useState } from 'react'
import './Style/News.css'
import news from '../assets/frontend/news'
import NewsDetail from '../Components/NewsDetail/NewsDetail'
import { Box, ToggleButtonGroup, ToggleButton, Pagination } from '@mui/material'
const News = () => {

    const [category, setCategory] = useState('all')
    const [filterNews, setFilterNews] = useState(news)
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 6;
    const totalPages = Math.ceil(filterNews.length / itemsPerPage);

    const handleCategoryChange = (e, newCategory) => {
        if(newCategory !== null){
            setCategory(newCategory)
        }
    }

    const handlePageChange = (e, value) => {
        setCurrentPage(value - 1);
    };

    const currentNews = filterNews.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    useEffect(() => {
        if(category === 'all'){
            setFilterNews(news)
        } else {
            setFilterNews(news.filter(item => item.category === category))
        }
    }, [category]);

  return (
    <Box className='news_container'>
        <Box
            sx={{
                margin: '20px',
                display: 'flex',
                justifyContent: 'center',
                gap: '10px'
            }}
        >
            <ToggleButtonGroup
                value={category}
                exclusive
                onChange={handleCategoryChange}
                aria-label='Category'
            >
                <ToggleButton
                    value="all"
                    aria-label='All'
                    sx={{
                        width: '100px',
                        border: '2px solid #3D3434',
                        fontWeight: '600',
                        '&:hover':{
                            color: '#3D3434'
                        }
                    }}
                >
                All
                </ToggleButton>
                <ToggleButton
                    value="coffee"
                    aria-label='Coffee'
                    sx={{
                        width: '100px',
                        border: '2px solid #3D3434',
                        fontWeight: '600',
                        '&:hover':{
                            color: '#3D3434'
                        }
                    }}
                >
                Coffee
                </ToggleButton>
                <ToggleButton
                    value="tea"
                    aria-label='Tea'
                    sx={{
                        width: '100px',
                        border: '2px solid #3D3434',
                        fontWeight: '600',
                        '&:hover':{
                            color: '#3D3434'
                        }
                    }}
                >
                Tea
                </ToggleButton>
                <ToggleButton
                    value="bean and seed"
                    aria-label='Seed'
                    sx={{
                        width: '100px',
                        border: '2px solid #3D3434',
                        fontWeight: '600',
                        '&:hover':{
                            color: '#3D3434'
                        } 
                    }}
                >
                Seed
                </ToggleButton>

            </ToggleButtonGroup>
        </Box>
        <Box className="news_detail">
        {currentNews.map((item, index) =>{
            return <NewsDetail key={index} title={item.title} image={item.image} small_detail={item.small_detail}/>
        })}
        </Box>
        <Box display="flex" justifyContent="center" marginTop={2} mb={2}>
            <Pagination 
                count={totalPages}
                page={currentPage+1}
                onChange={handlePageChange}
                variant='outlined'
                shape='rounded'
            />
        </Box>
    </Box>
  )
}

export default News