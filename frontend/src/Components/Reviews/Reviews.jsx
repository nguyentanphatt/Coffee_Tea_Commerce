import React from 'react'
import './Reviews.css'
import black_star from '../../assets/frontend/black_star.png'
const Reviews = () => {
  return (
    <div className="reviews_container">
        <h1>Reviews</h1>
        <div className="reviews_detail">
            <div className="reviews_detail_left">
                <p>Alex publised 12/2/2022</p>
                <p>This product is super good</p>
            </div>
            <div className="reviews_detail_right">
                <img src={black_star} alt="" />
                <img src={black_star} alt="" />
                <img src={black_star} alt="" />
                <img src={black_star} alt="" />
                <img src={black_star} alt="" />
            </div>
        </div>
        <div className="reviews_detail">
            <div className="reviews_detail_left">
                <p>Alex publised 12/2/2022</p>
                <p>This product is super good</p>
            </div>
            <div className="reviews_detail_right">
                <img src={black_star} alt="" />
                <img src={black_star} alt="" />
                <img src={black_star} alt="" />
                <img src={black_star} alt="" />
                <img src={black_star} alt="" />
            </div>
        </div>
        <div className="reviews_detail">
            <div className="reviews_detail_left">
                <p>Alex publised 12/2/2022</p>
                <p>This product is super good</p>
            </div>
            <div className="reviews_detail_right">
                <img src={black_star} alt="" />
                <img src={black_star} alt="" />
                <img src={black_star} alt="" />
                <img src={black_star} alt="" />
                <img src={black_star} alt="" />
            </div>
        </div>
        <div className="reviews_detail">
            <div className="reviews_detail_left">
                <p>Alex publised 12/2/2022</p>
                <p>This product is super good</p>
            </div>
            <div className="reviews_detail_right">
                <img src={black_star} alt="" />
                <img src={black_star} alt="" />
                <img src={black_star} alt="" />
                <img src={black_star} alt="" />
                <img src={black_star} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Reviews