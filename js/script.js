

const urbanizedCities = [
    { city: "Tokyo", country: "Japan", latitude: 35.682839, longitude: 139.759455 },
    { city: "Delhi", country: "India", latitude: 28.613939, longitude: 77.209021 },
    { city: "Shanghai", country: "China", latitude: 31.230416, longitude: 121.473701 },
    { city: "São Paulo", country: "Brazil", latitude: -23.550520, longitude: -46.633308 },
    { city: "Mexico City", country: "Mexico", latitude: 19.432608, longitude: -99.133209 },
    { city: "Cairo", country: "Egypt", latitude: 30.044420, longitude: 31.235712 },
    { city: "Dhaka", country: "Bangladesh", latitude: 23.810301, longitude: 90.412521 },
    { city: "Mumbai", country: "India", latitude: 19.076090, longitude: 72.877426 },
    { city: "Beijing", country: "China", latitude: 39.904202, longitude: 116.407394 },
    { city: "Osaka", country: "Japan", latitude: 34.693738, longitude: 135.502165 },
    { city: "New York City", country: "USA", latitude: 40.712776, longitude: -74.005974 },
    { city: "Karachi", country: "Pakistan", latitude: 24.860732, longitude: 67.001139 },
    { city: "Istanbul", country: "Turkey", latitude: 41.008238, longitude: 28.978359 },
    { city: "Chongqing", country: "China", latitude: 29.563011, longitude: 106.570225 },
    { city: "Bangkok", country: "Thailand", latitude: 13.756331, longitude: 100.501762 },
    { city: "Kolkata", country: "India", latitude: 22.572646, longitude: 88.363895 },
    { city: "Los Angeles", country: "USA", latitude: 34.052235, longitude: -118.243683 },
    { city: "Lagos", country: "Nigeria", latitude: 6.524379, longitude: 3.379206 },
    { city: "Rio de Janeiro", country: "Brazil", latitude: -22.906847, longitude: -43.172896 },
    { city: "Tianjin", country: "China", latitude: 39.143724, longitude: 117.176200 },
    { city: "Kinshasa", country: "DR Congo", latitude: -4.441931, longitude: 15.266293 },
    { city: "Guangzhou", country: "China", latitude: 23.129110, longitude: 113.264385 },
    { city: "Moscow", country: "Russia", latitude: 55.755825, longitude: 37.617298 },
    { city: "Shenzhen", country: "China", latitude: 22.543096, longitude: 114.057865 },
    { city: "Chennai", country: "India", latitude: 13.082680, longitude: 80.270718 },
    { city: "Lima", country: "Peru", latitude: -12.046374, longitude: -77.042793 },
    { city: "Bangalore", country: "India", latitude: 12.971599, longitude: 77.594566 },
    { city: "Paris", country: "France", latitude: 48.856613, longitude: 2.352222 },
    { city: "Bogotá", country: "Colombia", latitude: 4.611811, longitude: -74.081749 },
    { city: "Chengdu", country: "China", latitude: 30.572815, longitude: 104.066803 },
    { city: "Hong Kong", country: "China", latitude: 22.396428, longitude: 114.109497 },
    { city: "Wuhan", country: "China", latitude: 30.592800, longitude: 114.305540 },
    { city: "Hangzhou", country: "China", latitude: 30.274085, longitude: 120.155070 },
    { city: "Nanjing", country: "China", latitude: 32.061711, longitude: 118.777861 },
    { city: "Ahmedabad", country: "India", latitude: 23.022505, longitude: 72.571362 },
    { city: "Hyderabad", country: "India", latitude: 17.385044, longitude: 78.486671 },
    { city: "Kuala Lumpur", country: "Malaysia", latitude: 3.139,"longitude": 101.6869 },
    { city: "Khartoum", country: "Sudan", latitude: 15.500654, longitude: 32.559899 },
    { city: "Alexandria", country: "Egypt", latitude: 31.215640, longitude: 29.955270 },
    { city: "Addis Ababa", country: "Ethiopia", latitude: 9.03,"longitude": 38.74 },
    { city: "Abidjan", country: "Ivory Coast", latitude: 5.345, longitude: -4.024 },
    { city: "Valparaíso", country: "Chile", latitude: -33.0472, longitude: -71.6292 },
    { city: "Detroit", country: "USA", latitude: 42.3314, longitude: -83.0458 },
    { city: "Minsk", country: "Belarus", latitude: 53.9045, longitude: 27.5590 },
    { city: "Tunis", country: "Tunisia", latitude: 36.8000, longitude: 10.1799 },
    { city: "Nairobi", country: "Kenya", latitude: -1.286389, longitude: 36.817223 },
    { city: "Copenhagen", country: "Denmark", latitude: 55.6761, longitude: 12.5683 },
    { city: "Riga", country: "Latvia", latitude: 56.9496, longitude: 24.1052 },
    { city: "Lisbon", country: "Portugal", latitude: 38.7223, longitude: -9.1393 },
    { city: "Stockholm", country: "Sweden", latitude: 59.3293, longitude: 18.0686 },
    { city: "Vienna", country: "Austria", latitude: 48.2082, longitude: 16.3738 },
    { city: "Brisbane", country: "Australia", latitude: -27.4698, longitude: 153.0251 },
    { city: "Porto", country: "Portugal", latitude: 41.1496, longitude: -8.6109 },
    { city: "Helsinki", country: "Finland", latitude: 60.1695, longitude: 24.9354 },
    { city: "Cairo", country: "Egypt", latitude: 30.0444, longitude: 31.2357 },
    { city: "Manila", country: "Philippines", latitude: 14.5995, longitude: 120.9842 },
    { city: "Düsseldorf", country: "Germany", latitude: 51.2217, longitude: 6.7762 },
    { city: "Lyon", country: "France", latitude: 45.7640, longitude: 4.8357 },
    { city: "Frankfurt", country: "Germany", latitude: 50.1109, longitude: 8.6821 },
    { city: "München", country: "Germany", latitude: 48.1351, longitude: 11.5820 },
    { city: "Bremen", country: "Germany", latitude: 53.0793, longitude: 8.8017 },
    { city: "Stuttgart", country: "Germany", latitude: 48.7758, longitude: 9.1829 },
    { city: "Milan", country: "Italy", latitude: 45.4654, longitude: 9.1866 },
    { city: "Geneva", country: "Switzerland", latitude: 46.2044, longitude: 6.1432 },
    { city: "Brussels", country: "Belgium", latitude: 50.8503, longitude: 4.3517 },
    { city: "Oslo", country: "Norway", latitude: 59.9139, longitude: 10.7522 },
    { city: "Naples", country: "Italy", latitude: 40.8518, longitude: 14.2681 },
    { city: "Budapest", country: "Hungary", latitude: 47.4979, longitude: 19.0402 },
    { city: "Warsaw", country: "Poland", latitude: 52.2297, longitude: 21.0122 },
    { city: "Sofia", country: "Bulgaria", latitude: 42.6977, longitude: 23.3219 },
    { city: "Tbilisi", country: "Georgia", latitude: 41.7151, longitude: 44.8271 },
];


