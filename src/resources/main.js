
var map;

DG.then(function () {
    map = DG.map('map', {
        center: [51.532351, 46.020435],
        zoom: 18
    });
    // DG.marker([51.532351, 46.020435]).addTo(map).bindPopup('Режим работы: 08:00 - 20:00');
    var myIcon = DG.icon({
        iconUrl: '../images/iconBell.png',
        iconSize: [30, 30],
        iconAnchor: [0, 35],
        popupAnchor: [-20, -20],
        shadowAnchor: [22, 94]
    });
    
    DG.marker([51.532351, 46.020435], {icon: myIcon}).addTo(map).bindPopup('Режим&nbsp;работы: <br> 08:00 - 20:00');
});
