import React from 'react'
import booklogo from '../../Assert/booklogo.png'

import InputGroup from 'react-bootstrap/InputGroup'
import SearchIcon from '@material-ui/icons/Search';
import FormControl from 'react-bootstrap/FormControl';

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

export default function Header() {
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

                <PersonOutlineOutlinedIcon fontSize="large" className="AccountIcon" />
                <ShoppingCartOutlinedIcon fontSize="large" className="CartIcon" />
            </div>
    )
}
