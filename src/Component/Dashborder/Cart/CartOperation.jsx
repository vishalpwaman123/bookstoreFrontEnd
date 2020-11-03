import React from 'react'
import './CartOperation.scss'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ContinuesPress } from '../../../Redux';

export default function CartOperation() {

    const dispatch = useDispatch();

    const PlaceOrderKey = useSelector(state => state.PlaceOrderKey);
    const ContinuesKey = useSelector(state => state.ContinuesKey);

    return(
        <div className="Operation">
                { !PlaceOrderKey ?
                    <div className="AdressDetailed">
                        <div class="ADTitle">Address Detail</div>
                    </div>
                :
                    <div className="CustomerDetailed">
                        <div className="CustomerDTitle">
                            <div className="CTitle">Customer Details</div>
                            <div className="AddAddressButton">
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    className="AddAddressButton">
                                    Add New Address
                                </Button>
                            </div>
                        </div>
                        <div className="F_M_Input">
                            <div className="FullName">
                                <div className="FTitle">Full Name</div>
                                <div className="FInput">
                                    <TextField id="outlined-basic" className="FInput" variant="outlined" />
                                </div>
                            </div>
                            <div className="MobileNumber">
                                <div className="MTitle">Mobile Number</div>
                                <div className="MInput">
                                    <TextField id="outlined-basic" className="MInput" variant="outlined" />
                                </div>
                            </div>
                        </div>
                        <div className="Work">
                            <div className="WorkTitle">1. WORK</div>
                            <div className="Address">
                                <div className="ATile">Address</div>
                                <div className="AInput">
                                    <TextField
                                        id="filled-multiline-static"
                                        multiline
                                        rows={4}
                                        className="AInput"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="C_S_Input">
                            <div className="city">
                                <div className="CTitle">City/Town</div>
                                <div className="CInput">
                                    <TextField
                                        id="outlined-textarea"
                                        className="CInput"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                            <div className="State">
                                <div className="STitle">State</div>
                                <div className="SInput">
                                    <TextField
                                        id="outlined-textarea"
                                        className="SInput"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="Home">
                            <div>
                                <div className="HTitle">2. Home</div>
                                <div className="HAddress">
                                    <div className="AddressTitle">Address</div>
                                    <div className="AText"></div>
                                </div>
                            </div>

                        </div>
                        <div className="ContinueButton">
                            <Button variant="contained" color="primary" className="ContinueButton">
                                CONTINUE
                                </Button>
                        </div>
                    </div>
                    }
                    <div className="OrderSum">
                        { !ContinuesKey ?
                        <div className="OrderSummery1">
                            <div className="OrderSTitle">Order Summery</div>
                        </div>
                        :
                        <div className="OrderOpen">
                            <div className="OrderSTitle">Order Summery</div>
                            <div className="BookDetails">
                                <div className="BookImage"></div>
                                <div className="BookDetail">
                                    <div className="BookName"></div>
                                    <div className="AuthorName"></div>
                                    <div className="Price"></div>
                                </div>
                            </div>
                            <div className="CheckOutButton">
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    className="ContinueButton"
                                    onClick={() => dispatch(ContinuesPress())}>
                                CHECKOUT
                                </Button>
                            </div>
                        </div>
                        }
                    </div>
                </div>
    );

}