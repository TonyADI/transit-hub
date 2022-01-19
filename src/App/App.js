import { useState, useEffect } from 'react';
import hero_bg1 from '../assets/images/hero-bg.jpg';
import hero_bg2 from '../assets/images/hero-bg2.jpg';
import hero_bg3 from '../assets/images/hero-bg3.jpg';
import hero_bg4 from '../assets/images/hero-bg4.jpg';
import hero_bg5 from '../assets/images/hero-bg5.jpg';
import BusinessList from '../components/BusinessList';
import CovidInfo from '../components/CovidInfo';
import Country from '../components/Country';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import businessSearch from '../utils/YelpAPI';
import covidSearch from '../utils/Covid19API';
import countries, { levelOne } from '../utils/CovidTravelAdvisory';
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

  // Update search term
  const handleChange = term => {
    setCountry(term);
  }

  // Run search term through all APIs
  const handleClick = (term = country) => {
    setLoading(true);
    photoSearch(term).then(photos => {
      setPhotos(photos);})
      .finally(() => setLoading(false));
    countrySearch(term).then(details => setDetails(details));
    businessSearch('hotels', term).then(hotels => setHotels(hotels));
    businessSearch('attractions', term).then(attractions => 
      setAttractions(attractions));
    covidSearch(term).then(data => setCovidData(data));
    const capitalizedCountry = term[0].toUpperCase() + term.slice(1);
    setCovidLevel(countries[capitalizedCountry] || 'Not Found');
    document.getElementById('hero-link').click()
  }

  const selectRandomCountry = () => {
    const index = Math.floor(Math.random() * levelOne.length);
    const country = levelOne[index];
    setCovidLevel('One')
    handleClick(country);
  }

  useEffect(() => {
    setLoading(true);
    photoSearch('Japan').then(photos => {
      setPhotos(photos);})
      .finally(() => setLoading(false));
    countrySearch('Japan').then(details => setDetails(details));
    businessSearch('hotels', 'Japan').then(hotels => setHotels(hotels));
    businessSearch('attractions', 'Japan').then(attractions => 
      setAttractions(attractions));
    covidSearch('Japan').then(data => setCovidData(data));
    setCovidLevel(countries['Japan']);
  }, []);

  // Select random hero background everytime app runs
  useEffect(() => {
    const backgrounds = [hero_bg1, hero_bg2, hero_bg3, hero_bg4, hero_bg5];
    const newBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)]
    document.querySelector('.hero-container').style.backgroundImage = 
    `url(${newBackground})`;
  }, []);
  
  useEffect(() => {
    switch(covidLevel){
        case 'One':
          setBgColor('#FFD885');
          setWarningMessage('Nonessential travel is permitted.');
            break;
        case 'Two':
          setBgColor('#EF852B');
          setWarningMessage(`Unvaccinated travelers who are at increased 
            risk for severe illness from COVID-19 should avoid 
            nonessential travel to the this location.`);
            break;
        case 'Three':
          setBgColor('#E34E27');
          setWarningMessage(`Unvaccinated travelers should avoid 
            nonessential travel to this location.`);
            break;
        case 'Four':
          setBgColor('#AD363A');
          setWarningMessage(`Avoid travel to this location. If you 
            must travel to this location, make sure you are 
            fully vaccinated.`);
            break;
        case 'Unknown':
          setBgColor('#666');
          setWarningMessage(`Avoid travel to this location. If you 
            must travel to this location, make sure you are 
            fully vaccinated.`);
            break;
        default:
          setBgColor('#666');
          setWarningMessage(`Unknown location. Travel at your own risk.`);
    }
  }, [covidLevel]);
  
  return (
    <div className="App">
      <Navbar term={country} handleChange={handleChange}
      handleClick={handleClick}/>
      <Hero handleClick={selectRandomCountry}/>
      <main>
        <Country photos={photos} loading={loading} capital={details.capital} 
        population={details.population} region={details.region} 
        timezones={details.timezones} callingCodes={details.callingCodes} 
        currencies={details.currencies} languages={details.languages} 
        flag={details.flag}/>
        <CovidInfo warningMessage={warningMessage} covidLevel={covidLevel} 
          bgColor={bgColor} confirmed={covidData.Confirmed} deaths={covidData.Deaths}
          recovered={covidData.Recovered} active={covidData.Active}/>
        <div className="businesses-container">
          <BusinessList businesses={hotels} heading={'Hotels'}/>
          <BusinessList businesses={attractions} 
            heading={'Tourist Attractions'}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
