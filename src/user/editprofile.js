import React, { Component } from 'react';
import '../login page/Login.css'
import { isauthenticated } from '../auth';
import '../login page/hom1/Dry-Fruit.css'
import { Link } from 'react-router-dom';
import { read, update, updateuserhomepage  } from './apiuser';
import { Redirect } from 'react-router-dom';
import defaultprofile1 from './default-image.jpeg'

class EditProfile extends Component {

    constructor() {
        super()
        this.state =
        {
            id: "",
            name: "",
            email: "",
            password: "",
            redirecttoprofile: false,
            error:"",
            filesize: 0,
            loading:false,
            address: "",
            gender:"",
            dob:""
        }
    }

    init = (userId) => {
        const token = isauthenticated().token
        read(userId, token)
            .then(data => {
                if (data.error)
                    this.setState({ redirecttoprofile: true })
                else
                    this.setState({
                        id: data._id, name: data.name, email: data.email, error: '' , address: data.address,
                        gender:data.gender,
                        dob:data.dob
                    });
            });
    };

    componentDidMount() {
        this.userData = new FormData()
        const userId = this.props.match.params.userId
        this.init(userId)
    }

    isvalid = () => {
        const { name, email, password , filesize } = this.state
        if (filesize > 200000) {
            this.setState({ error: "upload image which is less than 2-mb " });
            return false;
        }
        if (name.length === 0) {
            this.setState({ error: "name is required" , loading: false });
            return false;
        }
        if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i.test(email)) 
        {
            this.setState({ error: "email is not valid please enter valid email" , loading: false });
            return false;
        }
        if (password.length >= 1 && password.length <= 5) {
            this.setState({ error: "minimum length of password is 6 . so enter big password" , loading: false });
            return false;
        }
        return true;
    }

    handlechange = (name) => event => {
        this.setState({error: ""})
        const value = name === 'photo' ? event.target.files[0] : event.target.value
        
        const filesize =  name === 'photo' ? event.target.files[0].size : 0 ;
        this.userData.set(name,value);
        this.setState({ [name]: value , filesize });
    };


    clicksubmit = event => {
        event.preventDefault();
        this.setState({loading: true});
        if (this.isvalid()) {
            const userId = this.props.match.params.userId;
            const token = isauthenticated().token;
            update(userId, token, this.userData).then(data => 
            {
                // console.log(data);
                if (data.error) this.setState({ error: data.error });
                else            updateuserhomepage( data, () => { this.setState({redirecttoprofile: true }); } );
            });
        }
    };

    signupform = (name, email, password ,address,dob) =>
    (
        <div className="container position">
            <div className="formContent">
                <form  >
                    <div className="form-group">
                        <label className="text-muted" style={{textAlign:'center', display:'block',fontSize:'15px'}}>change Profile photo</label>
                        <input onChange={this.handlechange("photo")} type="file" accept="image/*" className="form-control ept"/>
                    </div>

                    <div className="form-group">
                        <input onChange={this.handlechange("name")} type="text" className="form-control ept" id="name" placeholder="name" value={name} />
                    </div>

                    <div className="form-group">
                        <input onChange={this.handlechange("email")} type="email" className="form-control ept" id="login" placeholder="Login-ID" value={email} />
                    </div>
                    
                    <div className="form-group">
                        <textarea onChange={this.handlechange("address")} type="text" className="form-control ept" placeholder="address" value={address} />
                    </div>
                    <div className="form-group">
                    <fieldset className="FieldSet ept">
                        Gender:
                        <input type='radio'  onClick={this.handlechange("gender")}  value='male' className="edit-img-profile" name='gender' />Male
                        <input type='radio' onClick={this.handlechange("gender")}  value='female' className="edit-img-profile" name='gender'/>Female
                    </fieldset>
                    </div>
                    <div className="form-group">
                    <fieldset style={{border:'2px solid black',margin:'0px 5px'}}>
                        <legend>Date Of Birth</legend>
                        <input type='date' onChange={this.handlechange("dob")} value={dob} className="ept DOB-Field" placeholder="Date Of Birth" />
                        </fieldset>
                    </div>

                    <div className="form-group">
                        <input onChange={this.handlechange("password")} type="password" id="password" className="form-control ept" placeholder="Password"
                            value={password} />
                    </div>
                    
                    <button onClick={this.clicksubmit} className="edit-btn1" type="submit">UPDATE</button>
                </form>
            </div>
        </div>
    )


    render() {
        const { id, name, email, password, redirecttoprofile, error , loading , address,gender,dob} = this.state;

        if (redirecttoprofile)
            return <Redirect to={`/user/${id}`} />;

        const photourl = id ? `${process.env.REACT_APP_API_URL}/users/photo/${id}?${new Date().getTime()}` : defaultprofile1

        return (
            <div className="container">
                 <button className="wbtn123 wbtn1123 wishlistb "><Link to='/'>BACK TO HOME</Link></button>
                 <h1 className="wishlist0 ">EDIT PROFILE</h1>
                <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                    {error}
                </div>

                {loading ? (<div className=" text-center">
                        <h2 className="loginnameh2">Loading....</h2>
                    </div>)
                        : ("")
                }
                <div className="newimageedit">
                   
                <img style={{height: "200px", width: "auto"}}
                    className="img-thumbnail" src={photourl} alt={name}/>
               
                </div>
                {this.signupform(name, email, password, address,gender,dob,photourl)}
            </div>
        );
    }
}

export default EditProfile;