const countrySearch = async name => {
    try {
        const response = await fetch(`https://restcountries.com/v2/name/${name}`);
        if(response.ok){
            const jsonResponse = await response.json();
            return Array.isArray(jsonResponse) && jsonResponse[0] ? jsonResponse[0]:
             {};
        }
        return {};
    }
    catch(error){
        console.log(error);
        return {};
    }

}

export default countrySearch;