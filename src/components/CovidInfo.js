import './CovidInfo.css';
const CovidInfo = props => {
    return (
        <div className="covid-info-container">
                <div className="covid-info">
                    {props.warningMessage} Visit the <a className="cdc-link"
                href='https://www.cdc.gov/coronavirus/2019-ncov/travelers/map-and-travel-notices.html' 
                target='_blank' 
                    rel="noreferrer">CDC </a>
                    for more information.
                    </div>
                <div className="travel-advisory" style={{backgroundImage: 
                    `linear-gradient(${props.bgColor}, ${props.bgColor})`}}>
                    Covid-19: Level {props.covidLevel}
                </div>
                <div className="flex-direction covid-stats">
                    <div className="flex-direction-col">
                        <h3>Total Confirmed Cases</h3>
                        <span>{props.confirmed ? 
                        props.confirmed.toLocaleString('en', 
                            {useGrouping:true}) : '-'}</span>
                    </div>
                    <div className="flex-direction-col">
                        <h3>Total Deaths</h3>
                        <span>{props.deaths ? 
                        props.deaths.toLocaleString('en', 
                            {useGrouping:true}) : '-'}</span>
                    </div>
                    <div className="flex-direction-col">
                        <h3>Total Recovered</h3>
                        <span>{props.recovered ? 
                        props.recovered.toLocaleString('en', 
                            {useGrouping:true}) : '-'}</span>
                    </div>
                    <div className="flex-direction-col">
                        <h3>Active Cases</h3>
                        <span>{props.active ? 
                        props.active.toLocaleString('en', 
                            {useGrouping:true}) : '-'}</span>
                    </div>
                </div>
            </div>
    )
}

export default CovidInfo;