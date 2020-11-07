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
import { SortFunction } from '../../Redux';
import { AttributeFunction } from '../../Redux';

const User_service = new userService();

export default function Dashbord(props) {

    const BookName = useSelector(state => state.currentBookName)
    const value = useSelector(state => state.Sortvalue)
    const attributevalue = useSelector(state => state.attributevalue)

    console.log(BookName);

    const dispatch = useDispatch();

    let history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorE2, setAnchorE2] = React.useState(null);
    const [notes, setNotes] = useState([]);


    const handleBook = () => {
        
        history.push("/HomeBook");
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClick2 = (event) => {
        setAnchorE2(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClose2 = () => {
        setAnchorE2(null);
    };
    // const handleValue = (value) => {
    //     console.log(value);
    //     setvalue(value);
    // };

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
                    <div className="Attribute">
                        <Button className="AttributeButton" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}>
                            {attributevalue}
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorE2}
                            keepMounted
                            open={Boolean(anchorE2)}
                            onClose={handleClose2}
                        >
                            <MenuItem onClick={()=> dispatch(AttributeFunction('BOOK NAME') ,handleClose2())}>BOOK NAME</MenuItem>
                            <MenuItem onClick={()=> dispatch(AttributeFunction('PRICE') ,handleClose2())}>PRICE</MenuItem>
                            <MenuItem onClick={()=> dispatch(AttributeFunction('AUTHOR NAME') ,handleClose2())}>AUTHOR NAME</MenuItem>
                            </Menu>
                    </div>
                    <div className="Sort">
                        <Button className="SortButton" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            
                            {value}
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={()=> dispatch(SortFunction('Low To High') ,handleClose())}>Low To High</MenuItem>
                            <MenuItem onClick={()=> dispatch(SortFunction('High To Low') ,handleClose())}>High To Low</MenuItem>
                            <MenuItem onClick={()=> dispatch(SortFunction('Newest Arrive') ,handleClose())}>Newest Arrive</MenuItem>
                            <MenuItem onClick={()=> dispatch(SortFunction('Oldest Arrive') ,handleClose())}>Oldest Arrive</MenuItem>
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