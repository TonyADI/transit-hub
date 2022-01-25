# Transit Hub
Transit hub helps users find useful information on travel locations. Users input a country and the app provides information on the country such as its covid 19 status, images, demographics, hotels and attractions. The app uses multiple APIs to accomplish these tasks. These include the YelpAPI, UnsplashAPI, RestCountriesAPI, and Covid19API.

## Live Demo
<a href="https://tonyadi.com/apps/transit-hub.html" target="_blank">Demo</a>

## Features
### Welcome Screen
- The user is greeted by a pleasing animation which then reveals a navigation bar with a hyperlink that points to home, a search bar component that allows users to input the desired destination, and a login button that produces a modal box when clicked.
- There is a randomly selected hero image with a heading and a button that also randomly selects a country that is covid level one.
### Destination Images
- The four images provided by the Unsplash API automatically tranisition to create a beautiful slideshow.
### Country Section
- The RestCountries api provides data on multiple categories such as the capital, population, region, time zone, calling code, currency, language and flag of the specifiec country. So when the app mounts the user is greeted by data on these categories from Japan and is subsequently updated when the search term is changed. The demographic data surrounds the destination images.
### Covid-19 Section
- Users are informed on the best measures they can take as adviced by the CDC on the specific country they choose to go to. The section starts with a message describing whether it is safe or not to visit the country and to visit the official <a class="cdc-link" href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/map-and-travel-notices.html" target="_blank" rel="noreferrer">CDC </a> website for more information. A banner comes next dislaying what level the country is at with the background updated to reflect that level. The covid19api provides data on total confirmed cases, total deaths, total recovered and total active cases among other categories. I plan to include the total number of vaccinated individuals.
### Hotel | Tourist Attractions Section
- Using business and businessList components from prior projects with some added changes I was able to recommended 8 hotels and 8 tourist attractions based on the country provided and best match.

## Screenshots
### Hero section
![Hero Section](https://github.com/TonyADI/transit-hub/blob/main/src/assets/images/screenshot3.png?raw=true)
<br />
### Country Section
![Country Section](https://github.com/TonyADI/transit-hub/blob/main/src/assets/images/screenshot1.png?raw=true)
<br />
### Hotel | Tourist Attraction Section
![Hotel/Tourist Attraction Section](https://github.com/TonyADI/transit-hub/blob/main/src/assets/images/screenshot2.png?raw=true)

## Future Features
- [ ] Flight planner
- [ ] Save selected hotels and attractions for later

## Installation
The project is currently live at https://tonyadi.com/apps/transit-hub.html or clone it to your machine using `git clone https://github.com/TonyADI/transit-hub.git` then `npm install` and `npm run start`.

## Instructions
The application uses the cors anywhere proxy at https://cors-anywhere.herokuapp.com/corsdemo. Navigate to the website and request temporary access. The images should load after that.

## Resources Used
Covid-19 Api - https://covid19api.com/
<br>
Covid Travel Advisory - https://www.cdc.gov/coronavirus/2019-ncov/travelers/map-and-travel-notices.html
<br>
RestCountries Api - https://restcountries.eu
<br>
Unsplash Api - https://unsplash.com/documentation
<br>
Yelp Api - https://www.yelp.com/developers/documentation/v3
