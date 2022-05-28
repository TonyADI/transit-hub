import { useState, useEffect } from 'react';
import './App.css';
/* Components */
import BusinessList from '../components/BusinessList/BusinessList';
import CovidInfo from '../components/CovidInfo/CovidInfo';
import Country from '../components/Country/Country';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
/* Utilities */
import { businessSearch, covidSearch, 
         countrySearch, photoSearch } from '../utils/ApiClient';
import countries, { levelOne } from '../utils/CovidTravelAdvisory';
import { heroBg } from '../utils/BackgroundSelector';

const App = () => {
  const [attractions, setAttractions] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [bgColor, setBgColor] = useState('');
  const [country, setCountry] = useState('japan'); // Search term
  const [covidData, setCovidData] = useState({}); // Hook 5
  const [covidLevel, setCovidLevel] = useState('');
  const [details, setDetails] = useState({});
  const [imgLoading, setImgLoading] = useState(false);
  const [hotelsLoading, setHotelsLoading] = useState(false); // Hook 10
  const [attractionsLoading, setAttractionsLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [invalidCountry, setInvalidCountry] = useState(false);
  const [warningMessage, setWarningMessage] = useState(''); // Hook 13

  // Update search term and reset invalidCountry state
  const handleChange = term => {
    if(term === ''){
      setInvalidCountry(false);
    }
    setCountry(term);
  }

  // Run search term through all APIs
  const handleApiCalls = (term = country) => {
    setImgLoading(true);
    photoSearch(term).then(photos => {
      setPhotos(photos);})
      .catch(error => console.log(error))
      .finally(() => setImgLoading(false)
    );

    countrySearch(term).then(details => {
      setInvalidCountry(details.status);
      setDetails(details)})
      .catch(error => console.log(error)
    );

    setHotelsLoading(true);
    businessSearch('hotels', term).then(hotels => setHotels(hotels))
      .catch(error => console.log(error))
      .finally(() => setHotelsLoading(false)
    );

    setAttractionsLoading(true);
    businessSearch('attractions', term).then(attractions => 
      setAttractions(attractions))
      .catch(error => console.log(error))
      .finally(() => setAttractionsLoading(false)
    );

    covidSearch(term).then(data => setCovidData(data));
    const capitalizedCountry = term[0].toUpperCase() + term.slice(1);
    setCovidLevel(countries[capitalizedCountry] || 'Not Found');
  }

  const handleSearch = term => {
    handleApiCalls(term);
    window.location.assign('#destination');
    document.querySelector('div.input-container input').blur();
  }

  const selectRandomCountry = () => {
    const index = Math.floor(Math.random() * levelOne.length);
    const country = levelOne[index];
    handleApiCalls(country);
    setCovidLevel('One');
  }

  useEffect(() => {
    handleApiCalls('Japan');
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Navbar 
        term={country} 
        handleChange={handleChange}
        handleClick={handleSearch}
        invalidCountry={invalidCountry}
      />
      <Hero 
        backgroundImage={heroBg}
        handleClick={selectRandomCountry}/>
      <main>
        <Country 
          photos={photos}
          capital={details.capital} 
          population={details.population} 
          region={details.region} 
          timezones={details.timezones} 
          callingCodes={details.callingCodes} 
          currencies={details.currencies} 
          languages={details.languages} 
          loading={imgLoading}
          flag={details.flag} 
          name={details.name}
        />
        <CovidInfo 
          warningMessage={warningMessage} 
          covidLevel={covidLevel} 
          bgColor={bgColor} 
          confirmed={covidData.Confirmed} 
          deaths={covidData.Deaths}
          recovered={covidData.Recovered} 
          active={covidData.Active}
        />
        <div className="businesses-container">
          <BusinessList 
            businesses={hotels}
            loading={hotelsLoading}
            heading={'Hotels'}
          />
          <BusinessList 
            businesses={attractions} 
            heading={'Tourist Attractions'}
            loading={attractionsLoading}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
