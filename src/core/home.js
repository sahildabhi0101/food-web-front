import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { init } from 'emailjs-com';
import emailjs from "emailjs-com";
import '../login page/hom1/style.css'
import foodlogohome from '../login page/hom1/food-logo.PNG'
import aboutimage1 from '../login page/hom1/about-image-1.png'
import aboutphotowithoutbg from '../login page/hom1/about-photo-without-bg.png'
import food1 from '../login page/hom1/food1.jpeg'
import food2 from '../login page/hom1/food2.jpeg'
import food4 from '../login page/hom1/food3.jpeg'
import male1 from '../login page/hom1/male-photo1.jpg'
import male2 from '../login page/hom1/male-photo2.jpg'
import male3 from '../login page/hom1/male-photo3.jpg'
import restrauntimage from '../login page/hom1/restraunt-image.jpg'
import foodmenu1 from '../login page/hom1/food-menu1.jpeg'
import foodmenu2 from '../login page/hom1/food-menu2.jpeg'
import foodmenu3 from '../login page/hom1/food-menu3.jpeg'
import foodmenu4 from '../login page/hom1/food-menu4.jfif'
import foodmenu5 from '../login page/hom1/food-menu5.jpeg'
import foodmenu6 from '../login page/hom1/food-menu6.jpeg'
import { isauthenticated, signout } from '../auth'
import Footer from './footer';
import Particles from 'react-particles-js';
import particlesConfig from '../config/particle'


init("user_55IHzFJLiTeUOdkd5ksPo");
class Home extends Component {