// Function to get a random city
function getRandomCity() {
    const randomIndex = Math.floor(Math.random() * urbanizedCities.length);
    return urbanizedCities[randomIndex];
}

// Get a random city
const selectedCity = getRandomCity();

// Initialize the Leaflet map
// var map = L.map('map').setView([selectedCity.latitude, selectedCity.longitude], 12);

var map = L.map('map', {
    zoomControl: false, // Disable zoom control
    center: [selectedCity.latitude, selectedCity.longitude], // Set the initial center of the map
    zoom: 11, // Set the initial zoom level
    // detectRetina: true, 
    // zoomSnap: 0.2,
    // zoomDelta: 0.2,
});

let isZoomControlAdded = false;

if (isZoomControlAdded === false){
    var zoomControl = L.control.zoom({
        position: 'topleft' // or any other position you prefer
    }).addTo(map);
    isZoomControlAdded = true;
};

osmLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);


var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});



var CartoDB_PositronNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});


var CartoDB_Voyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});


// var Stadia_StamenTerrain = L.tileLayer(`https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.{ext}?api_key=${config.stadiaApiKey}`, {
// 	minZoom: 0,
// 	maxZoom: 18,
// 	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 	ext: 'png'
// });

// var Stadia_Outdoors = L.tileLayer(`https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.{ext}?api_key=${config.stadiaApiKey}`, {
// 	minZoom: 0,
// 	maxZoom: 20,
// 	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 	ext: 'png'
// });

