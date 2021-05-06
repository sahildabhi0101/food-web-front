import React, { useState, useEffect } from 'react';
import '../login page/hom1/style.css'
import '../login page/hom1/Dry-Fruit.css'
import { Link } from 'react-router-dom';
const AddToCart = () => {
    const [addtocart, setAddtocart] = useState([])

    const fetchaddtocart = () => {
        const getItems = JSON.parse(localStorage.getItem("addtocart"))
        setAddtocart(getItems)
    }
    useEffect(() => {fetchaddtocart() }, [])

    const removeaddtocart = (sname) => {
        setAddtocart(addtocart.filter(prod => prod.sname !== sname))}
    useEffect(() => {
        localStorage.setItem("addtocart", JSON.stringify(addtocart))}, [addtocart])

    return (
        <>
            <button className="wbtn123 wbtn1123 wishlistb "><Link to='/'>BACK TO HOME</Link></button>
            {( addtocart ) ? (
                <>
                    <h1 className="wishlist0 container">YOUR CART</h1>
                    <div className="container-1 container">
                        {
                            addtocart.map((val, index) => (
                                
                                <div className="card " style={{ width: "24%" }} >
                                    <img src={val.imgsrc} className="card-img-top img" alt="mypic" />
                                    <div className="card-body">
                                        <h5 className="title-name">{val.sname}</h5>
                                        <p className="price-box ">&#8377;{val.price}<del className="del">{val.oldprice1}</del></p>

                                        <div className="btn-parent">
                                            <button className="btn123 btn1123" onClick={() => { removeaddtocart(val.sname) }}>remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </>
            ) : (
                <>
                    <h1 className="wishlist0 container">YOUR CART IS EMPTY</h1>
                </>
            )
            }
        </>
    )
}

export default AddToCart;