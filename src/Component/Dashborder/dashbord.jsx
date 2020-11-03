import React, { useEffect, useState } from 'react'
import './dashbord.scss'
import userService from '../../Services/userService';
import Header from './Header'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from "react-router-dom";
import {useSelector , useDispatch} from 'react-redux';
import { bookNameFunction } from '../../Redux';

// import 'bootstrap/dist/css/bootstrap.min.css';

const User_service = new userService();

export default function Dashbord(props) {

    const BookName = useSelector(state => state.currentBookName)

    console.log(BookName);

    const dispatch = useDispatch();

    let history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [notes, setNotes] = useState([]);


    const handleBook = () => {
        
        history.push("/HomeBook");
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        
        User_service.GetBooks()
            .then(response => {
                console.log("Result :", response.data.data);
                setNotes(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });

    }, []);

    const Books = notes.map(note =>
        <div className="getBooks" onClick={()=> dispatch(bookNameFunction(note.bookName) , handleBook())}>
            <div className="imageZone">
                <img className="imageLink" alt="Qries" src={note.imageLink} />
            </div>
            <div className="bookName">{note.bookName}</div>
            <div className="authorName">by {note.authorName}</div>
            <div className="conversionType1">{note.description}</div>
            <div className="price">Rs. {note.price}</div>
        </div>
    )

    return (
        <div className="mainDashContainer">
            <Header classname="" />
            <div className="DashBody">
                <div className="Middle">
                    <div className="Books">Books</div>
                    <div className="Sort">
                        <Button className="SortButton" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            Sort by relevence
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Price : Low To High</MenuItem>
                            <MenuItem onClick={handleClose}>Price : High To Low</MenuItem>
                            <MenuItem onClick={handleClose}>Newest Arrive</MenuItem>
                        </Menu>
                    </div>
                </div>
                <div className="dashBoardBody">
                    {Books}
                </div>
            </div>
        </div>
    )
}

// const mapDispatchToProps = (dispatch) => {

//     return {

//         bookNFunction: function (bookName) {
//             console.log(bookName)
//             dispatch(bookNameFunction());
//         },
//     }
// }


// export default connect(mapDispatchToProps)(Dashbord)