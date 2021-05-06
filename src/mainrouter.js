import React from 'react'
import {Redirect, Route , Switch} from 'react-router-dom'
import Home from './core/home'
import signup from './user/signup'
import signin  from './user/signin'
import Profile  from './user/Profile'
// import Users  from './user/users'
import Vegetable from './core/vegetable'
import Dryfruit from './core/dryfruit'
import Fruit from './core/fruit'
import Wishlist  from './core/wishlist'
import EditProfile from './user/editprofile'
import Privateroute from './auth/privateroute'
import ForgotPassword from "./user/ForgotPassword";
import ResetPassword from "./user/ResetPassword";
import AddToCart from "./core/addtocart"

const mainrouter = () =>
(
    <div>
        {/* <menu /> */}
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/reset-password/:resetPasswordToken" component={ResetPassword} />
            <Route exact path="/signup" component={signup} />
            <Route exact path="/signin" component={signin} />
            <Route exact path="/vegetable" component={Vegetable} />
            <Route exact path="/dryfruit" component={Dryfruit} />
            <Route exact path="/fruit" component={Fruit} />
            <Privateroute exact path="/user/:userId" component={Profile} />
            {/* <Privateroute exact path="/user/users/:userId" component={Users} /> */}
            <Privateroute exact path="/user/wishlist/:userId" component={Wishlist} />
            <Privateroute exact path="/user/addtocart/:userId" component={AddToCart} />
            <Privateroute exact path="/user/edit/:userId" component={EditProfile} />
            <Redirect to='/' />
        </Switch>
    </div>
)

export default mainrouter;