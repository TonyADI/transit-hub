const client_id = 'T0jCXzIigIBjuwNApWDyTtpNs_xUi2Lu1hWOBMjKFFs';

const photoSearch = async term => {
    const response = await fetch(`https://api.unsplash.com/search/photos?per_page=4&page=1&query=${term}&orientation=landscape&client_id=${client_id}`);
    const jsonResponse = await response.json();
    return jsonResponse.results ? jsonResponse.results.map(result => {
        return {imgUrl: result.urls.full,
                id: result.id,
                descrp: result.description}
                }) :
     [];
}

export default photoSearch;