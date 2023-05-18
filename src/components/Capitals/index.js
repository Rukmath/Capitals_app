import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCountryId: countryAndCapitalsList[0].id}

  getFilteredCountry = () => {
    const {activeCountryId} = this.state
    const filteredCountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeCountryId,
    )
    return filteredCountry.country
  }

  onChageEvent = event => {
    this.setState({activeCountryId: event.target.value})
  }

  render() {
    const {activeCountryId} = this.state
    const country = this.getFilteredCountry()

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="title">Countries And Capitals</h1>
          <div className="options-container">
            <select
              id={activeCountryId}
              className="select-option"
              value={activeCountryId}
              onChange={this.onChageEvent}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option key={eachCountry.id} value={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="desc">is capital of which country?</p>
          </div>
          <h1 className="capital">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
