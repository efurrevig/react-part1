import Image from './Image'
import Button from './Button'

const Country = ({ country, toggle }) => {
    return (
        <div>
            <h1>{country.name} <Button onClick={toggle} label={country.hidden ? 'show' : 'hide'}/></h1>
            {!country.hidden ? (
                <div>
                    {country.capital ? (
                        <p>Capital(s): {country.capital.join(', ')}</p>
                    ) : (
                        <p>Capital(s): None</p>
                    )}

                    <p>Area: {country.area}</p>
                    <h2>Languages:</h2>
                    {country.languages ? (
                        <ul>
                            {Object.values(country.languages).map((lang, index) => <li key={index}>{lang}</li>)}
                        </ul>
                    ) : ( 
                        <p>None</p>
                    )}

                    <Image src={country.flag} alt={'flag'}/>
                </div>
            ) : ( null )}
        </div>

    )
}

export default Country