import React from 'react'
import './DeleteBook.scss'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default class deleteBook extends React.Component {

    constructor() {
        super();

        this.state = {
            bookName: null,
            authorName: null,
            description: null,
            price: null,
            quentity: null,
            pages: null,
            file: null,
            imageFlag: false,

            errors: {

                bookName: null,
                authorName: null,
                description: null,
                price: null,
                quentity: null,
                pages: null,
                file: null

            }
        }
    }

    render() {
        return (

            <div className="AddBookMainContainers">
                <div className="Cointainer">
                    {/* {true ? */}
                        <div className="DeleteOpetion">
                            <div className="AddBookTitle">
                                <Typography variant="h5" className="AuthorNameTitle" gutterBottom>
                                    Delete BOOK
                                </Typography>
                            </div>
                            <div className="Action">
                                <div className="BookNameTitle">
                                <Typography variant="h6" className="NameTitle" gutterBottom>
                                    Book Name
                                </Typography>
                                </div>
                                <div className="deleteText">
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        className="deleteTextField"
                                    />
                                </div>
                                <div className="Button">
                                    <Button variant="contained" color="secondary">
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {/* : */}
                        <div className="Main">
                            <div className="FirstContainer">
                                <div className="ImageContainer">
                                    {/* {!this.state.imageFlag ? <input type="file" className="ImageInput" /> : ''} */}
                                    {this.state.imageFlag ? <img src={this.state.file} className="ImageContainer1" /> : ''}
                                </div>
                            </div>
                            <div className="SecondContainer">
                                <div className="Information">
                                    <div className="BookName">
                                        <Typography variant="h6" className="BookNameTitle" gutterBottom>
                                            Book Name
                                </Typography>
                                        {/* <div className="BookNameTitle">Book Name</div> */}
                                        <div className="BookNameInput">
                                            <TextField
                                                id="outlined-basic"
                                                // label="Book Name"
                                                variant="outlined"
                                            />
                                        </div>
                                    </div>
                                    <div className="AuthorName">
                                        <Typography variant="h6" className="AuthorNameTitle" gutterBottom>
                                            Author Name
                                </Typography>
                                        {/* <div className="AuthorNameTitle"> Author Name</div> */}
                                        <div className="AuthorNameInput">
                                            <TextField
                                                id="outlined-basic"
                                                // label="Author Name"
                                                variant="outlined"
                                            />
                                        </div>
                                    </div>
                                    <div className="Description">
                                        <Typography variant="h6" className="DescriptionTitle" gutterBottom>
                                            Description
                                </Typography>
                                        {/* <div className="DescriptionTitle">Description</div> */}
                                        <div className="DescriptionInput">
                                            <TextField
                                                id="outlined-basic"
                                                // label="Description"
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        </div>
                                    </div>
                                    <div className="Price">
                                        <Typography variant="h6" className="PriceTitle" gutterBottom>
                                            Price
                                </Typography>
                                        {/* <div className="PriceTitle">Price</div> */}
                                        <div className="PriceInput">
                                            <TextField
                                                id="outlined-basic"
                                                value={this.state.price}
                                                variant="outlined"
                                            />
                                        </div>
                                    </div>
                                    <div className="Pages">
                                        <Typography variant="h6" className="PagesTitle" gutterBottom>
                                            Pages
                                </Typography>
                                        {/* <div className="PagesTitle">Pages</div> */}
                                        <div className="PagesInput">
                                            <TextField
                                                id="outlined-basic"
                                                value={this.state.pages}
                                                variant="outlined"
                                            />
                                        </div>
                                    </div>
                                    <div className="Quentity">
                                        <Typography variant="h6" className="QuentityTitle" gutterBottom>
                                            Quentity
                                </Typography>
                                        {/* <div className="QuentityTitle">Quentity</div> */}
                                        <div className="QuentityInput">
                                            <TextField
                                                id="outlined-basic"
                                                value={this.state.quentity}
                                                variant="outlined"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* } */}
                </div>
            </div>

        )
    }
}