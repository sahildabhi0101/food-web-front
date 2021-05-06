import React, { Component } from 'react';
import '../login page/Login.css'
import { signup } from '../auth'
import { Link } from 'react-router-dom'
import '../login page/hom1/style.css'
import {Nav} from "../core/nav"
import foodlogologin from '../login page/food-logo.jpg'
class Signup extends Component {

    constructor() {
        super()
        this.state =
        {
            name: "",
            email: "",
            password: "",
            error: "",
            open: false
        }
    }
    // aa function ma je change kariye e event ma assign thay che etle event lakhvu pade
    handlechange = (name) => event => {
        this.setState({ error: "" })
        this.setState({ [name]: event.target.value })
    };


    clicksubmit = event => {
        event.preventDefault();
        const { name, email, password } = this.state;
        const user = { name, email, password };
        // console.log(user);
        signup(user).then(data => {
            if (data.error)
                this.setState({ error: data.error });
            else
                this.setState({
                    error: "",
                    name: "",
                    email: "",
                    password: "",
                    open: true
                });
        });
    };

    signupform = (name, email, password) =>
    (

        <div className="">
            <div className="formContent">
                <form>
                    <div className="form-group">
                        <input onChange={this.handlechange("name")} type="text" className="form-control ept" id="name" placeholder="name" value={name} />

                    </div>
                    <div className="form-group">
                        <input onChange={this.handlechange("email")} type="email" className="form-control ept" id="login" placeholder="Login-ID" value={email} />
                    </div>
                    <div className="form-group">
                        <input onChange={this.handlechange("password")} type="password" id="password" className="form-control ept" placeholder="Password"
                            value={password} />
                    </div>
                    <button onClick={this.clicksubmit} className="login-btn" type="submit">SIGN UP</button>
                    <div id="formFooter"><Link to="/signin"  className="alreadyhaveaccount">Already have an ACCOUNT?</Link></div>
                </form>
            </div>
        </div>
    )

    render() {
        const { name, email, password, error, open } = this.state
        return (

            <div className="position">

                <Nav/>

                <div className="formContent formContent1 ">
                    <img className="logo" src={foodlogologin} alt="food" /><br />
                    <h2 className="loginnameh2"> SIGN UP </h2>

                    <div className="alert alert-danger big-font-1" style={{ display: error ? "" : "none" }}>
                        {error}
                    </div>

                    <div className="alert alert-info big-font-1" style={{ display: open ? "" : "none" }}>
                        New account has successfully created.please {" "} <Link to="/signin">sign in</Link>.
                    </div>

                    {this.signupform(name, email, password)}
                </div>
            </div>
        );
    }
}

export default Signup;