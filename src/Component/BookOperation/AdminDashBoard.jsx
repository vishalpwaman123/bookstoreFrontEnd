import React from 'react'
import './AdminDashBoard.scss'
import AdminHeader from './Header/AdminHeader'
import Add from '../../Assert/AddBook.png'
import Update from '../../Assert/Update.jpg'
import Delete from '../../Assert/deletebook.png'
import Display from '../../Assert/ReadBook.png'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 100,
        width: 100
    },
});

export default function AdminDashBoard() {

    const classes = useStyles();

    let history = useHistory();

    const handleAddBook = () => {

        history.push("/AddBook");
    }

    const handleUpdateBook = () => {

        history.push("/UpdateBook");
    }

    const handleDeleteBook = () => {

        history.push("/DeleteBook");
    }

    const handleDisplayBook = () => {

        history.push("/dashboard");
    }

    return (
        <div className="AdminDMainContainer">
            <AdminHeader />
            <div className="Carts">
                <div className="AddBook">
                    <Card className="Cart">
                        <CardActionArea>
                            <div className="media">
                                <CardMedia
                                    className={classes.media}
                                    image={Add}
                                    title="Contemplative Reptile"
                                />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    ADD BOOK
                                 </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                size="small"
                                color="primary"
                                onClick={() => { handleAddBook() }}>
                                <Typography variant="button" display="block" className="NameTitle" gutterBottom>
                                    Add
                                </Typography>
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="UpdateBook">
                    <Card className="Cart">
                        <CardActionArea>
                            <div className="media">
                                <CardMedia
                                    className={classes.media}
                                    image={Update}
                                    title="Contemplative Reptile"
                                />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    UPDATE BOOK
                                 </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                size="small"
                                color="primary"
                                onClick={() => { handleUpdateBook() }}>
                                <Typography variant="button" display="block" className="NameTitle" gutterBottom>
                                    Update
                                </Typography>
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="DeleteBook">
                    <Card className="Cart">
                        <CardActionArea>
                            <div className="media">
                                <CardMedia
                                    className={classes.media}
                                    image={Delete}
                                    title="Contemplative Reptile"
                                />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    DELETE BOOK
                                 </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                size="small"
                                color="primary"
                                onClick={() => { handleDeleteBook() }}>
                                <Typography variant="button" display="block" className="NameTitle" gutterBottom>
                                    Delete
                                </Typography>
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="DisplayBook">
                    <Card className="Cart">
                        <CardActionArea>
                            <div className="media">
                                <CardMedia
                                    className={classes.media}
                                    image={Display}
                                    title="Contemplative Reptile"
                                />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    DISPLAY BOOK
                                 </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className="CardActions">
                            <Button
                                size="small"
                                color="primary"
                                onClick={() => { handleDisplayBook() }}>
                                <Typography variant="button" display="block" className="NameTitle" gutterBottom>
                                    Display
                                </Typography>
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    )
}