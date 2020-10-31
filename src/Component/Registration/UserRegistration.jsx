import React from 'react'
import '../Registration/UserRegistration.scss'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import { loginToggleStatus } from '../../Redux';
import { signupToggleStatus } from '../../Redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Signlogo from '../../Assert/RegistrationLogo.png'
//import 'bootstrap/dist/css/bootstrap.min.css';

class UserRegistration extends React.Component {

    render() {
        console.log(this.props.logintoggle, this.props.signuptoggle)
        return (
            <div className="MainContainer">
                <div className="cart">
                    <div className="cart1">
                    <img src={Signlogo} className="Signlogo" alt="length"/>
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
                                        <FormControl className="EmailIdInput" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                    <div className="password">Password</div>
                                    <InputGroup >
                                        <FormControl className="PasswordInput" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                    <div className="ForgetPassword">Forget password</div>
                                    <Button variant="contained" color="secondary" className="LoginButton">
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
                                    <InputGroup  className="">
                                        <FormControl className="FullNameInput" aria-label="Medium" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                    <div className="EmailId">EmailId</div>
                                    <InputGroup className="">
                                        <FormControl className="EmailIdInput" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                    <div className="Password">Password</div>
                                    <InputGroup  className="">
                                        <FormControl className="PasswordInput" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                    <div className="MobileNumber">Mobile Number</div>
                                    <InputGroup className="">
                                        <FormControl className="MobileInput" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                    <Button variant="contained" color="secondary" className="SignupButton" >
                                        Login
                                    </Button>
                                </div>
                            }
                        </div>

                        <div className="RegisterInput">

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