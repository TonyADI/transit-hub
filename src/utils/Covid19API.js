const covidSearch = async country => {
    try {
        let hyphenCountry = country.replace(' ', '-');
        const response = await fetch(`https://api.covid19api.com/total/country/${hyphenCountry}`);
        const jsonResponse = await response.json();
        return Array.isArray(jsonResponse) && jsonResponse.pop() ? jsonResponse.pop() :
        {};
    }
    catch(error){
        console.log(error);
    }
}

export default covidSearch;