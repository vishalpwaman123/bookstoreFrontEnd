import React, { useEffect, useState } from 'react'
import CartOperation from '../Dashborder/Cart/CartOperation'
import './Cart.scss'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Header from '../Dashborder/Header';
import { useDispatch, useSelector } from 'react-redux';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { AddQuentity } from '../../Redux';
import { SubQuentity } from '../../Redux';
import { PlaceOrderPress } from '../../Redux';

export default function Cart() {

    const dispatch = useDispatch();

    const ArrayList = useSelector(state => state.ArrayList)
    const quentity = useSelector(state => state.quentity)

    console.log("Cart Component Data :", ArrayList);

    function handleChange(e) {
        console.log(e.target.value);
        this.setState({ quentity: e.target.value });
    }

    const Books = ArrayList.map(note =>
        <div>
        <div className="CartList">
            <div className="CartdetailBorder">
                <div className="MyCart">
                    <div className="TitleMyCart">My Cart</div>
                    <div className="CartDetailed">
                        <div className="BookImage">
                            <img className="BookImage" alt="Qries" src={note.bookDetail.imageLink} />
                        </div>
                        <div className="Detailed">
                            <div className="BookDetailed">
                                <div className="BookName">{note.bookDetail.bookName}</div>
                                <div className="AuthorName">{note.bookDetail.authorName}</div>
                                <div className="Price">Rs. {note.bookDetail.price}</div>
                            </div>
                            <div className="Quentity">

                                <RemoveCircleOutlineIcon
                                    fontSize="large"
                                    className="B1"
                                    onClick={() => dispatch(SubQuentity())} />
                                <TextField id="outlined-basic" value={quentity} onChange={handleChange} className="QuentityInput" variant="outlined" />
                                <AddCircleOutlineIcon
                                    fontSize="large"
                                    className="B2"
                                    onClick={() => dispatch(AddQuentity())} />
                                <div className="Remove">Remove</div>
                            </div>
                            <div className="PlaceOrderButton">
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    className="PlaceOrderButton" 
                                    onClick={() => dispatch(PlaceOrderPress())} >
                                    PLACE ORDER
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        <CartOperation/>
        </div>

    )

    return (
        <div className="cartMainContainer">
            <Header />
            <div className="CartBody">
                <div className="breadcrumbs">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            color="inherit"
                            href="/"
                            className="Link1">
                            Home
                            </Link>
                        <Link color="inherit" href="/" className="Link2">
                            My Cart
                            </Link>
                    </Breadcrumbs>
                </div>

                {Books}
                
                {/* <div className="Operation">
                    <div className="AdressDetailed">
                        <div class="ADTitle">Address Detail</div>
                    </div>
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
                    <div className="OrderSum">
                        <div className="OrderSummery1">
                            <div className="OrderSTitle">Order Summery</div>
                        </div>
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
                                <Button variant="contained" color="primary" className="ContinueButton">
                                CHECKOUT
                                </Button>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    )
}