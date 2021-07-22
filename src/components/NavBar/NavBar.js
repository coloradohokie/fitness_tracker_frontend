import React from 'react'
import classes from './NavBar.module.scss'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logout from '../Logout/Logout'


const NavBar = (props) => (
    <header className={classes.NavBar}>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuthenticated} />
            <Logout logout={props.logout} />
        </nav>
    </header>
)

export default NavBar