import React from 'react'
import '../Registration/UserRegistration.scss'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import { loginToggleStatus } from '../../Redux';
import { signupToggleStatus } from '../../Redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
//import 'bootstrap/dist/css/bootstrap.min.css';

class UserRegistration extends React.Component {

    render() {
        console.log(this.props.logintoggle, this.props.signuptoggle)
        return (
            <div className="MainContainer">
                <div className="cart">
                    <div className="cart1">

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
                                    <InputGroup size="sm" className="mb-3">
                                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                    <InputGroup >
                                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-3">
                                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-3">
                                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
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