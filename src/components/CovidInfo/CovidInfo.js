import Banner from '../Banner/Banner';
import Stat from '../Stat/Stat';
import './CovidInfo.css';
const CovidInfo = ({confirmed, warningMessage, bgColor, covidLevel, deaths, recovered}) => {
    return (
        <div className="covid-info-container">
                <span className="covid-info">
                    {warningMessage} Visit the <a className="cdc-link"
                    href='https://www.cdc.gov/coronavirus/2019-ncov/travelers/map-and-travel-notices.html' 
                    target='_blank' 
                    rel="noreferrer">CDC </a>
                    for more information.
                </span>
                <Banner 
                    styleName='travel-advisory-level'
                    bgColor={bgColor}
                    text={`Covid-19: Level ${covidLevel}`}/>
                <div className="flex-direction covid-stats">
                    <Stat   
                        heading='Total Confirmed Cases'
                        stat={confirmed}/>
                    <Stat 
                        heading='Total Deaths'
                        stat={deaths}/>
                    <Stat 
                        heading='Total Recovered'
                        stat={recovered}/>
                    <Stat 
                        heading='Active Cases'
                        stat={''}/>
                </div>
            </div>
    )
}

export default CovidInfo;