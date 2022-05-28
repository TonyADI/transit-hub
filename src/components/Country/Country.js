import Carousel from '../Carousel/Carousel';
import Stat from '../Stat/Stat';
import './Country.css';
const Country = (props) => {
    return (
        <div className="country-container" id="destination">
            <span className="country-name">
                {props.name || 'Destination'}
            </span>
            <div className="flex-direction country-details-container">
                <div className="country-details">
                    {/*<div className="flex-direction-col">
                        <h3>Capital</h3>
                        <span className="text-overflow-el">
                            {props.capital || '-'}
                        </span>
                    </div>*/}
                    <Stat 
                        heading='Capital'
                        stat={props.capital}/>
                    <Stat 
                        heading='Population'
                        stat={props.population}/>
                    <Stat 
                        heading='Region'
                        stat={props.region}/>
                    <Stat 
                        heading='Time Zone'
                        stat={props.timezones && props.timezones[0]}/>
                </div>

                <Carousel
                    loading={props.loading}
                    photos={props.photos}/>
                
                <div className="country-details flex-direction-col">
                    <Stat
                        heading='Calling Code'
                        stat={props.callingCodes && props.callingCodes[0]}/>
                    <Stat
                        heading='Currency'
                        stat={props.currencies && (
                            `${props.currencies[0].name} 
                             ${props.currencies[0].symbol}`)}/>
                    <Stat
                        heading='Language'
                        stat={props.languages && props.languages[0].name}/>
                    <Stat
                        heading='Flag'
                        stat={props.flag && 
                            <img 
                                alt={`${props.name} flag`}
                                src={props.flag} 
                                className="country-flag"/>}/>
                </div>
            </div>
        </div>
    )
}

export default Country;