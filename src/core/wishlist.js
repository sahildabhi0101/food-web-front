import React, { useState, useEffect } from 'react';
import '../login page/hom1/style.css'
import '../login page/hom1/Dry-Fruit.css'
import { Link } from 'react-router-dom';
import { Card3 } from "../user/cards";
const Wishlist = () => {

    const [wishlist, setWishlist] = useState([])
    const [reload, setReload] = useState(false)

    const fetchWishlist = () => {
        const getItems = JSON.parse(localStorage.getItem("wishlist"))
        setWishlist(getItems)
    }
    useEffect(() => { fetchWishlist() }, [reload])

    const wishtocart = (val) => {
        const addtocart = JSON.parse(localStorage.getItem("addtocart"));
        let cart = [];
        if(!addtocart){
            cart.push(val);
            localStorage.setItem("addtocart", JSON.stringify(cart))
        }else{
            addtocart.push(val)
            localStorage.setItem("addtocart", JSON.stringify(addtocart))
        }
    }

    return (
        <>
            <button className="wbtn123 wbtn1123 wishlistb "><Link to='/'>BACK TO HOME</Link></button>
            {(  wishlist ) ? (
                <>
                    <h1 className="wishlist0 container">wishlist</h1>
                    <div className="container-1 container">
                        {
                            wishlist.map((val, index) => {
                                return (
                                    <Card3 imgsrc={val.imgsrc}
                                        sname={val.sname}
                                        price={val.price}
                                        oldprice1={val.oldprice1}
                                        wishlist21={val.wishlist21}
                                        wishlist11={val.wishlist11}
                                        wishtocart={wishtocart}
                                        reload={reload}
                                        setReload={setReload}
                                    />
                                );
                            })
                        }
                    </div>
                </>
            ) : (
                <>
                    <h1 className="wishlist0 container">YOUR WISHLIST IS EMPTY</h1>
                </>
            )
            }
        </>
    )
}

export default Wishlist;