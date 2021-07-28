const client_id = 'T0jCXzIigIBjuwNApWDyTtpNs_xUi2Lu1hWOBMjKFFs';

const photoSearch = async term => {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=${client_id}`);
    const jsonResponse = await response.json();
    return jsonResponse.results ? jsonResponse.results.map(result => result.urls.full) :
     [];
}

export default photoSearch;