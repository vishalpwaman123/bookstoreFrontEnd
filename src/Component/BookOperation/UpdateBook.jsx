import React from 'react'
import './AddBook.scss'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const NumberRegex = /^[0-9\b]+$/;

export default class UpdateBook extends React.Component {

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

    handlePrice = (event) => {
        let price = event.target.value;
        if (price === '' || NumberRegex.test(price)) {
            this.setState({ price: price }, () => console.log(this.state.price))
        }
    }

    handlePages = (event) => {
        let pages = event.target.value;
        if (pages === '' || NumberRegex.test(pages)) {
            this.setState({ pages: pages }, () => console.log(this.state.pages))
        }
    }

    handleQuentity = (event) => {
        let quentity = event.target.value;
        if (quentity === '' || NumberRegex.test(quentity)) {
            this.setState({ quentity: quentity }, () => console.log(this.state.quentity))
        }
    }

    handleThumbnail = (event) => {

        this.setState({ file: URL.createObjectURL(event.target.files[0]) })
        this.setState({ imageFlag: true });
    }

    render() {
    return (
        <div className="AddBookMainContainers">
            <div className="Cointainer">
                <div className="AddBookTitle">
                    <Typography variant="h5" className="AuthorNameTitle" gutterBottom>
                        UPDATE BOOK
                    </Typography>
                </div>
                <div className="Main">
                    <div className="FirstContainer">
                        <div className="ImageContainer">
                            {!this.state.imageFlag ? <input type="file" onChange={this.handleThumbnail} className="ImageInput" /> : ''}
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
                                        onChange={this.handlePrice}
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
                                        onChange={this.handlePages}
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
                                        onChange={this.handleQuentity}
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}