// var Mapbox_1 = L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${config.mapboxAccessToken}`, {
//     id: 'the-unfallen/cm2adzs5l00sf01qv9lz6hke6',  // Your Mapbox style ID
//     // accessToken: 'pk.eyJ1IjoidGhlLXVuZmFsbGVuIiwiYSI6ImNtMmFpYTV5ZzBkc2Yya3IyNmR1dngweWEifQ.QgAsLihmA2rxYCaP-gp1sA',  // Your Mapbox access token
//     tileSize: 512,
//     zoomOffset: -1,
//     attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a>',
// });



var scaleControl = L.control.scale().addTo(map);

// Layer control
var baseLayers = {
    "Basic": osmLayer,
    "Topo": Esri_WorldTopoMap,
    "Image": Esri_WorldImagery,
    "Light Gray": CartoDB_PositronNoLabels,
    "Voyager": CartoDB_Voyager,
    // "Terrain": Stadia_StamenTerrain,
    // "Outdoors": Stadia_Outdoors,
    // "Monochrome": Mapbox_1,
};

var thisLayerControl = L.control.layers(baseLayers).addTo(map);
setMapCenterCords();



// Function to convert decimal degrees to DMS format
function toDMS(deg) {
    const d = Math.floor(deg);
    const minFloat = (deg - d) * 60;
    const m = Math.floor(minFloat);
    const secFloat = (minFloat - m) * 60;
    const s = secFloat.toFixed(1);
    
    return `${d}°${m}'${s}"`;
}

// Function to format latitude and longitude
function formatLatLng(lat, lng) {
    const latDMS = toDMS(Math.abs(lat));
    const latCardinal = lat >= 0 ? "N" : "S";
    
    const lngDMS = toDMS(Math.abs(lng));
    const lngCardinal = lng >= 0 ? "E" : "W";
    
    return `${latDMS}${latCardinal}   AND   ${lngDMS}${lngCardinal}`;
}

// function to reset coordinates of map center

function setMapCenterCords() {
	// Get the center of the map and convert to DMS
	var center = map.getCenter();
	var lat = center.lat;
	var lng = center.lng;
	var formattedLatLng = formatLatLng(lat, lng);
	document.getElementById("myCenter_coords").innerHTML = formattedLatLng;
}


// Get Center and Set City:
function getCenterAndSetCity() {
	var center = map.getCenter();
	getCityName(center.lat, center.lng);
}

getCenterAndSetCity();

map.on('moveend', setMapCenterCords);

//DEBOUNCING
let timeout;

map.on('moveend', function() {
    if (timeout) clearTimeout(timeout); // Clear the previous timeout if it exists

    timeout = setTimeout(function() {
        // Your function that should only run every 5 seconds
        getCenterAndSetCity();
    }, 3000); // Set a 3-second delay
});




// GETTING CITY NAME
function getCityName(lat, lon, retries = 0) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            console.log(data)
            if (window.innerWidth < 576) {
                // Small screens (e.g., mobile)
                document.getElementById("myCityName").style.fontSize = '36px';
                document.getElementById("myCountryName").style.fontSize = '22px';
                document.getElementById("myCenter_coords").style.fontSize = '12px';
                document.getElementById("myStateName").style.display = 'none';
            } else if (window.innerWidth > 576 && window.innerWidth <= 768) {
                document.getElementById("myCityName").style.fontSize = '48px';
            }  else {
                document.getElementById("myCityName").style.fontSize = "54px";
            }
            


            var cityName = data.address.city || data.address.town || data.address.village || "City";
            var stateName = data.address.state;
            var nameToDisplay;
            if (cityName === "City" && stateName) {
                nameToDisplay = stateName;
            } else {
                nameToDisplay = cityName;
            }

            var nameLength = nameToDisplay.length;

            // Adjust font size and truncate if necessary
            if (nameLength > 13) {
                if (window.innerWidth < 576) {
                    document.getElementById("myCityName").style.fontSize = "26px";
                } else if (window.innerWidth > 576 && window.innerWidth <= 768) {
                    document.getElementById("myCityName").style.fontSize = "43px";
                }
                else {
                    document.getElementById("myCityName").style.fontSize = "42px";
                }
                
                if (nameLength > 19) {
                    nameToDisplay = nameToDisplay.substring(0, 18) + ".";
                }
                if (window.innerWidth < 576 && nameLength > 19) {
                    document.getElementById("myCityName").style.fontSize = "26px";
                    nameToDisplay = nameToDisplay.substring(0, 18) + ".";
                }
                if (window.innerWidth > 576 && window.innerWidth <= 768 && nameLength > 19) {
                    document.getElementById("myCityName").style.fontSize = "38px";
                    nameToDisplay = nameToDisplay.substring(0, 18) + ".";
                }


            } 

            // Set the final city name
            document.getElementById("myCityName").innerHTML = nameToDisplay
            

            const countryName = data.address.country|| "Country";
            if (countryName.length > 19) {
                // countryName = countryName.substring(0, 18) + ".";
                document.getElementById("myCountryName").style.fontSize = "20px";
                document.getElementById("myCountryName").innerHTML = countryName;
            } else {
                document.getElementById("myCountryName").innerHTML = countryName;
            }
            
            
            if (!stateName || stateName === cityName) {
                document.getElementById("myStateName").style.display = 'none';
            }
            document.getElementById("myStateName").innerHTML = stateName;

            document.getElementById('edit_city').value = document.getElementById('myCityName').innerHTML;
        })
        .catch(error => {
            if (retries > 0) {
                console.warn('Retrying request...', retries);
                setTimeout(() => getCityName(lat, lon, retries - 1), 1000);
            } else {
                console.error('Failed to fetch city name:', error);
                document.getElementById("myCityName").innerHTML = "City";
				document.getElementById("myCountryName").innerHTML = "Country";
				document.getElementById("myStateName").innerHTML = "State Name";
            }
        });

        
}



