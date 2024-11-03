import React, {createContext, useState, useEffect} from "react";
//import all_product from "../assets/frontend/all_product";

export const ShopContext = createContext(null)

const getDefaultCart = () =>{
    let cart = {}
    for(let i = 0; i < 3000; i++){
        cart[i] = 0
    }
    return cart
}
const ShopContextProvider = (props) => {

    const [all_product, setAll_Product] = useState([])
    const [cartItems, setCartItems] = useState(getDefaultCart())
    
    useEffect(()=>{
        fetch('http://localhost:4000/listproduct')
            .then(res=>res.json()).then(data=>setAll_Product(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method: 'POST',
                headers:{
                    Accept: 'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            })
            .then((res)=>res.json())
            .then((data)=>setCartItems(data))
        }
    },[])

    const addToCart = (itemID, quantity) => {
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]+quantity}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method: 'POST',
                headers:{
                    Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "itemId":itemID,
                    "quantity": quantity
                })
            })
            .then(res=>res.json()).then(data=>console.log(data))
        }
    }

    const removeFromCart = (itemID) => {
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method: 'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({"itemId":itemID})
            })
            .then((res)=>res.json())
            .then(data=>console.log(data))
        }
    }

    const removeAllFromCart = () => {
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/removeallfromcart', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setCartItems({});
                    console.log(data.message);
                } else {
                    console.warn(data.message);
                }
            })
            .catch((error) => {
                console.error("Failed to remove all items from cart:", error);
            });
        }
    };

    const getTotalCartAmount = () =>{
        let totalAmount = 0
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id === Number(item))
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount
    }

    const getTotalCartItems = () =>{
        let totalItem = 0
        for (const item in cartItems) {
            if(cartItems[item] >0){
                totalItem += 1
            }
            
        }
        return totalItem
    }

    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems, removeAllFromCart}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider