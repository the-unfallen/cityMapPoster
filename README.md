<<<<<<< HEAD
# cityMapPoster
City Map Poster Maker Project
=======
# CITYMAP POSTER MAKER
#### Video Demo:  (https://youtu.be/ush925KBmas)
#### Description:

## Project Overview:- 

As a map enthusiast, I have always loved map posters. Hence, creating a City Map Poster Maker feels necessary. This web application generates map posters for any city of the world that a user desires.

The output is a pdf, png or jpeg generated map format that can be printed and framed.

The technology behind this project relies heavily on [leaflet](https://www.leafletjs.com) and leaflet plugins.

This webapp is responsive and mobile friendly which means no matter the device, map posters can be generated easily.

While the map view is powered by leaflet, leaflet controls and leaflet plugins. The city name and country name section of the map is powered by [nominatim API](https://nominatim.org/).

The coordinates feature below the country name is powered by leaflet.

There is an input box to edit city name, in the event that the generated city name is not accurate.

The map poster maker features different map styles generated from different leaflet plugins and external maps tile layers, from [OPENSTREETMAP](https://www.openstreetmap.org/) to [ESRI](https://www.esri.com/en-us/home) to [MAPBOX](https://www.mapbox.com/) to CARTOCDN to STADIAMAPS.

A combination of html2canvas and jspdf libraries were used to generate maps in pdf, jpeg, and png formats.

Everytime the map poster maker starts or restarts, it starts on a new mapview of a random major city.

---
## Usage Instructions
1. **Selecting a City**
   - Type the name of a city in the search box or pan around the map to focus on a specific location.
   
2. **Customizing the Map**
   - Adjust map features through layer controls, which allow toggling visibility for different map styles e.g. Basic, Topo, Image, monochrome etc.


3. **Setting Export Preferences**
   - Select preferred **format** (PDF, JPEG, or PNG) and **quality**.
   - Choose **paper size** from A2, A3, or A4.

4. **Exporting**
   - Click **Download Map** to export the map in the specified format and quality.
---
## Development environment
    - This web application was developed on django.
---
## File Components

1. **index.html**
    - The html of the index page contained the links and sources of relevant styling sheets and javascript files.
    - it also contained the map view and map address, with other complimentary functionalities like a form that allows for map poster download and another form to edit the city name.
2. **script.js**
    - This is the engine room of this project, almost all interactive features of this map project is powered through this file (script.js).
    - This file contains an array of atleast 100 urban citites of the world with details about their geographic coordinates. by accessing this array at random, every time this project is reloaded, we can only have a fresh map view everytime the map reloads.
    - this file also initiates leaflet functionalities, that loads the mapview, additional map tiles, complimentary, layout controls and a special search plugins, that makes it possible to search different locations in the world right on the leaflet mapview.
    - this js file ensures that anytime the map is moved, the coordinate of the center of the map is regenerated and a new city name is also generated if necessary.
    - this file also implements the form submit function for when the city name needs to be edited, implementing limits to character lengths and adjusting font-sizes where necessary.
    - this file also helps to enforce app behaviour based on the width of devices.
3. **styles.css**
    - this is used to implement general styling of html elements.
4. **styles2.css**
    - this is used to style elements on very small screens i.e. <576px screen sizes.
5. **styles3.css**
    - this is used to style elements on small screens i.e. 576-768px screen sizes.
6. **styles4.css**
    - this is used to style elements on medium screens i.e. 768-992px screen sizes.
7. **styles5.css**
    - this is used to style elements on medium to large screens  i.e. 992-1200px screen sizes.
8. **styles6.css**
    - this is used to style elements on large screens  i.e. 1200-1400px screen sizes.
9. **styles7.css**
    - this is used to style elements on very large screens  i.e. 1200-1400px screen sizes.


---

## Challenges and Solutions
- **High-Resolution Output**: Initially, output quality struggled at lower zoom levels. By implementing `html2canvas` at higher scales and adjusting canvas dimensions, high-quality exports were achieved.
- **Cross-Origin Resource Sharing (CORS)**: Using external map tiles introduced some CORS restrictions, which were resolved by choosing a tile provider supporting cross-origin requests.

---

## Future Enhancements
- **User Accounts**: Allow users to save and retrieve their custom maps.
- **Enhanced Styling Options**: Add more granular control for styles, including font choices, color schemes, and icon customizations.

---



## Acknowledgments
Special thanks to the following resources:
1. [Leaflet](https://leafletjs.com/) 
2. [Mapbox](https://www.mapbox.com/)
3. [googlefont](https://fonts.google.com/)
4. [bootstrap](https://getbootstrap.com/)
5. [JSPDF](https://artskydj.github.io/jsPDF/docs/jsPDF.html)
6. [Html2canvas](https://html2canvas.hertzen.com/documentation)
7. [Django](https://www.djangoproject.com/)
8. [Stadiamaps](https://stadiamaps.com/)

---

# EXTREMELY IMPORTANT

- For security reasons, 3 important map styles have been commented out of the project submission to GitHub because they require an API Key and Access Token. (See the following lines for details):
  - **script.js**: Lines 138–158 and 171–173
  - **index.html**: Line 147

- The 3 map styles are: **terrain**, **outdoors**, and **monochrome**.

- **API Requirements**:
  - `terrain` and `outdoors` map styles require an API Key from [Stadia Maps](https://docs.stadiamaps.com/authentication/).
  - `monochrome` map style requires an access token from [Mapbox](https://www.mapbox.com/).

### Setup Instructions

1. Copy `config.example.js` to `config.js`.
2. Replace the placeholder values (`YOUR_STADIA_API_KEY` and `YOUR_MAPBOX_ACCESS_TOKEN`) with your actual API keys.
3. Uncomment the following lines to enable the additional map styles:
   - **script.js**: Lines 138–158 and 171–173
   - **index.html**: Line 147
4. Save your changes, and you should now have access to the `terrain`, `outdoors`, and `monochrome` map styles.

## **Note**: Without these API keys, the 3 additional map styles will not load, but there are 5 other map styles that will work smoothly.


>>>>>>> de562a1 (Initial commit)
