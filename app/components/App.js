import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Import Components
import Popular from './Popular'
import Nav from './Nav'
import Home from './Home'
import Battle from './Battle'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/popular' component={Popular} />
            <Route render={() => {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>

    )
  }
}

module.exports = App
