import React, { useState, useEffect } from 'react';
import {isauthenticated} from '../auth'

function Card1({ imgsrc, sname, price, oldprice1, wishtolocal, carttolocal, wishlist11, wishlist21}) {
    let [toggleimage, setToggleimage] = useState(false);
    let changeimage = () => {
        if (!toggleimage) setToggleimage(true)
        else setToggleimage(false)
    };
    let loctowish = (sname) => {
        const getItems = JSON.parse(localStorage.getItem("wishlist"))
        let i;
        if (getItems)
            for (i of getItems)
                if (i.sname === sname) return 0;
        return 1;
    }
    let loctocart = (sname) => {
        const getItems = JSON.parse(localStorage.getItem("addtocart"))
        let i;
        if (getItems)
            for (i of getItems)
                if (i.sname === sname) return 0;
        return 1;
    }

    return (
        <>
            <div className="card"  >
                <img src={imgsrc} className="card-img-top img" alt="mypic" />
                <div className="card-body">
                    <h5 className="title-name">{sname}</h5>
                    <p className="price-box ">&#8377;{price}<del className="del">{oldprice1}</del></p>
                    <div className="btn-parent">
                    {isauthenticated() && (   
                          <>  
                        <button className="price-box-1" onClick={
                            () => {
                                if (loctowish(sname) === 1) {
                                    wishtolocal({ sname, imgsrc, price, oldprice1 })
                                    changeimage()
                                }
                                else {
                                    window.alert('item is already added in wishlist')
                                }
                            }
                        } alt="normalimage"   >
                            {toggleimage ?
                                (
                                    <img src={wishlist21} className="card-img-top img" alt="normalimage2" id="#heart" />
                                ) :
                                (<img src={wishlist11} className="card-img-top img" alt="normalimage1" id="#heart" />
                                )
                            }
                        </button>
                        <button className="btn123 btn1123" alt="addtocart" onClick={
                            () => {
                                if (loctocart(sname) === 1) {
                                    carttolocal({ sname, imgsrc, price, oldprice1 });
                                }
                                else {
                                    window.alert('item is already added in your cart')
                                }
                            }
                        }  >Add To Cart</button>
                        </>
                        )}
                        </div>
                </div>
            </div>
        </>
    )
}
function Card2({ imgsrc, sname, price, oldprice1, wishtolocal, carttolocal, wishlist11, wishlist21 }) {
    let [toggleimage, setToggleimage] = useState(false);
    let changeimage = () => {
        if (!toggleimage) setToggleimage(true)
        else setToggleimage(false)
    };
    let loctowish = (sname) => {
        const getItems = JSON.parse(localStorage.getItem("wishlist"))
        let i;
        if (getItems)
            for (i of getItems)
                if (i.sname === sname) return 0;
        return 1;
    }
    let loctocart = (sname) => {
        const getItems = JSON.parse(localStorage.getItem("addtocart"))
        let i;
        if (getItems)
            for (i of getItems)
                if (i.sname === sname) return 0;
        return 1;
    }
    return (
        <>

            <div className="card "  >
                <img src={imgsrc} className="card-img card-img-1 img" alt="mypic" />
                <div className="card-body">
                    <h5 className="title-name">{sname}</h5>
                    <p className="price-box ">&#8377;{price}<del className="del">{oldprice1}</del></p>
                    <div className="btn-parent">
                    {isauthenticated() && (   
                          <>
                        <button className="price-box-1" onClick={() => {
                            if (loctowish(sname) === 1) {
                                wishtolocal({ sname, imgsrc, price, oldprice1 })

                                changeimage()
                            }
                            else {
                                window.alert('item is already added in wishlist')
                            }
                        }} alt="normalimage"   >
                            {toggleimage ?
                                (<img src={wishlist21} className="card-img-top img" alt="normalimage2" id="#heart" />) :
                                (<img src={wishlist11} className="card-img-top img" alt="normalimage1" id="#heart" />)
                            }
                        </button>
                        <button className="btn123 btn1123" alt="addtocart" onClick={
                            () => {
                                if (loctocart(sname) === 1) {
                                    carttolocal({ sname, imgsrc, price, oldprice1 });
                                }
                                else {
                                    window.alert('item is already added in your cart')
                                }
                            }
                        } >Add To Cart</button>
                        </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
function Card3({ imgsrc, sname, price, oldprice1, wishtocart, setReload= f=> f,reload = undefined}) {

    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("wishlist")))
    const removeWishlist = (sname) => {
        setWishlist(wishlist.filter(prod => prod.sname !== sname))
    }
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    }, [wishlist])


    let loctocart = (sname) => {
        const getItems = JSON.parse(localStorage.getItem("addtocart"))
        let i;
        if (getItems)
            for (i of getItems)
                if (i.sname === sname) return 0;
        return 1;
    }

    return (
        <>

            <div className="card" >
                <img src={imgsrc} className="card-img-top img" alt="mypic" />
                <div className="card-body">
                    <h5 className="title-name">{sname}</h5>
                    <p className="price-box ">&#8377;{price}<del className="del">{oldprice1}</del></p>

                    <div className="btn-parent">
                        <button className="btn123 btn1123" onClick={() => {
                            removeWishlist(sname)
                            setReload(!reload)
                        }}>remove</button>
                        <button className="btn123 btn1123" alt="addtocart" onClick={
                            () => {
                                if (loctocart(sname) === 1) {
                                    wishtocart({ sname, imgsrc, price, oldprice1 });
                                }
                                else {
                                    window.alert('item is already added in your cart')
                                }
                            }}  >Add To Cart</button></div>
                </div>
            </div>
        </>
    )
}

export { Card1, Card2, Card3 }