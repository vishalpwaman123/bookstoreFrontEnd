import React from 'react'
import '../Registration/UserRegistration.scss'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import { loginToggleStatus } from '../../Redux';
import { signupToggleStatus } from '../../Redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Signlogo from '../../Assert/RegistrationLogo.png'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import userService from '../../Services/userService';

const User_service = new userService();

const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i);
const Name = RegExp(/^[a-z]$/i);
const MobileInput = RegExp(/^[0-9]{10}$/i);



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


class UserRegistration extends React.Component {

    constructor() {
        super();
        this.state = {
            open: false,
            EmailId: null,
            Password: null,
            FirstName: null,
            LastName: null,
            AdminName: null,
            MobileNumber: null,
            value: 'user',

            errors: {
                FirstName: '',
                LastName: '',
                AdminName: '',
                EmailId: '',
                Password: '',
                FullName: '',
                MobileNumber: '',
                value: ''
            },
        }
    }

    handleClickSignIn = (event) => {

        event.preventDefault();
        let errors = this.state.errors;
        const { name, value } = event.target;

        if (this.state.EmailId === null) {
            errors.EmailId = "First Name Required";
        }

        if (this.state.Password === null) {
            errors.Password = "First Name Required";
        }

        switch (name) {
            case "email":
                errors.EmailId = validEmailRegex.test(value) ? "" : "Email Id not valid";
                break;
            case "password":
                errors.Password = value.length < 8 ? "Password Not valid" : "";
                break;
            default:
                break;
        }



        if( this.state.value == 'user') {

            const user = {

                EmailId: this.state.EmailId,
                Password: this.state.Password,
    
            };

            console.log("User Sign In", user);

        User_service.UserSignIn(user)
            .then(data => {
                console.log("User Login Data :", data);
                localStorage.setItem('token', data.data.data.token);
                this.setState({ open: true })
                this.props.history.push('/dashboard');

            })
            .catch(error => {
                console.log(error);
            })

        }else
        {
            const user = {

                email: this.state.EmailId,
                password: this.state.Password,
    
            };

            console.log("Admin Sign In", user);

            User_service.AdminSignIn(user)
            .then(data => {
                console.log("Admin Login Data :", data);
                localStorage.setItem('token', data.data.data.token);
                this.setState({ open: true })
                this.props.history.push('/dashboard');

            })
            .catch(error => {
                console.log(error);
            })

        }
        // this.setState({ open: true })
    };


