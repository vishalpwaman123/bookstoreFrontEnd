import './forgetPassword.scss'
import React from 'react'
import FormControl from 'react-bootstrap/FormControl'
import booklogo from '../../Assert/booklogo.png'
import Button from '@material-ui/core/Button';

export default class forgetPassword extends React.Component {

    render() {
        return (
            <div className="forgetMainContainer">
                <div className="Header">
                    <img src={booklogo} className="Signlogo" alt="length" />
                    <div className="Bookstore">Bookstore</div>
                </div>
                <div className="ForgetBody">
                    <div className="ForgetTitle">Forget Your Password?</div>
                    <div className="Container">
                        <div className="InnerContainer">
                            <div className="Description">
                                Enter youtr email address and we'll send you a link to reset your password
                             </div>
                            <div className="EmailId">Email Id</div>
                            <FormControl
                                className="searchEmailInput"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                            <Button variant="contained" color="secondary" className="ResetButton">
                                Reset Password
                        </Button>
                        </div>
                        <div className="createAccountField">
                            <div className="CreateAccountTitle">CREATE ACCOUNT</div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}