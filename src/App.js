import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom'
import Layout from './containers/Layout/Layout'
import AllActivity from './containers/AllActivity/AllActivity';
import MyActivity from './containers/MyActivity/MyActivity';

function App() {
  let routes = (
    <Switch>
      <Route exact path='/'>
        <MyActivity />
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

export default App;
