import React, { Component } from 'react'
import classes from './Layout.module.scss'
import NavBar from '../../components/NavBar/NavBar'

class Layout extends Component {
    render() {
        return (
            <>
                <NavBar
                    isAuthenticated = {this.props.isAuthenticated}
                    logout={this.props.logout}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default Layout