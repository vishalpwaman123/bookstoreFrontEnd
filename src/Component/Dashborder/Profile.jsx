import React from 'react'
import './Profile.scss'
import Header from '../Dashborder/Header/Header1'
import booklogo from '../../Assert/booklogo.png'
import SearchIcon from '@material-ui/icons/Search';
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

export default class Profile extends React.Component {

    render() {
        return (
            <div className="profileMainCointainer">
                <Header />
                <div className="homeBookBody">
                    <div className="breadcrumbs">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" href="/" className="Link1">
                                Home
                            </Link>
                            <Link color="inherit" href="/" className="Link2">
                                Profile
                            </Link>
                        </Breadcrumbs>
                    </div>
                </div>
                <div className="profileBody">

                    <div className="InputField1">
                        <div className="Title1">
                            <div className="PersonalDetail">Personal Detail</div>
                            <div className="Edit">Edit</div>
                        </div>
                        <div className="FullName">Full Name</div>
                        <InputGroup className="">
                            <FormControl className="FullNameInput" aria-label="Medium" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                        <div className="EmailId">Email Id</div>
                        <InputGroup className="">
                            <FormControl className="EmailIdInput" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                        <div className="Password">Password</div>
                        <InputGroup className="">
                            <FormControl className="PasswordInput" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                        <div className="MobileNumber">Mobile Number</div>
                        <InputGroup className="">
                            <FormControl className="MobileInput" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                    </div>

                    <div className="InputField2">
                        <div className="Title1">
                            <div className="AddressDetail">Address Details</div>
                            <Button variant="outlined" color="secondary" className="AddNewAddressButton">
                                Add New Address
                            </Button>
                        </div>
                        <div className="Title2">
                            <div className="Work">1.WORK</div>
                            <div className="Edit">Edit</div>
                        </div>
                        <div className="Address">Address</div>
                        <InputGroup className="">
                            <FormControl className="AddressInput" aria-label="Medium" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                        <div className="SubInput21">
                            <div className="CityTownInput"><div className="City">City/Town</div>
                                <InputGroup className="">
                                    <FormControl className="CityInput" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                            </div>
                            <div className="StateInput"><div className="State">State</div>
                                <InputGroup className="">
                                    <FormControl className="StatesInput" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                            </div>
                        </div>
                        <div className="TypeInput"><div className="Type">Type</div>
                        <div className="RedioGroupInput">
                                <RadioGroup aria-label="gender" className="RedioGroup"  >
                                    <FormControlLabel className="RedioGroup1" value="Home" control={<Radio />} label="Home" />
                                    <FormControlLabel className="RedioGroup1" value="Work" control={<Radio />} label="Work" />
                                    <FormControlLabel className="RedioGroup1" value="Other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}