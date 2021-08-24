import React from 'react'
import Login from './Login/Login'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom' 

class App extends React.Component{
    render(){
      return(
        <div>
            <Login/>
            <Router>
              <Switch>
                <Route path='/Login' component={Login}/>
              </Switch>
            </Router>
        </div>
      )
    }
}
export default App;