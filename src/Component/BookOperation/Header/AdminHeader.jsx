import React from 'react'
import './AdminHeader.scss'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function AdminHeader() {

    return (
        <div className="Header">
            <AppBar position="dynamic">
                <Toolbar>
                    <IconButton className="AccountCircleIcon" color="inherit" aria-label="menu">
                        <AccountCircleIcon />
                    </IconButton>
                    <Typography variant="h6" className="TitleAdmin">
                        Admin DashBoard
                    </Typography>
                    <Button color="inherit" >LogOut</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}