    sendemail(e) {
        e.preventDefault();
        console.log(e.target);
        emailjs.sendForm('default_service', 'template_f2oap74', e.target)
        e.target.reset()
    }
    render() {
        return (
            <div className="">

                <nav className="nav">
                    <div id="particles-js" className="nav-container container">
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
                            <li><a href="#showcase">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li>
                                <a href="#food">
                                    <div className="dropdown">
                                        <button className="dropbtn">Category</button>
                                        <div className="dropdown-content">
                                            <Link to="/fruit">Fruit</Link>
                                            <Link to='/vegetable'>Vegetable</Link>
                                            <Link to="/dryfruit">Dry-fruit</Link>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li><a href="#food-menu">Menu</a></li>
                            <li><a href="#testimonial">Testimonial</a></li>
                            <li><a href="#contact">Contact</a></li>
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

                        {/* </div> */}
                    </div>
                </nav>

                <div className="background">
                    <section className="showcase-area" id="showcase">
                        <div className="show-container">
                            <h1 className="lg-font12">Eat Right Food</h1>
                            <p className="md-font12">Eat healthy food,it is good for your health</p>
                            <a href="#food-menu" className="btn123 btn1123">Menu</a>
                        </div>
                    </section>
                </div>

                <section className="mainparticle" >
                    <div className="mainparticle1">
                        <div className="mainparticle2">
                            <Particles height="180px" width="100%" 
                            params={particlesConfig} />

                            <div className="particontent">Welcome To <span className="parti">OUR FOOD</span></div>
                        </div>
                    </div>
                </section>

                <section className="about-section-main" id="about">
                    <h1 className="title">About us</h1>
                    <div className="container">
                        <div className="about-content">
                            <div className="about-text">
                                <h3>We Provide Good Food
                        For Your Family!</h3>
                                <p className="gray-text sm-font">Organic food is food produced by methods that comply with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources.</p>
                                <div className="highlight">
                                    <p> <i className="fas fa-leaf fa-1x"></i> Premium Quality</p>
                                    <p> <i className="fas fa-leaf fa-1x"></i> Harvest Everyday</p>
                                    <p> <i className="fas fa-leaf fa-1x"></i> 100% Organic</p>
                                    <p> <i className="fas fa-leaf fa-1x"></i> Fast Delivery</p>
                                </div>
                                <a href="#food-menu" className="btn123">Browse Our food</a>
                            </div>
                            <div className="about-img">
                                <img src={aboutimage1} alt="" />
                            </div>
                        </div>

                        <div className="speciality">
                            <h1 className="title-text"> <i className="fas fa-bullhorn"></i>Our Peculiarity</h1>
                            <div className="speciality-content">
                                <div className="speciality-img"><img src={aboutphotowithoutbg} alt="" /></div>
                                <div className="speciality-text">
                                    <h1>The Best Trusted Farms For You</h1>
                                    <p className="sm-font gray-text">Organic food is food produced by methods that comply with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources.</p>
                                    <h3 className="md-font"> <i className="fas fa-leaf"></i> Natural Process</h3>
                                    <p className="sm-font gray-text">Organic food is food produced by methods that comply with the standards of organic farming.</p>
                                    <h3 className="md-font"> <i className="fas fa-leaf"></i> Organic Products</h3>
                                    <p className="sm-font gray-text">Organic food is food produced by methods that comply with the standards of organic farming.</p>
                                    <h3 className="md-font"> <i className="fas fa-leaf"></i> Homegrown Goodness</h3>
                                    <p className="sm-font gray-text">Organic food is food produced by methods that comply with the standards of organic farming.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="food">
                    <h2 className="foodh2">What we have offer</h2>
                    <div className="food-container container">
                        <div className="food-type fruit" id="fruit">
                            <div className="img-container">
                                <img className='' src={food1} alt="i1" />
                                <div className="img-content">
                                    <h3>fruit</h3>
                                    <a href="https://en.wikipedia.org/wiki/Fruit" className="btn123 btn1123" target="_">learn more</a>
                                </div>
                            </div>
                            <div className="text-container">
                                <p>Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids. Eating a diet high in fruits can reduce a person's risk of developing heart disease, cancer, inflammation, and diabetes.
                </p>
                                <Link to="/fruit" className='btn123 btn1123 food-link'>SHOP NOW</Link>
                            </div>
                        </div>
                        <div className="food-type vegetables">
                            <div className="img-container">
                                <img src={food2} alt="i2" />
                                <div className="img-content">
                                    <h3>vegetable</h3>
                                    <a href="https://en.wikipedia.org/wiki/Vegetable" className="btn123 btn1123" target="_">learn more</a>
                                </div>
                            </div>
                            <div className="text-container">
                                <p>Vegetable refers to the edible parts of plants, which are usually their leaves, roots, fruits, or seeds.Vegetables are full of essential vitamins, minerals, and antioxidants that provide many important health benefits to your body. For instance, carrots are known for being very high in vitamin A, which plays an important role in eye health, as you grow older.
                </p>
                                <Link to="/vegetable" className='btn123 btn1123 food-link'>SHOP NOW</Link>
                            </div>
                        </div>
                        <div className="food-type grain">
                            <div className="img-container">
                                <img src={food4} alt="i3" />
                                <div className="img-content">
                                    <h3>Dry Fruits</h3>
                                    <a href="https://en.wikipedia.org/wiki/Grain" className="btn123 btn1123" target="_">learn more</a>
                                </div>
                            </div>
                            <div className="text-container">
                                <p>Dry fruits are rich in minerals, proteins, fibre and vitamins add to that they are tasty and delicious too. Dry fruits are excellent and healthy substitute for daily snacks. Consumption of dry fruits enhances energy and stamina; also as they are rich in fibre which means better digestion and overall health. Nuts are great source of protein and iron especially if you are a vegetarian.
                </p>
                                <Link to="/dryfruit" className='btn123 btn1123 food-link'>SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="food-menu">
                    <h2 className="head">Top Item</h2>
                    <div className="food-menu-container container">
                        <div className="food-menu-item">
                            <div className="food-image">
                                <img src={foodmenu1} alt="" />
                            </div>
                            <div className="food-description">
                                <h2>Veggie Combo!!</h2>
                                <p>Get 1kg of your daily essentials (Cabbage, Green peas, Potato)</p>
                                <p className="food-price">price: &#8377;199</p>
                                <Link to='/vegetable'><button className='btn123 btn1123'>Buy Now</button></Link>
                            </div>
                        </div>
                        <div className="food-menu-item">
                            <div className="food-image">
                                <img src={foodmenu2} alt="" />
                            </div>
                            <div className="food-description">
                                <h2>Salad Combo!!</h2>
                                <p>Make your day healthy with a bowl of Salad (Beetroot, Carrot, Cucumber)</p>
                                <p className="food-price">price: &#8377;399</p>
                                <Link to='/vegetable'><button className='btn123 btn1123'>Buy Now</button></Link>
                            </div>
                        </div>
                        <div className="food-menu-item">
                            <div className="food-image">
                                <img src={foodmenu3} alt="" />
                            </div>
                            <div className="food-description">
                                <h2>Breakfast Fruits!!</h2>
                                <p>Start your day with a bite of Apple, Orange, banana</p>
                                <p className="food-price">price: &#8377;175</p>
                                <Link to='/fruit'><button className='btn123 btn1123'>Buy Now</button></Link>
                            </div>
                        </div>
                        <div className="food-menu-item">
                            <div className="food-image">
                                <img src={foodmenu4} alt="" />
                            </div>
                            <div className="food-description">
                                <h2>Guest Special!!</h2>
                                <p>Serve your guest a fresh dish of Strawberies, Pineapple, Cheery, Grapes</p>
                                <p className="food-price">price: &#8377;299</p>
                                <Link to='/fruit'><button className='btn123 btn1123'>Buy Now</button></Link>
                            </div>
                        </div>
                        <div className="food-menu-item">
                            <div className="food-image">
                                <img src={foodmenu5} alt="" />
                            </div>
                            <div className="food-description">
                                <h2>Daily Doze!!</h2>
                                <p>Get youself a daily doze of Almond, Cashewnuts, Dry grapes</p>
                                <p className="food-price">price: &#8377;599</p>
                                <Link to='/dryfruit'><button className='btn123 btn1123'>Buy Now</button></Link>
                            </div>
                        </div>
                        <div className="food-menu-item">
                            <div className="food-image">
                                <img src={foodmenu6} alt="" />
                            </div>
                            <div className="food-description">
                                <h2>Special Dry Fruit Combo!!</h2>
                                <p>Get a load of Pistachios, Fig and Dry-apricot at such an amazing prize.</p>
                                <p className="food-price">price: &#8377;499</p>
                                <Link to='/dryfruit'><button className='btn123 btn1123'>Buy Now</button></Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="testimonial">
                    <div className="container">
                        <h2>what our customers say</h2>
                        <div className="t-container">
                            <div className="t-box">
                                <div className="t-box-text">
                                    <div className="star">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                    </div>
                                    <p>It was A great experience from shopping with <b>OUR FOOD</b> the quality was great and i was happy with the services.</p>

                                    <p className="cname">Rahul Mehra</p>
                                </div>
                                <img src={male1} alt="" />
                            </div>
                            <div className="t-box">
                                <div className="t-box-text t-middle-text">
                                    <div className="star">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                    </div>
                                    <p>Own Food is doing a great job by providing such fresh and healthy food with different varities at such reonable prices and many more.</p>

                                    <p className="cname">Kunal Sharma</p>
                                </div>
                                <img src={male2} alt="" />
                            </div>
                            <div className="t-box">
                                <div className="t-box-text">
                                    <div className="star">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                    </div>
                                    <p>No doubt that the food was great and fresh with delivery on time, but i would love to have more varities and more options.</p>

                                    <p className="cname">Rohit Gupta</p>
                                </div>
                                <img src={male3} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact">
                    <div className="contact-container container">
                        <div className="contact-img">
                            <img src={restrauntimage} className="contact-img1" alt="" />
                        </div>
                        <div className="contact-form">
                            <form action="" onSubmit={this.sendemail}>
                                <h2>contact us</h2>
                                <input type="text" placeholder="Name" name="from_name" /><br />
                                <input type="email" placeholder="Email" name="email_id" /><br />
                                <textarea name="message" id="" cols="30" rows="5" placeholder="Type Your Text Here" ></textarea><br />
                                <button className="btn123 btn1123">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}
export default withRouter(Home);