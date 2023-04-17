import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Country from './components/Country'
import Filter from './components/Filter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('usa')

  const getCountryData = (response) => {
    return response.map(country => ({
      name: country.name.common,
      capital: country.capital,
      area: country.area,
      languages: country.languages,
      flag: country.flags.png,
      hidden: response.length === 1 ? false : true
    }))
  }

  useEffect(() => {
      if (filter.length === 0) {
        return
      }
      countryService
        .getCountries(filter)
        .then(response => {
          setCountries(getCountryData(response))
        })
        .catch(error => {
          console.log(error)
          setCountries([])
        })
    }, [filter])

  const handleFilterChange = (event) => {
      setFilter(event.target.value)
  }

  const toggleShown = (name) => {
    const country = countries.find(c=> c.name === name)
    const changedCountry = {...country, hidden: !country.hidden}
    setCountries(countries.map(c => c.name === name ? changedCountry : c))
  }

  return (
    <div>
      <Filter filter={filter} onChange={handleFilterChange} />
      {countries.length > 10 ? (
        <p>Query too large, be more specific</p>
      ) : countries.length === 0 ? (
        <p> no results </p>
      ) : (
        countries.map(country => <Country 
                                    key={country.name} 
                                    country={country} 
                                    toggle={() => toggleShown(country.name)} 
                                  />)
      )}
    </div>
  )
}

export default App