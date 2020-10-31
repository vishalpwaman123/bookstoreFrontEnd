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
import userService from '../../Services/userService';

const User_service = new userService();
//import 'bootstrap/dist/css/bootstrap.min.css';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


class UserRegistration extends React.Component {

    constructor() {
        super();
        this.state = {
            open: false,
            EmailId: '',
            Password: '',
            FullName: '',
            MobileNumber: '',
            
            errors: {
                EmailId: "",
                Password: "",
                FullName: "",
                MobileNumber : "",
            },
        }
    }

    handleClick = (event) => {
        event.preventDefault();
        let errors = this.state.errors;

        if(this.state.EmailId === '') {
            errors.EmailId = "First Name Required";
        }

        if(this.state.Password === '') {
            errors.Password = "First Name Required";
        }

        this.setState({ open: true })
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false })
    };
    render() {
        console.log(this.props.logintoggle, this.props.signuptoggle)
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
                                            onChange={(e) => { this.setState({ EmailId: e.target.value }) }} />
                                    </InputGroup>
                                    <div className="password">Password</div>
                                    <InputGroup >
                                        <FormControl
                                            className="PasswordInput"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                            onChange={(e) => { this.setState({ Password: e.target.value }) }} />
                                    </InputGroup>
                                    <div className="ForgetPassword">Forget password</div>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className="LoginButton"
                                        onClick={this.handleClick}>
                                        Login
                                    </Button>
                                    <div className="lines">
                                        <hr class="solid"></hr>
                                        <div className="OR">OR</div>
                                        <hr class="solid"></hr>
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
                                    <div className="FullName">FullName</div>
                                    <InputGroup className="">
                                        <FormControl
                                            className="FullNameInput"
                                            aria-label="Medium"
                                            aria-describedby="inputGroup-sizing-sm"
                                            onChange={(e) => { this.setState({ FullName: e.target.value }) }} />
                                    </InputGroup>
                                    <div className="EmailId">EmailId</div>
                                    <InputGroup className="">
                                        <FormControl
                                            className="EmailIdInput"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                            onChange={(e) => { this.setState({ EmailId: e.target.value }) }} />
                                    </InputGroup>
                                    <div className="Password">Password</div>
                                    <InputGroup className="">
                                        <FormControl
                                            className="PasswordInput"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                            onChange={(e) => { this.setState({ Password: e.target.value }) }} />
                                    </InputGroup>
                                    <div className="MobileNumber">Mobile Number</div>
                                    <InputGroup className="">
                                        <FormControl
                                            className="MobileInput"
                                            aria-label="Small"
                                            aria-describedby="inputGroup-sizing-sm"
                                            onChange={(e) => { this.setState({ MobileNumber: e.target.value }) }} />
                                    </InputGroup>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className="SignupButton"
                                        onClick={this.handleClick}>
                                        Login
                                    </Button>
                                </div>
                            }
                        </div>

                        <div className="Snackbar">
                          
                            <Snackbar 
                                open={this.state.open} 
                                autoHideDuration={6000} 
                                onClose={this.handleClose}>
                                <Alert onClose={this.handleClose} severity="success">
                                    This is a success message!
                                </Alert>
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