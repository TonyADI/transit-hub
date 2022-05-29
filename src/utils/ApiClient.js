// RestCountries API
export const countrySearch = async name => {
    try {
        const response = await fetch(`https://restcountries.com/v2/name/${name}`);
        if(response.ok){
            const jsonResponse = await response.json();
            if(jsonResponse.status === 404){
                return jsonResponse;
            }
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

// Covid19api API
export const covidSearch = async country => {
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

// Unsplash API
export const photoSearch = async term => {
    const client_id = '';
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?per_page=4&page=1&query=${term}&orientation=landscape&client_id=${client_id}`);
        if(response.ok){
            const jsonResponse = await response.json();
            return jsonResponse.results ? jsonResponse.results.map(result => {
                return {imgUrl: result.urls.regular,
                        id: result.id,
                        descrp: result.description}
                        }) : [];
        }
        return [];
    }
    catch(error) {
        console.log(error);
        return [];
    }
}

// Yelp API
export const businessSearch = async (term, location) => {
    const apiKey = '';
    try {
        const response = await fetch(`https://desolate-headland-35675.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&limit=8&location=${location}`,
            { headers: { Authorization: `Bearer ${apiKey}` } });
        if(response.ok){
            const jsonResponse = await response.json();
            return jsonResponse.businesses ? jsonResponse.businesses.map(business => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zipCode,
                    category: business.categories[0].title,
                    price: business.price,
                    rating: business.rating,
                    reviewCount: business.review_count,
                    url: business.url
                };
            }) : [];
        }
        return [];
    } catch (error) {
        console.log(error);
        return [];
    }
}

