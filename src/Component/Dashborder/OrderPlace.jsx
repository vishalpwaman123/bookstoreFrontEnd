import React from 'react'
import './OrderPlace.scss'
import booklogo from '../../Assert/booklogo.png'
//import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import InputGroup from 'react-bootstrap/InputGroup'
import SearchIcon from '@material-ui/icons/Search';
import FormControl from 'react-bootstrap/FormControl';
//import Link from '@material-ui/core/Link';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

export default function OrderPlace() {
    return (
        <div className="OrderPlaceMainContainer">
            <div className="Header">
                <img src={booklogo} className="Signlogo" alt="length" />
                <div className="Bookstore">Bookstore</div>


                <InputGroup className="searchBar">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1"><SearchIcon fontSize="small" className="SearchIcon" /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        className="search"
                        placeholder="Search..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <PersonOutlineOutlinedIcon fontSize="large" className="AccountIcon" />
                <ShoppingCartOutlinedIcon fontSize="large" className="CartIcon" />
            </div>
            <div className="OrderPlaceBody">
                <div className="Message">Order Placed Successfuly</div>
                <div className="DescriptionMain">
                    <div className="Description">Your order is confirmed</div>
                    <div className="Description">the order id is #123456 save the order id for </div>
                    <div className="Description">further communication </div>
                </div>
                <div className="Detail">
                    <div className="DetailedBar">
                        <div className="DNav1">EmailId</div>
                        <div className="DNav2">Contact Us</div>
                        <div className="DNav3">Address</div>
                    </div>
                    <div className="DetailedTableBar">
                        <div className="DNav11">vishalpwaman123@gmail.com</div>
                        <div className="DNav22">9881563158</div>
                        <div className="DNav33">Kondhwa Hospital</div>
                    </div>
                </div>
            </div>
        </div>
    )
}