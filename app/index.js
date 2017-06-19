import React from 'react'
import ReactDOM from 'react-dom'
require('./index.css')

// State
// Lifecycle Event
// UI

class Badge extends React.Component {
  render () {
    return (
      <div>
        <img
          src={this.props.img}
          alt='Avatar'
          style={{width: 100, height: 100}}
        />
        <h1>Name: {this.props.name}</h1>
        <h3>Username: {this.props.username}</h3>
      </div>
    )
  }
}

ReactDOM.render(
  <Badge
    name='Geng Sng'
    username='snggeng'
    img={'https://avatars0.githubusercontent.com/u/293340?v=3&s=460'}
  />,
  document.getElementById('app')
)
