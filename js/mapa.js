//---------- javascript para el MAPA DINAMICO ----------

navigator.geolocation.getCurrentPosition(function(position){
    let latitude = position.coords.latitude; 
    let longitude = position.coords.longitude;
    let map = L.map('mapa', {
        center: [latitude, longitude],
        zoom: 17
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let control = L.Routing.control({
        waypoints: [
            L.latLng(36.54529, -4.61808),
            L.latLng(latitude, longitude)
            
        ],
        language: 'es',
        show: false 
    }).addTo(map);

    let marker = L.marker([36.54529, -4.61808]).bindPopup("Aquí esta la tienda").openPopup().addTo(map);
    let marcador = L.marker([latitude, longitude]).bindPopup("Aquí estas tú").openPopup().addTo(map);
});



