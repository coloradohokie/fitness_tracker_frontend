import React from 'react'
import classes from './NavBar.module.scss'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logout from '../Logout/Logout'


const NavBar = (props) => (
    <header className={classes.NavBar}>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
            <Logout />
        </nav>
    </header>
)

export default NavBar