import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom'
import Layout from './containers/Layout/Layout'
import AllActivity from './containers/AllActivity/AllActivity';
import MyActivity from './containers/MyActivity/MyActivity';
import Auth from './containers/Auth/Auth'
import {AJAX} from './shared/utility'

class App extends React.Component {
  state = {
    isAuthenticated: false,
    activityHistory: []
  }

  onSubmitLogin = async (payload) => {
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
  }

  logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('username')
    localStorage.removeItem('userId')
    this.setState({isAuthenticated: false})
  }

  fetchActivities = async () => {
    const startDate = new Date ('2021-07-16 0:00:00 GMT-6:00')
    const millisecondsInAWeek = 604800000
    const endpoint="/activities"
    try {
      const response = await AJAX(endpoint)
      response.forEach(element => element.weekNumber = Math.trunc((new Date(element.date).getTime() - startDate.getTime())/millisecondsInAWeek) + 1)
      this.setState({activityHistory: response})
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


  onAddActivity = async (payload) => {
    let activityHistory = this.state.activityHistory
    const endpoint="/activities"
    try {
      const response = await AJAX(endpoint, 'POST', true, payload)
      activityHistory.push({
        id: response.id,
        user_id: parseInt(response.user_id),
        distance: parseInt(response.distance),
        duration: parseInt(response.duration),
        name: response.name
      })      
      this.setState({activityHistory: activityHistory})
      console.log('hit')
      window.location.href = "/"
    } catch (error) {
      console.error(error)
    }
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
            <MyActivity activityHistory={this.state.activityHistory} onAddActivity={this.onAddActivity} />
          </Route>
    
          <Route exact path='/all-activity'>
            <AllActivity />
          </Route>
        </Switch>
      )
    }

    if (this.state.isAuthenticated) {
      return (
        <Layout isAuthenticated={this.state.isAuthenticated} logout={this.logOut}>
          {routes}
        </Layout>
      )
    }

    return (<Auth onSubmitLogin={this.onSubmitLogin} />)
  }
}

export default App;
