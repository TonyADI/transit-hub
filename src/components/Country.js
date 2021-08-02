import BusinessList from './BusinessList';
import './Country.css';

const Country = props => {
    return (
        <div className="country-container">
            <span className="country-name">{props.details.name}</span>
            {props.details.capital ? <div className="flex-direction-row
            country-details-container">
                <div className="country-details flex-direction-col">
                    <div className="flex-direction-col">
                        <h3>Capital</h3>
                        <span>{props.details.capital}</span>
                    </div>
                    <div className="flex-direction-col">
                        <h3>Population</h3>
                        <span>{props.details.population.toLocaleString('en', 
                        {useGrouping:true})}</span>
                    </div>
                    <div className="flex-direction-col">
                        <h3>Region</h3>
                        <span>{props.details.region}</span>
                    </div>
                    <div className="flex-direction-col">
                        <h3>Time Zone</h3>
                        <span>{props.details.timezones[0]}</span>
                    </div>
                </div>
                <div className="country-images-container">
                    <img src={props.photos[0]} /*src={'https://ethiopjobs.com/wp-content/uploads/2020/06/Japanese-IPTV-Playlist-Japan.png'}*/ 
                    alt={props.imageDesc}/>
                </div>
                <div className="country-details flex-direction-col">
                    <div className="flex-direction-col">
                        <h3>Calling Code</h3>
                        <span>{props.details.callingCodes[0]}</span>
                    </div>
                    <div className="flex-direction-col">
                        <h3>Currency</h3>
                        <span>{`${props.details.currencies[0].name} 
                        ${props.details.currencies[0].symbol}`} </span>
                    </div>
                    <div className="flex-direction-col">
                        <h3>Language</h3>
                        <span>{props.details.languages[0].name}</span>
                    </div>
                    <div className="flex-direction-col">
                        <h3>Flag</h3>
                        <img alt={`${props.details.name} flag`}
                        src={'https://restcountries.eu/data/jpn.svg'} 
                        className="country-flag"/>
                    </div>
                </div>
            </div>
            :
            <div>
                We could not find any information on the supplied location. 
                Try a different location.
                </div>
            }
            <br />
            <br />
            <br />
            <br />
            <div className="covid-info-container">
                <div className="covid-info">
                    {props.warningMessage} Visit the <a className="cdc-link"
                href='https://www.cdc.gov/coronavirus/2019-ncov/travelers/map-and-travel-notices.html' target='_blank' 
                    rel="noreferrer">CDC </a>
                    for more information.
                    </div>
                <div className="travel-advisory" style={{backgroundColor: props.bgColor}}>
                    Covid-19: Level {props.covidLevel}
                </div>
                {props.covidData.Confirmed && <div className="flex-direction-row">
                    <div className="flex-direction-col">
                        <h3>Total Confirmed Cases</h3>
                        <span>{props.covidData.Confirmed.toLocaleString('en', 
                            {useGrouping:true})}</span>
                    </div>
                    <div className="flex-direction-col">
                        <h3>Total Deaths</h3>
                        <span>{props.covidData.Deaths.toLocaleString('en', 
                            {useGrouping:true})}</span>
                    </div>
                    <div className="flex-direction-col">
                        <h3>Total Recovered</h3>
                        <span>{props.covidData.Recovered.toLocaleString('en', 
                            {useGrouping:true})}</span>
                    </div>
                    <div className="flex-direction-col">
                        <h3>Active Cases</h3>
                        <span>{props.covidData.Active.toLocaleString('en', 
                            {useGrouping:true})}</span>
                    </div>
                </div>}
            </div>
            <div>
                <h2>Hotels</h2>
                <div>
                    <BusinessList businesses={props.hotels}/>
                </div>
            </div>
            <div>
                <h2>Tourist Attractions</h2>
                <div>
                    <BusinessList businesses={props.attractions}/>
                </div>
            </div>
        </div>
    )
}

export default Country;