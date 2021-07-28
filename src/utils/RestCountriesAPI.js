const countrySearch = async name => {
    try {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
        const jsonResponse = await response.json();
        return jsonResponse ? jsonResponse[0]:
         '';
    }
    catch(error){
        console.log(error)
    }

}

export default countrySearch;