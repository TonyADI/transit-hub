const apiKey = '';
const businessSearch = async (term, location) => {
    try {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&limit=8&location=${location}`,
            { headers: { Authorization: `Bearer ${apiKey}` } });
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
        }) : null;
    } catch (error) {
        return console.log(error);
    }
}

export default businessSearch;