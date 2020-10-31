import React from 'react'
import './Cart.scss'
import booklogo from '../../Assert/booklogo.png'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import InputGroup from 'react-bootstrap/InputGroup'
import SearchIcon from '@material-ui/icons/Search';
import FormControl from 'react-bootstrap/FormControl';
import Link from '@material-ui/core/Link';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

export default class Cart extends React.Component {

    render() {
        return (
            <div className="cartMainContainer">
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
                <div className="CartBody">
                    <div className="breadcrumbs">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" href="/" className="Link1">
                                Home
                            </Link>
                            <Link color="inherit" href="/" className="Link2">
                                My Cart
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <div className="CartList">
                        <div className="CartdetailBorder">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}