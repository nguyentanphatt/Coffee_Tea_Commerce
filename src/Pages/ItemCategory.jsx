import React from 'react'
import './Style/ItemCategory.css'
import all_product from '../assets/frontend/all_product'
import Item from '../Components/Item/Item'
const ItemCategory = (props) => {

   const handleBannerChange = () =>{
        switch(props.category){
            case 'coffee':
                return{
                    h1:"COFFEE",
                    p1:"Coffee: the favorite drink of the civilized world.",
                    p2:"Thomas Jefferson",
                    h2Style:"coffee_h1",
                    p1Style:"coffee_p1",
                    p2Style:"coffee_p2",
                };
            case 'tea':
                return{
                    h1:"TEA",
                    p1:"Tea is quiet and our thirst for tea is never far from our craving for beauty",
                    p2:" James Norwood Pratt",
                    h2Style:"tea_h1",
                    p1Style:"tea_p1",
                    p2Style:"tea_p2",
                };
            case 'seed':
                return{
                    h1:"SEED",
                    p1:"From a coffee bean springs energy and ambition; ",
                    p2:"From a tea seed, serenity and contemplation.",
                    h2Style:"seed_h1",
                    p1Style:"seed_p1",
                    p2Style:"seed_p2",
                };
            default:
                return{h1:"",
                    p1:"",
                    p2:"", 
                    h2Style:"", 
                    p1Style:"",
                    p2Style:"",}
        }
   }
    const {h1, p1, p2, h2Style, p1Style, p2Style} = handleBannerChange()

    const products = all_product.filter(product => product.category===props.category)
  return (
    <div className='item_category'>
        <div className="item_category_banner">
            <img src={props.banner} alt="" />
            <h2 className={h2Style}>{h1}</h2>
            <p className={p1Style}>{p1}</p>
            <p className={p2Style}>{p2}</p>
        </div>
        {/*<div className="item_category-item">
            {products.map((item,index)=>{
                return <Item key={index} name={item.name} image={item.image} price={item.price} small_description={item.small_description}/>
            })}
        </div>*/}
    </div>
  )
}

export default ItemCategory