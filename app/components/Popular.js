import React from 'react'
import PropTypes from 'prop-types'
import api from '../utils/api'

let SelectLanguage = (props) => {
  let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
  return (
    <ul className='languages'>
      {languages.map((lang) => {
        return (
          <li
            style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedLanguage: 'All',
      repos: null
    }

    this.updateLanguage = this.updateLanguage.bind(this)
  }

  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage)
  }

  updateLanguage (lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang,
        repos: null
      }
    })

    // Ajax
    api.fetchPopularRepos(lang)
      .then((repos) => {
        console.log(repos)
      })
  }

  render () {
    return (
      <div>
        <SelectLanguage
         selectedLanguage={this.state.selectedLanguage}
         onSelect={this.updateLanguage}/>
      </div>
    )
  }
}

module.exports = Popular
