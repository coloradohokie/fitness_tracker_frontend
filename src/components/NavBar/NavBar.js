import React from 'react'
import classes from './NavBar.module.scss'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logout from '../Logout/Logout'

const NavBar = (props) => {
    const username = localStorage.getItem('username')
    const capitalizedUserName = username.charAt(0).toUpperCase() + username.slice(1)
    return (
        <header className={classes.NavBar}>
            <nav className={classes.DesktopOnly}>
                <div className={classes.UserName}>
                    Hi {capitalizedUserName}!
                </div>
                <NavigationItems isAuthenticated={props.isAuthenticated} />
                <Logout logout={props.logout} />
            </nav>
        </header>
    )
}

export default NavBar