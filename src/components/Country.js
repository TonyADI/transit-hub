import './Country.css';

const Country = props => {
    return (
        <div className="country-container" id="destination">
            <span className="country-name">{props.name || 'Destination'}
            </span>
            <div className="flex-direction
            country-details-container">
                <div className="country-details">
                    <div className="flex-direction-col">
                        <h3>Capital</h3>
                        <span className="text-overflow-el">
                            {props.capital || '-'}
                        </span>
                    </div>
                    <div className="flex-direction-col">
                        <h3>Population</h3>
                        <span>
                            {props.population ? 
                            props.population.toLocaleString('en', 
                            {useGrouping:true}) : '-'}
                        </span>
                    </div>
                    <div className="flex-direction-col">
                        <h3>Region</h3>
                        <span>{props.region || '-'}</span>
                    </div>
                    <div className="flex-direction-col">
                        <h3>Time Zone</h3>
                        <span>
                            {props.timezones ? props.timezones[0] : '-'}
                        </span>
                    </div>
                </div>

                <div className="country-images-container">
                    {props.photos.length ? props.photos.map(photo =>
                            <img 
                                src={photo.imgUrl} 
                                alt={photo.descrp} 
                                key={photo.id}
                            />):
                            'No Images'
                }
                </div>

                <div className="country-details flex-direction-col">
                    <div className="flex-direction-col">
                        <h3>Calling Code</h3>
                        <span>
                            {props.callingCodes ? props.callingCodes[0] : '-'}
                        </span>
                    </div>
                    <div className="flex-direction-col">
                        <h3>Currency</h3>
                        <span className="text-overflow-el">
                            {props.currencies ? 
                            `${props.currencies[0].name} 
                             ${props.currencies[0].symbol}` : '-'}
                        </span>
                    </div>
                    <div className="flex-direction-col">
                        <h3>Language</h3>
                        <span>
                            {props.languages ? props.languages[0].name  : '-'}
                        </span>
                    </div>
                    <div className="flex-direction-col">
                        <h3>Flag</h3>
                        {props.flag ? 
                        <img 
                            alt={`${props.name} flag`}
                            src={props.flag} 
                            className="country-flag"
                        /> : '-'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Country;