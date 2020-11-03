import React from 'react'
import './WishList.scss'
import Header from './Header/Header1'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useDispatch, useSelector } from 'react-redux';


export default function WishList() {

    const dispatch = useDispatch();
    const ArrayList = useSelector(state => state.ArrayList);
    console.log("WishList Component Data :", ArrayList);


    const Books = ArrayList.map(note =>
        <div className="WishlistList">
            <div className="WListBound">
                <div className="BookImage"><img className="SubBookImage" alt="Qries" src={note.bookDetail.imageLink} /></div>
                <div className="BookDetail">
                    <div className="BookName">{note.bookDetail.bookName}</div>
                    <div className="Author">by {note.bookDetail.authorName}</div>
                    <div className="Price">Rs. {note.bookDetail.price}</div>
                </div>
            </div>
        </div>

    )

    return (
        <div className="wishListMainCointainer">
            <Header />
            <div className="homeBookBody">
                <div className="breadcrumbs">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" href="/" className="Link1">
                            Home
                            </Link>
                        <Link color="inherit" href="/" className="Link2">
                            My WishList
                            </Link>
                    </Breadcrumbs>
                </div>
                <div className="WishBody">
                    <div className="MyWishlist">
                        <div className="WishTitle">My Wishlist</div>
                    </div>
                    <div className="List">
                        {Books}
                    </div>
                </div>
            </div>
        </div>
    )
}

