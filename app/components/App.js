import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Import Components
import Popular from './Popular'
import Nav from './Nav'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Route path='/popular' component={Popular} />
        </div>
      </Router>

    )
  }
}

module.exports = App
