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
        // Scrape website for data
        const webResponse = await fetch(`https://desolate-headland-35675.herokuapp.com/https://www.worldometers.info/coronavirus/country/${hyphenCountry}/`);
        if(response.ok && webResponse.ok){
            const jsonResponse = await response.json();
            const textWebResponse = await webResponse.text();
            if(webResponse && Array.isArray(jsonResponse) && jsonResponse.pop()){
                // Index of element containing recovered data
                const index = textWebResponse.indexOf(`<div class="maincounter-number" style="color:#8ACA2B ">`);
                const recovered = textWebResponse.slice(textWebResponse.indexOf('<span>', index)+6,
                                                        textWebResponse.indexOf('</span>', index));
                // Index of element containing closed data
                const firstIndex = textWebResponse.indexOf('<div class="number-table-main">');
                // Find the </div> that closes closed data element
                const secondIndex = textWebResponse.slice(firstIndex, firstIndex + 50).indexOf('</div>');
                const closed = textWebResponse.slice(firstIndex + '<div class="number-table-main">'.length, secondIndex + firstIndex);
                const confirmed =  Array.isArray(jsonResponse) && jsonResponse.pop() && jsonResponse.pop()['Confirmed'];
                // Total(confirmed) cases - Closed cases
                const active = confirmed - Number(closed.replace(/,/g, ''));
                return {...jsonResponse.pop(), Recovered: recovered, Active: active};
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