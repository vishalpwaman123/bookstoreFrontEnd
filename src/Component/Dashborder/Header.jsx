import React, { useState } from 'react'
import booklogo from '../../Assert/booklogo.png'
import { PassingFunction } from '../../Redux';
import { PassingWishFunction } from '../../Redux';
import InputGroup from 'react-bootstrap/InputGroup'
import SearchIcon from '@material-ui/icons/Search';
import FormControl from 'react-bootstrap/FormControl';
import {useSelector , useDispatch} from 'react-redux';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ShopIcon from '@material-ui/icons/Shop';
import { useHistory } from "react-router-dom";
import userService from '../../Services/userService';

const User_service = new userService();

export default function Header() {

    const [carts, setCarts] = useState([]);

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

    const handleWish = () => {

        User_service.GetWishList()
        .then(response => {
            console.log(" WishList Result :", response.data.data);
            dispatch(PassingWishFunction(response.data.data));
            history.push("/WishList");
        })
        .catch(error => {
            console.log(error);
        });
        
    }

    const handleOrder = () => {
        
        history.push("/MyOrder");
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
                    onClick={()=>{ handleProfile()}}
                    // onClick={()=> dispatch(PassingFunction(carts) , handleProfile())}
                    />
                <ShoppingCartOutlinedIcon 
                    fontSize="large" 
                    className="CartIcon" 
                    onClick={()=> handleCart()}
                     />
                    
                <BookmarksIcon 
                    fontSize="large" 
                    className="AccountIcon" 
                    onClick={()=>{ handleWish()}} />
                <ShopIcon 
                    fontSize="large" 
                    className="AccountIcon" 
                    onClick={()=>{ handleOrder()}}/>
            </div>
    )
}

