import React, { useEffect, useState } from 'react'
import './Style/News.css'
import news from '../assets/frontend/news'
import NewsDetail from '../Components/NewsDetail/NewsDetail'
const News = () => {

    const [category, setCategory] = useState('all')
    const [filterNews, setFilterNews] = useState(news)
    const [currentPage, setCurrentPage] = useState(0)
    useEffect(() => {
        if(category === 'all'){
            setFilterNews(news)
        } else {
            setFilterNews(news.filter(item => item.category === category))
        }
    }, [category]);

    
    const currentNews = filterNews.slice(currentPage * 6, (currentPage + 1) * 6)
    const totalPages = Math.ceil(filterNews.length / 6);
    const handleDotClick = (index) => {
        setCurrentPage(index);
    };

  return (
    <div className='news_container'>
        <div className="news_option">
            <button className={category === 'all' ? 'selected' : ''} onClick={()=>setCategory('all')}>All</button>
            <button className={category === 'coffee' ? 'selected' : ''} onClick={()=>setCategory('coffee')}>Coffee</button>
            <button className={category === 'tea' ? 'selected' : ''}onClick={()=>setCategory('tea')}>Tea</button>
            <button className={category === 'bean and seed' ? 'selected' : ''}onClick={()=>setCategory('bean and seed')}>Seed</button>
        </div>
        <div className="news_detail">
        {currentNews.map((item, index) =>{
            return <NewsDetail key={index} title={item.title} image={item.image} small_detail={item.small_detail}/>
        })}
        </div>
        <div className="news_nextContent">
            {Array.from({ length: totalPages }, (_, index) => (
                <div
                    key={index}
                    className={`dot ${currentPage === index ? 'active' : ''}`}
                    onClick={() => handleDotClick(index)}
                />
            ))}
        </div>
    </div>
  )
}

export default News