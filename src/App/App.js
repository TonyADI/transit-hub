import { useState, useEffect } from 'react';
import Country from '../components/Country';
import Navbar from '../components/Navbar';
import UserAuthentication from '../components/UserAuthentication';
import businessSearch from '../utils/YelpAPI';
import covidSearch from '../utils/Covid19API';
import countries from '../utils/CovidTravelAdvisory';
import countrySearch from '../utils/RestCountriesAPI';
import photoSearch from '../utils/UnsplashAPI';
import './App.css';

const App = () => {
  const [attractions, setAttractions] = useState([]);
  const [bgColor, setBgColor] = useState('');
  const [country, setCountry] = useState('japan');
  const [covidData, setCovidData] = useState({});
  const [covidLevel, setCovidLevel] = useState('');
  const [details, setDetails] = useState({});
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [warningMessage, setWarningMessage] = useState('');

  const handleChange = term => {
    setCountry(term);
  }

  useEffect(() => {
    photoSearch(country).then(photos => setPhotos(photos));
    countrySearch(country).then(details => setDetails(details));
    businessSearch('hotels', country).then(hotels => setHotels(hotels));
    businessSearch('attractions', country).then(attractions => setAttractions(attractions));
    covidSearch(country).then(data => setCovidData(data));
    const capitalizedCountry = country[0].toUpperCase() + country.slice(1);
    setCovidLevel(countries[capitalizedCountry]);
  }, [])

  
  useEffect(() => {
    switch(covidLevel){
        case 'one':
          setBgColor('#FFD885');
          setWarningMessage('Nonessential travel is permitted.')
            break;
        case 'two':
          setBgColor('#EF852B');
          setWarningMessage(`Unvaccinated travelers who are at increased 
            risk for severe illness from COVID-19 should avoid 
            nonessential travel to the this location.`)
            break;
        case 'three':
          setBgColor('#E34E27');
          setWarningMessage(`Unvaccinated travelers should avoid 
            nonessential travel to this location.`)
            break;
        case 'four':
          setBgColor('#AD363A');
          setWarningMessage(`Avoid travel to this location. If you 
            must travel to this location, make sure you are 
            fully vaccinated.`)
            break;
        case 'unknown':
          setBgColor('#666');
            break;
        default:
          setBgColor('#666');
    }
  }, [covidLevel])
  
  return (
    <div className="App">
      <Navbar term={country} handleChange={handleChange}/>
      <div className="hero-container">
        <div className="img-overlay">
          <div className="hero-body">
            <span className="hero-heading">
              One-stop shop for all your travel needs</span>
            <button className="hero-bt">
              Take me away
            </button>
          </div>
          <div>
          </div>
        </div>
      </div>
      <div className="countries-container">
          <Country photos={photos} details={details}
          hotels={hotels} covidData={covidData} attractions={attractions}
          covidLevel={covidLevel} bgColor={bgColor}
          warningMessage={warningMessage}/>
      </div>
    </div>
  );
}

export default App;