// Create a custom control to display the zoom level
var ZoomLevelControl = L.Control.extend({
    // Define the control's position (e.g., 'topright', 'topleft', etc.)
    options: {
        position: 'bottomleft'
    },

    // Method to create the control DOM elements
    onAdd: function(map) {
        var zoomDiv = L.DomUtil.create('div', 'zoom-level-control');
        zoomDiv.innerHTML = 'Zoom Level: ' + map.getZoom().toFixed(2);
        this._zoomDiv = zoomDiv; // Store for later use
        return zoomDiv;
    },

    // Method called when the control is added to the map
    updateZoom: function(map) {
        this._zoomDiv.innerHTML = 'Zoom Level: ' + map.getZoom().toFixed(2);
    }
});

// Add the control to the map
var zoomLevelControl = new ZoomLevelControl();
map.addControl(zoomLevelControl);

// Update the zoom level whenever the map zoom changes
map.on('zoomend', function() {
    zoomLevelControl.updateZoom(map);
});

if (window.innerWidth < 576) {
    // Small screens (e.g., mobile)
    document.getElementById("myCityName").style.fontSize = '36px';
    document.getElementById("myCountryName").style.fontSize = '22px';
    document.getElementById("myCenter_coords").style.fontSize = '12px';
    document.getElementById("myStateName").style.display = 'none';
} else if (window.innerWidth > 576 && window.innerWidth <= 768) {
    document.getElementById("myCityName").style.fontSize = '48px';
} else {
    document.getElementById("myCityName").style.fontSize = "54px";
}


const search = new GeoSearch.GeoSearchControl({
    provider: new GeoSearch.OpenStreetMapProvider(),
    position: 'topleft',
    showMarker: false,
});

  
map.addControl(search);


document.getElementById('update_city_name_form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the input value
    let this_cityName = document.getElementById('edit_city').value;



    // Check the length of the input value
    if (this_cityName.length > 19) {
        this_cityName = this_cityName.substring(0, 19) + '.'; // Shorten the city name if longer than 19 characters
    }

    // Update the innerHTML of the div with id "myCityName"
    document.getElementById('myCityName').innerHTML = this_cityName;

    // Adjust font-size based on the length of the input
    if (this_cityName.length > 13 & window.innerWidth > 768) {
        document.getElementById('myCityName').style.fontSize = '42px'; // Set font-size to 42px
    } else {
        document.getElementById('myCityName').style.fontSize = ''; // Reset font-size if less than 13 characters
    }

    if (window.innerWidth < 576) {
        // Small screens (e.g., mobile)
        document.getElementById("myCityName").style.fontSize = '36px';

        if (window.innerWidth < 576 && this_cityName.length > 13) {
            document.getElementById("myCityName").style.fontSize = "26px";
        }

        // if (window.innerWidth < 576 && this_cityName.length > 19) {
        //     document.getElementById("myCityName").style.fontSize = "26px";
        // }

    } else if (window.innerWidth > 576 && window.innerWidth <= 768) {
        document.getElementById("myCityName").style.fontSize = '48px';
        if (this_cityName.length > 13 && this_cityName.length <= 19) {
            document.getElementById("myCityName").style.fontSize = '43px';
        } else if (this_cityName.length > 19) {
            document.getElementById("myCityName").style.fontSize = '38px';
        } 

    } else {
        document.getElementById("myCityName").style.fontSize = "54px";
    }







    document.getElementById('edit_city').value = '';
});



