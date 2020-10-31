import React from 'react'
import './HomeBook.scss'
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Header from './Header'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export default class HomeBook extends React.Component {

    render() {
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
                                    <div className="BookName"></div>
                                    <div className="AutherName"></div>
                                    <div className="Rating"></div>
                                    <div className="Price"></div>
                                    <div className="Line"></div>
                                    <div className="Description"></div>
                                    <div className="Line"></div>
                                    <div className="CFeedBack"> Customer FeedBack</div>
                                    <div className="Subfeedback">
                                    <div className="FeedRating"></div>
                                    <div className="feedBackInput"></div>
                                    <div className="SubmitButton"></div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
} 