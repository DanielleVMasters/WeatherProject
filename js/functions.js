mapboxgl.accessToken = mapboxkey;
const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-98.495141, 29.4246],
    zoom: 10
});

const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.495141, 29.4246])
    .addTo(map);

const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

let lat = 29.4246;
let long = -98.495141;
$.get("http://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ long +"&appid=" + openweatherkey + "&units=imperial").done(function(data) {
    let reports = data.list;
    for(let i = 0; i < reports.length; i += 8) {
        var row = $('<dl class="card d-flex flex-column border border-info"><dt class="card-header"><strong>' + reports[0].dt_txt+ '</strong></dt><dd id="temp" class="card-body">' + reports[0].main.temp_min + "°F" + " / " + reports[0].main.temp_max + "°F" + '</dd><dd id="weather" class="card-body">' + reports[0].weather[0].description + '</dd><dd class="align card-body">' + "Humidity: " + reports[0].main.humidity + '</dd><dd class="align card-body">' + "Wind: " + reports[0].wind.speed + '</dd><dd class="align card-body">' + "Pressure: " + reports[0].main.pressure + '</dd></dl><br>' + '<dl class="card d-flex flex-column border border-info"><dt class="card-header"><strong>' + reports[1].dt_txt+ '</strong></dt><dd id="temp" class="card-body">' + reports[1].main.temp_min + "°F" + " / " + reports[1].main.temp_max + "°F" + '</dd><dd id="weather" class="card-body">' + reports[1].weather[0].description + '</dd><dd class="align card-body">' + "Humidity: " + reports[1].main.humidity + '</dd><dd class="align card-body">' + "Wind: " + reports[1].wind.speed + '</dd><dd class="align card-body">' + "Pressure: " + reports[1].main.pressure + '</dd></dl><br>' + '<dl class="card d-flex flex-column border border-info"><dt class="card-header"><strong>' + reports[2].dt_txt+ '</strong></dt><dd id="temp" class="card-body">' + reports[2].main.temp_min + "°F" + " / " + reports[2].main.temp_max + "°F" + '</dd><dd id="weather" class="card-body">' + reports[2].weather[0].description + '</dd><dd class="align card-body">' + "Humidity: " + reports[2].main.humidity + '</dd><dd class="align card-body">' + "Wind: " + reports[2].wind.speed + '</dd><dd class="align card-body">' + "Pressure: " + reports[2].main.pressure + '</dd></dl><br>' + '<dl class="card d-flex flex-column border border-info"><dt class="card-header"><strong>' + reports[3].dt_txt+ '</strong></dt><dd id="temp" class="card-body">' + reports[3].main.temp_min + "°F" + " / " + reports[3].main.temp_max + "°F" + '</dd><dd id="weather" class="card-body">' + reports[3].weather[0].description + '</dd><dd class="align card-body">' + "Humidity: " + reports[3].main.humidity + '</dd><dd class="align card-body">' + "Wind: " + reports[3].wind.speed + '</dd><dd class="align card-body">' + "Pressure: " + reports[3].main.pressure + '</dd></dl><br>' + '<dl class="card d-flex flex-column border border-info"><dt class="card-header"><strong>' + reports[4].dt_txt+ '</strong></dt><dd id="temp" class="card-body">' + reports[4].main.temp_min + "°F" + " / " + reports[4].main.temp_max + "°F" + '</dd><dd id="weather" class="card-body">' + reports[4].weather[0].description + '</dd><dd class="align card-body">' + "Humidity: " + reports[4].main.humidity + '</dd><dd class="align card-body">' + "Wind: " + reports[4].wind.speed + '</dd><dd class="align card-body">' + "Pressure: " + reports[4].main.pressure + '</dd></dl><br>' );

        $('#weather').html(row);
    }
});


function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
    let lat = `${lngLat.lat}`;
    let long = `${lngLat.lng}`;
    $.get("http://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ long +"&appid=" + openweatherkey + "&units=imperial").done(function(data) {
        let reports = data.list;
        for(let i = 0; i < reports.length; i += 8) {
            var row = $('<dl class="card d-flex flex-column border border-info"><dt class="card-header"><strong>' + reports[0].dt_txt+ '</strong></dt><dd id="temp" class="card-body">' + reports[0].main.temp_min + "°F" + " / " + reports[0].main.temp_max + "°F" + '</dd><dd id="weather" class="card-body">' + reports[0].weather[0].description + '</dd><dd class="align card-body">' + "Humidity: " + reports[0].main.humidity + '</dd><dd class="align card-body">' + "Wind: " + reports[0].wind.speed + '</dd><dd class="align card-body">' + "Pressure: " + reports[0].main.pressure + '</dd></dl><br>' + '<dl class="card d-flex flex-column border border-info"><dt class="card-header"><strong>' + reports[1].dt_txt+ '</strong></dt><dd id="temp" class="card-body">' + reports[1].main.temp_min + "°F" + " / " + reports[1].main.temp_max + "°F" + '</dd><dd id="weather" class="card-body">' + reports[1].weather[0].description + '</dd><dd class="align card-body">' + "Humidity: " + reports[1].main.humidity + '</dd><dd class="align card-body">' + "Wind: " + reports[1].wind.speed + '</dd><dd class="align card-body">' + "Pressure: " + reports[1].main.pressure + '</dd></dl><br>' + '<dl class="card d-flex flex-column border border-info"><dt class="card-header"><strong>' + reports[2].dt_txt+ '</strong></dt><dd id="temp" class="card-body">' + reports[2].main.temp_min + "°F" + " / " + reports[2].main.temp_max + "°F" + '</dd><dd id="weather" class="card-body">' + reports[2].weather[0].description + '</dd><dd class="align card-body">' + "Humidity: " + reports[2].main.humidity + '</dd><dd class="align card-body">' + "Wind: " + reports[2].wind.speed + '</dd><dd class="align card-body">' + "Pressure: " + reports[2].main.pressure + '</dd></dl><br>' + '<dl class="card d-flex flex-column border border-info"><dt class="card-header"><strong>' + reports[3].dt_txt+ '</strong></dt><dd id="temp" class="card-body">' + reports[3].main.temp_min + "°F" + " / " + reports[3].main.temp_max + "°F" + '</dd><dd id="weather" class="card-body">' + reports[3].weather[0].description + '</dd><dd class="align card-body">' + "Humidity: " + reports[3].main.humidity + '</dd><dd class="align card-body">' + "Wind: " + reports[3].wind.speed + '</dd><dd class="align card-body">' + "Pressure: " + reports[3].main.pressure + '</dd></dl><br>' + '<dl class="card d-flex flex-column border border-info"><dt class="card-header"><strong>' + reports[4].dt_txt+ '</strong></dt><dd id="temp" class="card-body">' + reports[4].main.temp_min + "°F" + " / " + reports[4].main.temp_max + "°F" + '</dd><dd id="weather" class="card-body">' + reports[4].weather[0].description + '</dd><dd class="align card-body">' + "Humidity: " + reports[4].main.humidity + '</dd><dd class="align card-body">' + "Wind: " + reports[4].wind.speed + '</dd><dd class="align card-body">' + "Pressure: " + reports[4].main.pressure + '</dd></dl><br>' );

            $('#weather').html(row);
        }
    });
}

marker.on('dragend', onDragEnd)