    handleClickSignUp = (event) => {

        console.log("Flag ");


        event.preventDefault();
        let errors = this.state.errors;
        const { name, value } = event.target;

        console.log("Flag 0");

        if (this.state.EmailId === null) {
            errors.EmailId = "Email Id Required";
        }

        if (this.state.Password === null) {
            errors.Password = "Password Required";
        }

        if (this.state.MobileNumber === null) {
            errors.MobileNumber = "Mobile Number Required";
        }

        console.log("Flag 1");

        switch (name) {
            case "email":
                errors.EmailId = validEmailRegex.test(value) ? "" : "Email Id not valid";
                break;
            case "password":
                errors.Password = value.length < 8 ? "Password Not valid" : "";
                break;
            case "mobileNumber":
                errors.MobileNumber = !MobileInput.test(value) ? "Mobile Number Not valid" : "";
                break;
            default:
                break;
        }

        console.log("Flag 2");

        if (this.state.value == 'user') {

            if (this.state.FirstName === null) {
                errors.FirstName = "First Name Required";
            }

            if (this.state.LastName === null) {
                errors.LastName = "Last Name Required";
            }

            switch (name) {
                case "firstName":
                    errors.FirstName = /*!Name.test(value) &&*/ value.length < 3 ? "First Name not valid" : "";
                    break;
                case "lastName":
                    errors.LastName = /*!Name.test(value) &&*/ value.length < 3 ? "Last Name Not valid" : "";
                    break;
                default:
                    break;
            }

            const user = {

                emailId: this.state.EmailId,
                password: this.state.Password,
                firstName: this.state.FirstName,
                lastName: this.state.LastName,
                phoneNumber: this.state.MobileNumber,
            };

            console.log("User Registration Data :", user);

            User_service.UsersRegistration(user)
                .then(data => {

                    console.log("User Response Data :", data);
                    this.setState({ open: true })
                    this.props.history.push('/');

                })
                .catch(error => {
                    console.log(error);
                })

        } else {

            if (this.state.AdminName === null) {

                errors.AdminName = "Admin Required";
            }

            switch (name) {
                case "adminName":
                    errors.AdminName = value.length < 3 ? "Admin Name not valid" : "";
                    break;
                default:
                    break;
            }

            const user = {

                adminName : this.state.AdminName,
                adminEmailId: this.state.EmailId,
                password: this.state.Password,
                phoneNumber: this.state.MobileNumber,
            };

            console.log("Admin Registration Data :", user);

            User_service.AdminRegistration(user)
                .then(data => {

                    console.log("User Response Data :", data);
                    this.setState({ open: true })
                    this.props.history.push('/');

                })
                .catch(error => {
                    console.log(error);
                })

        }
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false })
    };

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({ value: event.target.value });
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="MainContainer">
                <div className="cart">
                    <div className="cart1">
                        <img src={Signlogo} className="Signlogo" alt="length" />
                        <div className="OBShoping">ONLINE BOOK SHOPPING</div>
                    </div>
                    <div className="cart2">
                        <div className="title">
                            <div className="Login"
                                onClick={this.props.loginToggleStatu}
                            >LOGIN</div>
                            <div className="SignUp"
                                onClick={this.props.signupToggleStatu}
                            >SIGNUP</div>
                        </div>
                        <div className="Toggle">
                            {this.props.logintoggle ?
                                <div className="loginToggle">
                                    <div className="emailId">EmailId</div>
                                    <InputGroup >
                                        <FormControl
                                            className="EmailIdInput"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                            name="email"
                                            value={this.state.EmailId}
                                            onChange={(e) => { this.setState({ EmailId: e.target.value }) }} />
                                    </InputGroup>
                                    <div className="password">Password</div>
                                    <InputGroup >
                                        <FormControl
                                            className="PasswordInput"
                                            aria-label="Small"
                                            name="password"
                                            value={this.state.Password}
                                            aria-describedby="inputGroup-sizing-sm"
                                            onChange={(e) => { this.setState({ Password: e.target.value }) }} />
                                    </InputGroup>
                                    <div>
                                        <RadioGroup className="RadioButton" aria-label="gender" value={this.state.value} onChange={this.handleChange}>
                                            <FormControlLabel value="user" control={<Radio />} label="User" />
                                            <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                                        </RadioGroup>
                                    </div>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className="LoginButton"
                                        onClick={this.handleClickSignIn}>
                                        Login
                                    </Button>
                                    <div className="ForgetPassword">Forget password</div>
                                    <div className="lines">
                                        <hr className="solid"></hr>
                                        <div className="OR">OR</div>
                                        <hr className="solid"></hr>
                                    </div>
                                    <div className="SocialButton">
                                        <Button variant="contained" color="primary" className="Facebook" >
                                            Facebook
                                        </Button>
                                        <Button
                                            variant="contained"
                                            disabled
                                            color="secondary"
                                            className="Google"
                                        >
                                            Google
                                        </Button>
                                    </div>


                                </div>
                                :
                                <div className="signupToggle">
                                    {this.state.value === 'user' ?
                                        <div className="FullName">
                                            <div className="FName">
                                                <div className="FirstName">First Name</div>
                                                <InputGroup className="">
                                                    <FormControl
                                                        className="FirstNameInput"
                                                        name="firstName"
                                                        aria-label="Medium"
                                                        aria-describedby="inputGroup-sizing-sm"
                                                        onChange={(e) => { this.setState({ FirstName: e.target.value }) }} />
                                                </InputGroup>
                                            </div>
                                            <div className="LName">
                                                <div className="LastName">Last Name</div>
                                                <InputGroup className="">
                                                    <FormControl
                                                        className="LastNameInput"
                                                        name="lastName"
                                                        aria-label="Medium"
                                                        aria-describedby="inputGroup-sizing-sm"
                                                        onChange={(e) => { this.setState({ LastName: e.target.value }) }} />
                                                </InputGroup>
                                            </div>
                                        </div>
                                        :
                                        <div className="Admin">
                                            <div className="AdminName">Admin Name</div>
                                            <InputGroup className="">
                                                <FormControl
                                                    className="AdminNameInput"
                                                    name="adminName"
                                                    aria-label="Medium"
                                                    aria-describedby="inputGroup-sizing-sm"
                                                    onChange={(e) => { this.setState({ AdminName: e.target.value }) }} />
                                            </InputGroup>
                                        </div>
                                    }
                                    <div className="EmailId">EmailId</div>
                                    <InputGroup className="">
                                        <FormControl
                                            className="EmailIdInput"
                                            name="email"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                            onChange={(e) => { this.setState({ EmailId: e.target.value }) }} />
                                    </InputGroup>
                                    <div className="Password">Password</div>
                                    <InputGroup className="">
                                        <FormControl
                                            className="PasswordInput"
                                            name="password"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                            onChange={(e) => { this.setState({ Password: e.target.value }) }} />
                                    </InputGroup>
                                    <div className="MobileNumber">Mobile Number</div>
                                    <InputGroup className="">
                                        <FormControl
                                            className="MobileInput"
                                            aria-label="Small"
                                            name="mobileNumber"
                                            aria-describedby="inputGroup-sizing-sm"
                                            onChange={(e) => { this.setState({ MobileNumber: e.target.value }) }} />
                                    </InputGroup>
                                    <div>
                                        <RadioGroup className="RadioButton" aria-label="gender" value={this.state.value} onChange={this.handleChange}>
                                            <FormControlLabel value="user" control={<Radio />} label="User" />
                                            <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                                        </RadioGroup>
                                    </div>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className="SignupButton"
                                        onClick={this.handleClickSignUp}>
                                        Sign Up
                                    </Button>
                                </div>
                            }
                        </div>

                        <div className="Snackbar">

                            <Snackbar
                                open={this.state.open}
                                autoHideDuration={6000}
                                onClose={this.handleClose}>
                                {errors.EmailId.length <= 0 && errors.Password.length <= 0 ?

                                    <Alert onClose={this.handleClose} severity="success">
                                        Login Sucessfully
                                    </Alert>

                                    :
                                    <div>
                                        {errors.EmailId.length > 0 ?
                                            <Alert onClose={this.handleClose} severity="error">
                                                Invalid Email Id Field
                                            </Alert>
                                            :
                                            <Alert onClose={this.handleClose} severity="error">
                                                InValid Password Field
                                            </Alert>
                                        }
                                    </div>
                                }

                            </Snackbar>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state.lengthStatus, state.volumeStatus, state.temperatureStatus, state.lengthColorToggle, state.temperatureColorToggle, state.volumeColorToggle);
    return {
        logintoggle: state.logintoggle,
        signuptoggle: state.signuptoggle
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        loginToggleStatu: function () {
            dispatch(loginToggleStatus());
        },
        signupToggleStatu: function () {
            dispatch(signupToggleStatus());
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserRegistration)