import React, { Component } from 'react';
import { Link , Redirect } from 'react-router-dom'
import '../login page/Login.css'
import foodlogologin from '../login page/food-logo.jpg'
import {signin , authenticate } from '../auth'
import {Nav} from "../core/nav"
class Signin extends Component {

    constructor() {
        super()
        this.state =
        {
            email: "",
            password: "",
            error: "",
            redirecttorefer: false,
            loading: false
        }
    }
    // aa function ma je change kariye e event ma assign thay che etle event lakhvu pade
    handlechange = (name) => event => {
        this.setState({ error: "" })
        this.setState({ [name]: event.target.value })
    };

    clicksubmit = event => {
        event.preventDefault();
        this.setState({ loading: true })
        const { email, password } = this.state;
        const user = { email, password };
        //console.log(user);
        signin(user).then(data => {
            if (data.error)
                this.setState({ error: data.error, loading: false });
            else {
                authenticate(data, () => {
                    this.setState({ redirecttorefer: true })
                })
            }
        });
    };

    signinform = (email, password) =>
    (
        <div>
            <div className="formContent">
                <form>
                    <div className="form-group">
                        <input onChange={this.handlechange("email")} type="email" className="form-control ept" id="login" placeholder="Login-ID" value={email} />
                    </div>
                    <div className="form-group">
                        <input onChange={this.handlechange("password")} type="password" id="password" className="form-control ept" placeholder="Password"
                            value={password} />
                    </div>
                    <button onClick={this.clicksubmit} className="login-btn" type="submit">Log In</button>
                    <div id="formFooter">
                        <Link to="/forgot-password" className="forgotpassword">Forgot Password?</Link>
                    </div>
                    <Link className="alreadyhaveaccount" to="./signup" >Don't have an account?</Link>
                </form>
            </div>
        </div>
    )

    render() 
    {
        const { email, password, error, redirecttorefer, loading } = this.state

        if (redirecttorefer)
            return <Redirect to="/" />
        return (

            <div className="position">
                
                <Nav/>

                <div className="formContent">
                    <img className="logo" src={foodlogologin} alt="food" /><br />
                    <h2 className="loginnameh2"> LOGIN </h2>

                    <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                        {error}
                    </div>

                    {loading ? (<div className=" text-center">
                        <h2 className="loginnameh2">Loading....</h2>
                    </div>)
                        : ("")
                    }

                    {this.signinform(email, password)}
                </div>
            </div>
        );
    }
}

export default Signin;