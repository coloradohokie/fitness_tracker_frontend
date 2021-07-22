import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom'
import Layout from './containers/Layout/Layout'
import AllActivity from './containers/AllActivity/AllActivity';
import MyActivity from './containers/MyActivity/MyActivity';
import Auth from './containers/Auth/Auth'
import {AJAX} from './shared/utility'

const BASE_URL = 'http://localhost:3000/'

class App extends React.Component {
  state = {
    isAuthenticated: false,
    user: {
      id: 1,
      name: 'Mike'
    },
    activityHistory: [
        {
            date: 'February 10, 2021',
            activity: 'Sledding',
            distance: '0',
            duration: '30'
        },
        {
            date: 'February 12, 2021',
            activity: 'Running',
            distance: '3.5',
            duration: '32'
        },
        {
            date: 'February 14, 2021',
            activity: 'Dancing',
            distance: '0',
            duration: '80'
        }
    ]
  }

  onSubmitLogin = async (payload) => {
    // return async dispatch => {
        try {
            const response = await AJAX('login', 'POST', false, payload)
            console.log(response)
            if (!response || !response.token) throw new Error ('Bad Login')
            
            localStorage.setItem('token', response.token)
            const expirationDate = new Date(new Date().getTime() + (response.expiration * 1000))
            localStorage.setItem('expirationDate', expirationDate)
            localStorage.setItem('username', response.username)
            localStorage.setItem('userId', response.user_id)
            this.setState({isAuthenticated:true})
            window.location.href = "/"
            
        } catch (error) {
            console.error(error)  
        }
    // } 
    
  }

  logOut = () => {
    console.log('LOGOUT')
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('username')
    localStorage.removeItem('userId')
    this.setState({isAuthenticated: false})
  }

  fetchActivities = async () => {
    const endpoint="/activities"
    try {
      const response = await AJAX(endpoint)
      this.setState({activityHistory: response})
      console.log(this.state)
    } catch (error) {
      console.error(error)
    }
  }

  checkAuthState = () => {
    const token = localStorage.getItem('token')
    if (!token) {
        console.error("No Token")
        this.setState({isAuthenticated: false})
    } else {
        const expirationDate = localStorage.getItem('expirationDate')
        if (expirationDate < new Date()) {
            console.error("Token expired")
            this.logOut()

        } else {
            this.fetchActivities()
            this.setState({isAuthenticated: true})
        }
    }
  }



  addActivity = (activity) => {
    const payload = {
      userid: this.state.user.id,
      name: activity.name,
      date: activity.date,
      duration: activity.duration,
      distance: activity.distance
    }
    const endpoint="/activities"
    fetch(BASE_URL.concat(endpoint), {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(response => console.log(response))
  }

  componentDidMount = () => {
    this.checkAuthState()
  }

  render() {
    let routes = (
      <Switch>
        <Route exact path='/auth'>
          <Auth onSubmitLogin={this.onSubmitLogin} />
        </Route>
      </Switch>
    )

    if (this.state.isAuthenticated) {
      routes = (
        <Switch>
          <Route exact path='/'>
            <MyActivity activityHistory={this.state.activityHistory} />
          </Route>
    
          <Route exact path='/all-activity'>
            <AllActivity />
          </Route>
        </Switch>
      )
    }

  
    return (
      <Layout isAuthenticated={this.state.isAuthenticated} logout={this.logOut}>
        {routes}
      </Layout>
    );
  }
}

export default App;
