import React from 'react'
import classes from './NavigationItems.module.scss'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>My Activity</NavigationItem>
        <NavigationItem link="all-activity">All Activity</NavigationItem>
    </ul>
)


export default navigationItems