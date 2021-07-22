import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom'
import Layout from './containers/Layout/Layout'
import AllActivity from './containers/AllActivity/AllActivity';
import MyActivity from './containers/MyActivity/MyActivity';

class App extends React.Component {
  state = {
    isAuthenticated: true,
    user: 'Mike',
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

  render() {
    let routes = (
      <Switch>
        <Route exact path='/'>
          <MyActivity activityHistory={this.state.activityHistory} />
        </Route>
  
        <Route exact path='/all-activity'>
          <AllActivity />
        </Route>
      </Switch>
    )
  
    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
}

export default App;
