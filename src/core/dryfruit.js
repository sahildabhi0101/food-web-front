import React from 'react'
import '../login page/hom1/style.css'
import '../login page/hom1/Dry-Fruit.css'
import { Card1, Card2 } from "../user/cards";
import {Nav} from "../core/nav"
import Ddata from "../user/ddata";
import Footer from './footer';
const Dryfruit = () => {

    const wishtolocal = (val) => {
        const wishlist = JSON.parse(localStorage.getItem("wishlist"));
        let wish = [];
        if (!wishlist) {
            wish.push(val);
            localStorage.setItem("wishlist", JSON.stringify(wish))
        } else {
            wishlist.push(val)
            localStorage.setItem("wishlist", JSON.stringify(wishlist))
        }
    }
    const carttolocal = (val) => {
        const addtocart = JSON.parse(localStorage.getItem("addtocart"));
        let cart = [];
        if (!addtocart) {
            cart.push(val);
            localStorage.setItem("addtocart", JSON.stringify(cart))
        } else {
            addtocart.push(val)
            localStorage.setItem("addtocart", JSON.stringify(addtocart))
        }
    }
    return (
        <div className="">
            <Nav />
            <div className="container-1 container">
                {
                    Ddata.map((val, index) => {

                        // console.log(index);
                        if (index % 2 === 0)
                            return (
                                <Card1 imgsrc={val.imgscr}
                                    sname={val.sname}
                                    price={val.price}
                                    oldprice1={val.oldprice1}
                                    wishlist21={val.wishlist21}
                                    wishlist11={val.wishlist11}
                                    wishtolocal={wishtolocal}
                                    carttolocal={carttolocal}
                                />
                            );
                        else
                            return (
                                <Card2 imgsrc={val.imgscr}
                                    sname={val.sname}
                                    price={val.price}
                                    oldprice1={val.oldprice1}
                                    wishlist21={val.wishlist21}
                                    wishlist11={val.wishlist11}
                                    wishtolocal={wishtolocal}
                                    carttolocal={carttolocal}
                                />
                            );
                    })
                }
            </div>
            <Footer/>
        </div>
    );
};
export default (Dryfruit);