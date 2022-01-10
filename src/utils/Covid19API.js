const covidSearch = async country => {
    try {
        let hyphenCountry = country.replace(' ', '-');
        const response = await fetch(`https://api.covid19api.com/total/country/${hyphenCountry}`);
        if(response.ok){
            const jsonResponse = await response.json();
            return Array.isArray(jsonResponse) && jsonResponse.pop() ? jsonResponse.pop() :
            {};
        }
        return {};
    }
    catch(error){
        console.log(error);
        return {};
    }
}

export default covidSearch;