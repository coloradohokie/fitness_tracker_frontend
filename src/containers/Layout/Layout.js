import React, { Component } from 'react'
import classes from './Layout.module.scss'
import NavBar from '../../components/NavBar/NavBar'

class Layout extends Component {
    state = {
        isAuthenticated: true
    }

    render() {
        return (
            <>
                <NavBar />
                <main className={classes.Content}>
                    {this.props.children}
                    Some Text
                </main>
            </>
        )
    }
}

export default Layout