import React, { useEffect, useState } from 'react'
import './HomeBook.scss'
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Header from './Header'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useSelector, useDispatch } from 'react-redux';
import userService from '../../Services/userService';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const User_service = new userService();

export default function HomeBook() {
    const [value, setValue] = React.useState(1);
    const [notes, setNotes] = useState([]);

    const BookName = useSelector(state => state.currentBookName)
    console.log("BookName:", BookName);

    useEffect(() => {

        User_service.GetBooksByName(BookName)
            .then(response => {
                console.log("Result :", response.data.data);
                setNotes(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });

    }, []);


    return (
        <div className="homeBookMainContainer">
            <Header />
            <div className="homeBookBody">
                <div className="breadcrumbs">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" href="/" className="Link1">
                            Home
                            </Link>
                        <Link color="inherit" href="/" className="Link2">
                            Book
                            </Link>
                    </Breadcrumbs>
                </div>
                <div className="BookBody">
                    <div className="BookBody1">
                        <div className="BookImage">
                            <img className="imageLink" alt="Qries" src={notes.imageLink} />
                        </div>
                        <div className="Buttons">
                            <div className="B1">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className="Button1">
                                    ADD TO BAG
                                    </Button>
                            </div>
                            <div className="B2">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="Button2"
                                    startIcon={<FavoriteBorderIcon>send</FavoriteBorderIcon>}>
                                    WISHLIST
                                        </Button>
                            </div>
                        </div>

                    </div>
                    <div className="BookBody2">
                        <div className="BookName">{notes.bookName}</div>
                        <div className="AutherName">by {notes.authorName}</div>
                        <div className="Rating"><div className="Ratenumber">4.5</div><StarOutlinedIcon className="Star" fontSize="small" /></div>
                        <div className="Price">Rs. {notes.price}</div>
                        <div className="Line"></div>
                        <div className="Description">{notes.description}</div>
                        <div className="Line"></div>
                        <div className="CFeedBack"> Customer FeedBack</div>
                        <div className="Subfeedback">
                            <div className="OverallRating">Overall Rating</div>
                            <div className="FeedRating">
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </Box>
                            </div>
                            <div className="feedBackInput">
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Feedback"
                                    multiline
                                    rows={3}
                                    variant="outlined"
                                    className="MultiLine"
                                />
                            </div>
                            <div className="SubmitButton">
                            <Button variant="contained" color="primary" className="submitButton">
                               Submit
                            </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
