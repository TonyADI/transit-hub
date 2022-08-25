const axios = require('axios');

// RestCountries API
export const countrySearch = async name => {
    try {
        const response = await axios.get(`https://restcountries.com/v2/name/${name}`);
        if(response.status === 200){
            return Array.isArray(response.data) && response.data[0] ? 
                    response.data[0] : {};
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
        const response = await axios.get(`https://api.covid19api.com/total/country/${hyphenCountry}`);
        // Scrape website for data
        const webResponse = await axios.get(`https://desolate-headland-35675.herokuapp.com/https://www.worldometers.info/coronavirus/country/${hyphenCountry}/`);
        if(response.status === 200 && webResponse.status === 200){
            if(webResponse && Array.isArray(response.data) && response.data.pop()){
                // Index of element containing recovered data
                const index = webResponse.data.indexOf(`<div class="maincounter-number" style="color:#8ACA2B ">`);
                const recovered = webResponse.data.slice(webResponse.data.indexOf('<span>', index)+6,
                                                        webResponse.data.indexOf('</span>', index));
                // Index of element containing closed data
                const firstIndex = webResponse.data.indexOf('<div class="number-table-main">');
                // Find the </div> that closes closed data element
                const secondIndex = webResponse.data.slice(firstIndex, firstIndex + 50).indexOf('</div>');
                const closed = webResponse.data.slice(firstIndex + '<div class="number-table-main">'.length, secondIndex + firstIndex);
                const confirmed =  Array.isArray(response.data) && response.data.pop() && response.data.pop()['Confirmed'];
                // Total(confirmed) cases - Closed cases
                const active = confirmed - Number(closed.replace(/,/g, ''));
                return {...response.data.pop(), Recovered: recovered, Active: active};
            }
            return {}
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
        const response = await axios.get(`https://api.unsplash.com/search/photos?per_page=4&page=1&query=${term}&orientation=landscape&client_id=${client_id}`);
        if(response.status === 200){
            return response.data.results ? response.data.results.map(result => {
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
        const response = await axios.get(`https://desolate-headland-35675.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&limit=8&location=${location}`,
            { headers: { Authorization: `Bearer ${apiKey}` } });
        if(response.status === 200){
            return response.data.businesses ? response.data.businesses.map(business => {
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