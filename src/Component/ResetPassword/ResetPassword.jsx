import React from 'react'
import './ResetPassword.scss'
import FormControl from 'react-bootstrap/FormControl'
import booklogo from '../../Assert/booklogo.png'
import Button from '@material-ui/core/Button';

export default function ResetPassword() {

    return (
        <div className="ResetPasswordMainCointainer">
            <div className="Header">
                    <img src={booklogo} className="Signlogo" alt="length" />
                    <div className="Bookstore">Bookstore</div>
                </div>
                <div className="ForgetBody">
                    <div className="ForgetTitle">Reset Password</div>
                    <div className="Container">
                        <div className="InnerContainer">
                        <div className="Password">Password</div>
                            <FormControl
                                className="searchEmailInput"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                            <div className="CPassword">Confirm Password</div>
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
                            <div className="CreateAccountTitle"></div>
                        </div>
                    </div>
                </div>
        </div>
    )
}