const client_id = '';

const photoSearch = async term => {
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

export default photoSearch;