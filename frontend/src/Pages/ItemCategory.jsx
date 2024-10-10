import React, { useContext, useEffect, useState } from 'react'
import './Style/ItemCategory.css'
import Item from '../Components/Item/Item'
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { ShopContext } from '../Context/ShopContext'
const ItemCategory = (props) => {
    const {all_product} = useContext(ShopContext)
    
    const [favor, setFavor] = useState('')
    const [price, setPrice] = useState('')
    const [type, setType] = useState('')
    const [special, setSpecial] = useState('')
    const [filterProduct, setFilterProduct] = useState([])

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
            case 'bean and seed':
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

    const renderFavorOptionItem = () => {
        if(props.category === 'tea'){
            return (
                <div>
                    <h2>Favor</h2>
                    <FormGroup className='item_category-checkbox'>
                        <FormControlLabel control={<Checkbox checked={favor==='Light favor'}/>} onClick={handleFavorChange} name='Light favor' label="Light Favor"/>
                        <FormControlLabel control={<Checkbox checked={favor==='Strong favor'}/>} onClick={handleFavorChange} name='Strong favor' label="Strong Favor"/>
                        <FormControlLabel control={<Checkbox checked={favor==='Special leaf'}/>} onClick={handleFavorChange} name='Special leaf' label="Special Leaf"/>
                    </FormGroup>
                </div>
            )
        } else if (props.category === 'coffee'){
            return (
                <div>
                    <h2>Favor</h2>
                    <FormGroup className='item_category-checkbox'>
                        <FormControlLabel control={<Checkbox checked={favor==='Light favor'}/>} onClick={handleFavorChange} name='Light favor' label="Light Favor"/>
                        <FormControlLabel control={<Checkbox checked={favor==='Strong favor'}/>} onClick={handleFavorChange} name='Strong favor' label="Strong Favor"/>
                        <FormControlLabel control={<Checkbox checked={favor==='Good with milk'}/>} onClick={handleFavorChange} name='Good with milk' label="Good With Milk"/>
                    </FormGroup>
                </div>
            )
        } else {
            return null;
        }
    }

    const renderTypeOptionItem = () =>{
        if(props.category === 'tea'){
            return (
                <div>
                    <h2>Type</h2>
                    <FormGroup className='item_category-checkbox'>
                        <FormControlLabel control={<Checkbox checked={type==='Tea bag'}/>} onClick={handleTypeChange} name='Tea bag' label="Tea Bag"/>
                        <FormControlLabel control={<Checkbox checked={type==='Powdered tea'}/>} onClick={handleTypeChange} name='Powdered tea' label="Powdered Tea"/>
                    </FormGroup>
                </div>
            )
        } else if (props.category === 'coffee'){
            return (
                <div>
                    <h2>Type</h2>
                    <FormGroup className='item_category-checkbox'>
                        <FormControlLabel control={<Checkbox checked={type==='Regular'}/>} onClick={handleTypeChange} name='Regular' label="Regular"/>
                        <FormControlLabel control={<Checkbox checked={type==='Decaf'}/>} onClick={handleTypeChange} name='Decaf' label="Decaf"/>
                    </FormGroup>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Type</h2>
                    <FormGroup className='item_category-checkbox'>
                        <FormControlLabel control={<Checkbox checked={type==='Coffee bean'}/>} onClick={handleTypeChange} name='Coffee bean' label="Coffee Bean"/>
                        <FormControlLabel control={<Checkbox checked={type==='Tea leaf'}/>} onClick={handleTypeChange} name='Tea leaf' label="Tea Seed"/>
                    </FormGroup>
                </div>
            )
        }
    }

    const renderSpecialOptionItem = () => {
        if(props.category === 'tea'){
            return (
                <div>
                    <h2>Forms</h2>
                    <FormGroup className='item_category-checkbox'>
                        <FormControlLabel control={<Checkbox checked={special==='Pound'}/>} onClick={handleSpecialChange} name='Pound' label="Pound"/>
                        <FormControlLabel control={<Checkbox checked={special==='Bags'}/>} onClick={handleSpecialChange} name='Bags' label="Bags"/>
                        <FormControlLabel control={<Checkbox checked={special==='Tin can'}/>} onClick={handleSpecialChange} name='Tin can' label="Tin Can"/>
                    </FormGroup>
                </div>
            )
        } else if (props.category === 'coffee'){
            return (
                <div>
                    <h2>Grind</h2>
                    <FormGroup className='item_category-checkbox'>
                        <FormControlLabel control={<Checkbox checked={special==='Espresso'}/>} onClick={handleSpecialChange} name='Espresso' label="Espresso"/>
                        <FormControlLabel control={<Checkbox checked={special==='Manual Drip'}/>} onClick={handleSpecialChange} name='Manual Drip' label="Manual Drip"/>
                        <FormControlLabel control={<Checkbox checked={special==='Auto Drip'}/>} onClick={handleSpecialChange} name='Auto Drip' label="Auto Drip"/>
                    </FormGroup>
                </div>
            )
        } else {
            return null;
        }
    }

    const handleFavorChange = (e) => {
        const value = e.target.name
        setFavor(favor === value ? '' : value);
    };
    const handlePriceChange = (e) => {
        const value = e.target.name
        setPrice(price === value ? '' : value);
    };

    const handleTypeChange = (e) => {
        const value = e.target.name
        setType(type === value ? '' : value);
    };

    const handleSpecialChange = (e) => {
        const value = e.target.name
        setSpecial(special === value ? '' : value);
    };
    useEffect(()=>{
        setFavor('')
        setPrice('')
        setSpecial('')
        setType('')
        setFilterProduct(all_product.filter(product => product.category === props.category))
    },[all_product,props.category])

    const handleSearchItem = () => {
        let products = all_product.filter(product => product.category===props.category)

        if(favor){
            products = products.filter(product => product.favor===favor);
        } 
        if(type){
            products = products.filter(product => product.type===type);
        } 
        if(props.category === 'tea'){
            if(special){
                products = products.filter(product => product.form===special);
            } 
        } else if (props.category === 'coffee'){
            if(special){
                products = products.filter(product => product.grind===special);
            } 
        }
        if(price === 'above'){
            products = products.filter(product => product.price >= '20');
        } else if (price === 'below') {
            products = products.filter(product => product.price < '20');
        }


        setFilterProduct(products)
    }

  return (
    <div className='item_category'>
        <div className="item_category_banner">
            <img src={props.banner} alt="" />
            <h2 className={h2Style}>{h1}</h2>
            <p className={p1Style}>{p1}</p>
            <p className={p2Style}>{p2}</p>
        </div>
        <div className='item_category-detail'>
            <div className="item_category-option">
                <div>
                    {props.category !== 'bean and coffee' ?
                    renderFavorOptionItem() : null}
                </div>
                <div>
                    <h2>Price</h2>
                    <FormGroup className='item_category-checkbox'>
                        <FormControlLabel control={<Checkbox checked={price==='above'}/>} onClick={handlePriceChange} name='above' label="Above $20"/>
                        <FormControlLabel control={<Checkbox checked={price==='below'}/>} onClick={handlePriceChange} name='below' label="Below $20"/>
                    </FormGroup>
                </div>
                <div>
                    {renderTypeOptionItem()}
                </div>
                    {props.category !== 'bean and coffee'}
                <div>
                    {props.category !== 'bean and coffee' ?
                    renderSpecialOptionItem() : null}
                </div>
                <div className='item_category-option_search'>
                    <button onClick={handleSearchItem}>Search</button>
                </div>
            </div>
            <div className="item_category-item">
            {filterProduct.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} price={item.price} small_description={item.small_description}/>
            })}
            </div>
        </div>
    </div>
  )
}

export default ItemCategory