document.getElementById('update_state_name_form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the input value
    let this_stateName = document.getElementById('edit_state').value;
    document.getElementById("myStateName").style.display = 'block';
    // Check the length of the input value
    if (this_stateName.length > 30) {
        this_stateName = this_stateName.substring(0, 30) + '.'; // Shorten the city name if longer than 19 characters
    }

    // Update the innerHTML of the div with id "myCityName"
    document.getElementById('myStateName').innerHTML = this_stateName;

    document.getElementById('edit_state').value = '';
});



document.getElementById('printout_type').addEventListener('change', function() {
    var paperSize = document.getElementById('paper_type');
    var printoutType = document.getElementById('printout_type').value;
    if (printoutType === 'jpg' || printoutType === 'png') {
        paperSize.disabled = true;
        paperSize.style.backgroundColor = 'lightgray';
        paperSize.style.borderColor = 'lightgray';
    } else {
        paperSize.disabled = false;
        paperSize.style.backgroundColor = '';
        paperSize.style.borderColor = '';
    }
});


document.getElementById('mapOptionsForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from refreshing the page



    map.removeControl(search);
    map.removeControl(zoomLevelControl);
    map.removeControl(scaleControl);
    map.removeControl(thisLayerControl);
    map.removeControl(zoomControl);

    var mapBorder = document.getElementById('map_border');
    var printoutType = document.getElementById('printout_type').value || 'pdf';
    var mapQuality = document.getElementById('map_quality').value || 'standard';
    var paperType = document.getElementById('paper_type').value || 'a2';

    
    var scale = mapQuality === 'high' ? 4.0 : 2.4;
    
    // Generate map as PDF
    if (printoutType === 'pdf') {
        html2canvas(mapBorder, {
            useCORS: true,
            scale: 5,
            // scale: scale
        }).then(function(canvas) {
            var imgData = canvas.toDataURL('image/jpeg');
            const { jsPDF } = window.jspdf;
            var pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: paperType
            });
            pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height);
            var name_of_city = document.getElementById('myCityName').innerHTML;
            pdf.save(`map_poster_${name_of_city}.pdf`);

        }).catch(function(error) {
            console.error('Error generating PDF:', error);
        });
    } 
    // Generate map as JPEG or PNG
    else if (printoutType === 'jpg' || printoutType === 'png') {
        html2canvas(mapBorder, {
            useCORS: true,
            scale: 5,
            // scale: scale
        }).then(function(canvas) {
            var imgData = canvas.toDataURL(`image/${printoutType}`);
            var link = document.createElement('a');
            link.href = imgData;
            var name_of_city2 = document.getElementById('myCityName').innerHTML;
            link.download = `map_poster_${name_of_city2}.${printoutType}`;
            link.click();
        }).catch(function(error) {
            console.error('Error generating image:', error);
        });
    }
    
    map.addControl(search);
    map.addControl(zoomLevelControl);
    map.addControl(scaleControl);
    map.addControl(thisLayerControl);
    map.addControl(zoomControl);

    document.getElementById("printout_type").selectedIndex = 0;
    document.getElementById("map_quality").selectedIndex = 0;
    document.getElementById("paper_type").selectedIndex = 0;

});



window.addEventListener('resize', function() {
    var mapElement = document.getElementById('map');
    var width = mapElement.offsetWidth;
    mapElement.style.height = width + 'px';
    if (window.innerWidth < 1200) {
        document.getElementById('how_to_div').style.display = 'none';
    } else {
        document.getElementById('how_to_div').style.display = 'block';
    }
});

// Set the initial size
window.dispatchEvent(new Event('resize'));


if (window.innerWidth < 1200) {
    document.getElementById('how_to_div').style.display = 'none';
} else {
    document.getElementById('how_to_div').style.display = 'block';
}