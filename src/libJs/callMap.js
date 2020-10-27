function initMap() {
    var uluru = {lat: 50.428201, lng: 30.592922};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 17,
            center: uluru,
            disableDefaultUI: true,
            styles: []
        });
    var marker_foo = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: '../img/mark.png'
    });
}