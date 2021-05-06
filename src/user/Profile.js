import React, { Component } from 'react';
import { isauthenticated } from '../auth'
import { Redirect, Link } from 'react-router-dom'
import { read } from './apiuser'
import "../user/profile.css"
import '../login page/hom1/style.css'
import {Nav} from "../core/nav"
import Footer from "../core/footer"
import defaultprofile1 from './default-image.jpeg'
class Profile extends Component {

    constructor() {
        super()
        this.state = {
            user: "",
            redirecttosignin: false,
        }
    }

    init = (userId) => {
        const token = isauthenticated().token
        read(userId, token)
            .then(data => {
                if (data.error)
                    this.setState({ redirecttosignin: true })
                else
                    this.setState({ user: data })
            });
    };

    componentDidMount() {
        const userId = this.props.match.params.userId
        this.init(userId)
    }

    render() {
        const { redirecttosignin, user } = this.state
        if (redirecttosignin) return <Redirect to="/signin" />

        const photourl = user._id ?
            `${process.env.REACT_APP_API_URL}/users/photo/${user._id}?${new Date().getTime()}` :
            defaultprofile1

        return (
            <div className="">
                <Nav/>
                <div className="UserPageContainer">
                    <div className="ImageAndName">
                        <img src={photourl} alt={user.name} className="ProfileImage" />
                        <h3 className="UserName">User's Name</h3>
                        <div className="container">
                            <ul className="UserMenu">
                                <Link to={`/user/wishlist/${user._id}`} className="Link">Wish List</Link>
                                <Link to={`/user/addtocart/${user._id}`} className="Link">Your Orders</Link>
                                <Link className=" Link" to={`/user/edit/${user._id}`} >
                                    Edit Profile
                                    </Link>

                            </ul>

                        </div>
                    </div>
                    <div className="UserDetailSection">
                        <h2 className="MainTitle">Your Detail</h2>
                        <div className="UserDetail container">
                            <table>
                                <tbody>
                                <tr className="name DetailBox">
                                    <td className="Title">
                                        <h3>Name </h3>
                                    </td>
                                    <td>
                                        <p className="value"> {user.name}</p>
                                    </td>
                                </tr>
                                <tr className="email DetailBox">
                                    <td className="Title">
                                        <h3>Email</h3>
                                    </td>
                                    <td>
                                        <p className="value">{user.email}</p>
                                    </td>
                                </tr>
                                <tr className="address DetailBox">
                                    <td className="Title">
                                        <h3>Address</h3>
                                    </td>
                                    <td>
                                        <p className="value">{user.address}</p>
                                    </td>
                                </tr>
                                <tr className="gender DetailBox">
                                    <td className="Title">
                                        <h3>Gender</h3>
                                    </td>
                                    <td>
                                        <p className="value"> {user.gender}</p>
                                    </td>
                                </tr>
                                <tr className="Join-Date DetailBox">
                                    <td className="Title">
                                        <h3>Joining Date</h3>
                                    </td>
                                    <td>
                                        <p className="value">{` ${new Date(user.created).toDateString()} `} </p>
                                    </td>
                                </tr>
                                <tr className="DOB DetailBox">
                                    <td className="Title">
                                        <h3>Date of Birth</h3>
                                    </td>
                                    <td>
                                        <p className="value">{` ${new Date(user.dob).toDateString()} `}</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default Profile;