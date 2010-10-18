function EmbeddedMap(canvas, options) {
    this.options = options;
    this.gmap = new google.maps.Map(document.getElementById(canvas), options);
    
    this.geocoder = new google.maps.Geocoder();
    this.dirfinder = new google.maps.DirectionsService();    

    this.dirrender = new google.maps.DirectionsRenderer();
    this.dirrender.setMap(this.gmap);
    
    /* Google Maps API function wrappers: */
    this.setZoom = setZoom;
    this.setCenter = setCenter;
    this.addMarker = addMarker;
    
    /* functions that receive street addresses instead of LatLngs: */
    this.drawLocation = drawLocation;
    this.drawLocationCentered = drawLocationCentered;
    this.drawDirections = drawDirections;

    /* Callbacks for when Google Maps responses arrive: */
    var self = this;
    
    this.drawLocationCenteredCallback = function(response, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            self.setCenter(response[0].geometry.location);
            self.addMarker(response[0].geometry.location);
            
        } else {
            /* Do something? */
        }
    }
    
    this.drawLocationCallback = function(response, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            self.addMarker(response[0].geometry.location);
            
        } else {
            /* Do something? */
        }
    }
    
    this.drawDirectionsCallback = function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            self.dirrender.setDirections(response);
            
        } else {
            /* Do something? */
        }
    }
}

function setZoom(zoom) { }

function setCenter(latlng) {
    this.gmap.setCenter(latlng);
}

function addMarker(latlng) {
    /* [TODO] keep track of markers? */    
    return new google.maps.Marker({
        map: this.gmap, 
        position: latlng
    });
}

function drawLocation(address) {
    var request = { 'address': address };
    this.geocoder.geocode(request, this.drawLocationCallback);
}


function drawLocationCentered(address) {
    var request = { 'address': address };
    this.geocoder.geocode(request, this.drawLocationCenteredCallback);
}

function drawDirections(address1, address2) {

   var request = {
        origin: address1, 
        destination: address2,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    
    this.dirfinder.route(request, this.drawDirectionsCallback);
}

function newMapOptions(zoom) {

        return { zoom:          zoom,
                         center:        new google.maps.LatLng(37.0625,-95.677068),
                         mapTypeId: google.maps.MapTypeId.ROADMAP
                   }
}