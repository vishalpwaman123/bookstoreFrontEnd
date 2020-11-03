import React from 'react'
import './Header.scss'
import booklogo from '../../../Assert/booklogo.png'
import InputGroup from 'react-bootstrap/InputGroup'
import SearchIcon from '@material-ui/icons/Search';
import FormControl from 'react-bootstrap/FormControl';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useHistory } from "react-router-dom";
import {useSelector , useDispatch} from 'react-redux';
import { PassingFunction } from '../../../Redux';
import { PassingWishFunction } from '../../../Redux';
import userService from '../../../Services/userService';
const User_service = new userService();


export default function Header1() {

    const dispatch = useDispatch();
    let history = useHistory();

    const handleCart = () => {

        User_service.GetCart()
            .then(response => {
                console.log(" Cart Result :", response.data.data);
                dispatch(PassingFunction(response.data.data));
                history.push("/Cart");
            })
            .catch(error => {
                console.log(error);
            });

    }

    const handleProfile = () => {
        
        history.push("/Profile");
    }

    return (

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

            <PersonOutlineOutlinedIcon
                fontSize="large"
                className="AccountIcon"
                onClick={() => handleProfile()}
            />

            <ShoppingCartOutlinedIcon 
                fontSize="large" 
                className="CartIcon" 
                onClick={()=> handleCart()}
                />
        </div>

    )

}