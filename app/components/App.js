import React from 'react'
import ReactRouter from 'react-router-dom'
const Router = ReactRouter.BrowserRouter
const Route = ReactRouter.Route

// Import Components
import Popular from './Popular'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <Route path='/popular' component={Popular} />
        </div>
      </Router>

    )
  }
}

module.exports = App
