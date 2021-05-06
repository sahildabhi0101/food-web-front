import React from 'react'
import { Link } from 'react-router-dom'
import '../login page/hom1/style.css'
import foodlogohome from '../login page/hom1/food-logo.PNG'
import { isauthenticated, signout } from '../auth'
function Nav() {


    return (
        <>

            <nav className="nav" >
                <div className="nav-container container">

                    <input type="checkbox" className='checkBox' />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <div className="logomain1">
                        <img src={foodlogohome} alt="food-logo" className="logomain" />
                    </div>
                    <div className="menu-items">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link> </li>
                        <li>
                            <a href="#food">
                                <div className="dropdown">
                                    <button className="dropbtn">Category</button>
                                    <div className="dropdown-content">
                                        <Link  to="/fruit">Fruit</Link>
                                        <Link to='/vegetable'>Vegetable</Link>
                                        <Link to="/dryfruit">Dry-fruit</Link>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/">Testimonial</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        {!isauthenticated() && (
                            <>
                                <li><Link to='/signup'>signup</Link></li>
                                <li><Link to="/signin">Login</Link></li>
                            </>
                        )}
                        </div>
                        {isauthenticated() && (
                            <>
                                <div className="account-detail">
                                    <i className="fas fa-user-circle fa-4x"></i>
                                    <ul className="account-content">
                                        <li>
                                            <Link to={`/user/${isauthenticated().user._id}`}>
                                                {` ${isauthenticated().user.name}`}
                                            </Link>
                                        </li>
                                        {/* .toUpperCase() */}
                                        <li><Link to={`/user/edit/${isauthenticated().user._id}`} >
                                            Edit Profile
                            </Link>
                                        </li>
                                        <li><Link to={`/user/wishlist/${isauthenticated().user._id}`}> Wish List</Link></li>
                                        <li><Link to={`/user/addtocart/${isauthenticated().user._id}`}> My Orders</Link></li>
                                        <li><a href="?" onClick={() => signout(() => this.props.history.push('/'))}>signout</a></li>
                                    </ul>
                                </div>
                            </>
                        )}
                </div>
            </nav>
        </>
    )
}
export { Nav };