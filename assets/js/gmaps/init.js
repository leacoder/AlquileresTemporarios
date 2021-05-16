(function ($) {
    "use strict";

    /* ============================================= */
    /* ==== GOOGLE MAP ==== */

    function initmap() {
        if (($(".ct-js-googleMap").length > 0) && (typeof google === 'object' && typeof google.maps === 'object')) {
            $('.ct-js-googleMap').each(function () {
                var atcenter = "";
                var $this = $(this);
                var location = $this.data("location");
                var zoom = $this.data("zoom");

                var offset = -30;

                if (validatedata($this.data("offset"))) {
                    offset = $this.data("offset");
                }

                var $drag = true;

                if(device.mobile() || device.tablet() || ($devicewidth < 768)){
                    $drag = false;
                }

                if (validatedata(location)) {
                    $this.gmap3({
                        marker: {
                            //latLng: [40.616439, -74.035540],
                            address: location,
                            options: {
                                visible: false
                            },
                            callback: function (marker) {
                                atcenter = marker.getPosition();
                            }
                        }, map: {
                            options: {
                                //maxZoom:11,
                                zoom: zoom,
                                mapTypeId: google.maps.MapTypeId.TERRAIN, // ('ROADMAP', 'SATELLITE', 'HYBRID','TERRAIN');
                                scrollwheel: false,
                                disableDoubleClickZoom: false,
                                draggable: $drag, //disableDefaultUI: true,
                                mapTypeControlOptions: {
                                    //mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID],
                                    //style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                                    //position: google.maps.ControlPosition.RIGHT_CENTER
                                    mapTypeIds: []
                                }
                            }, events: {
                                idle: function () {
                                    if (!$this.data('idle')) {
                                        $this.gmap3('get').panBy(0, offset);
                                        $this.data('idle', true);
                                    }
                                }
                            }
                        },
                        overlay:{
                            address:location,
                            options:{
                                content:
                                "<div class='ct-googleMaps-infoBox'> \
                                    <div class='media'>\
                                        <div class='media-left'>\
                                            <a href='#'>\
                                                <img class='media-object' src='./assets/images/content/country-googlemap-item.jpg' alt='Google Map Result'>\
                                            </a>\
                                        </div>\
                                        <div class='media-body'>\
                                            <h4 class='media-heading'>Buenos Aires, San Telmo.</h4>\
                                            <address>\
                                                Bernardo de Irigoyen 1378<br>\
                                                San telmo, Buenos Aires. \
                                            </address>\
                                            <ul class='list-unstyled'>\
                                                <li><i class='fa fa-fw fa-clock-o'></i>Lu a Vi: 10:00 am - 6:00pm</li>\
                                                <li><i class='fa fa-fw fa-phone'></i>Cel: 11-5012-9869</li>\
                                                <li><i class='fa fa-fw fa-envelope'></i>Mail: info@alquilerestemporarios.com.ar</li>\
                                            </ul>\
                                        </div>\
                                    </div>\
                                </div>",
                                offset:{
                                    y:-220,
                                    x:-178
                                }
                            }
                        }
                        //},"autofit"
                    });

                    // center on resize
                    google.maps.event.addDomListener(window, "resize", function () {
                        //var userLocation = new google.maps.LatLng(53.8018,-1.553);
                        setTimeout(function () {
                            $this.gmap3('get').setCenter(atcenter);
                            $this.gmap3('get').panBy(0, offset);
                        }, 400);

                    });

                    // set height
                    $this.css("min-height", $this.data("height") + "px");
                }

                if ($this.parent().parent().hasClass('hidemap')) {
                    $this.parent().animate({height: '0px'}, 500);
                }

            })
        }

    }

    function initmapcasabarracas() {
        if (($(".ct-js-googleMapbarracas").length > 0) && (typeof google === 'object' && typeof google.maps === 'object')) {
            $('.ct-js-googleMapbarracas').each(function () {
                var atcenter = "";
                var $this = $(this);
                var location = $this.data("location");
                var zoom = $this.data("zoom");

                var offset = -30;

                if (validatedata($this.data("offset"))) {
                    offset = $this.data("offset");
                }

                var $drag = true;

                if(device.mobile() || device.tablet() || ($devicewidth < 768)){
                    $drag = false;
                }

                if (validatedata(location)) {
                    $this.gmap3({
                        marker: {
                            //latLng: [40.616439, -74.035540],
                            address: location,
                            options: {
                                visible: false
                            },
                            callback: function (marker) {
                                atcenter = marker.getPosition();
                            }
                        }, map: {
                            options: {
                                //maxZoom:11,
                                zoom: zoom,
                                mapTypeId: google.maps.MapTypeId.TERRAIN, // ('ROADMAP', 'SATELLITE', 'HYBRID','TERRAIN');
                                scrollwheel: false,
                                disableDoubleClickZoom: false,
                                draggable: $drag, //disableDefaultUI: true,
                                mapTypeControlOptions: {
                                    //mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID],
                                    //style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                                    //position: google.maps.ControlPosition.RIGHT_CENTER
                                    mapTypeIds: []
                                }
                            }, events: {
                                idle: function () {
                                    if (!$this.data('idle')) {
                                        $this.gmap3('get').panBy(0, offset);
                                        $this.data('idle', true);
                                    }
                                }
                            }
                        },
                        overlay:{
                            address:location,
                            options:{
                                content:
                                "<div class='ct-googleMaps-infoBox'> \
                                    <div class='media'>\
                                        <div class='media-left'>\
                                            <a href='#'>\
                                                <img class='media-object' src='./assets/images/content/country-googlemap-item3.jpg' alt='Google Map Result'>\
                                            </a>\
                                        </div>\
                                        <div class='media-body'>\
                                            <h4 class='media-heading'>Buenos Aires, Barracas.</h4>\
                                            <address>\
                                                Saurez 1169<br>\
                                                CP. C1162 AFE , Buenos Aires, CABA\
                                            </address>\
                                            <ul class='list-unstyled'>\
                                                <li><i class='fa fa-fw fa-clock-o'></i>Lu a Vi: 10:00am - 6:00pm</li>\
                                                <li><i class='fa fa-fw fa-phone'></i>Cel: 11-5012-9869</li>\
                                                <li><i class='fa fa-fw fa-envelope'></i> Mail: info@alquilerestemporarios.com.ar</li>\
                                            </ul>\
                                        </div>\
                                    </div>\
                                </div>",
                                offset:{
                                    y:-220,
                                    x:-178
                                }
                            }
                        }
                        //},"autofit"
                    });

                    // center on resize
                    google.maps.event.addDomListener(window, "resize", function () {
                        //var userLocation = new google.maps.LatLng(53.8018,-1.553);
                        setTimeout(function () {
                            $this.gmap3('get').setCenter(atcenter);
                            $this.gmap3('get').panBy(0, offset);
                        }, 400);

                    });

                    // set height
                    $this.css("min-height", $this.data("height") + "px");
                }

                if ($this.parent().parent().hasClass('hidemap')) {
                    $this.parent().animate({height: '0px'}, 500);
                }

            })
        }

    }
    function initmapgalpon() {
        if (($(".ct-js-googleMapGalpon").length > 0) && (typeof google === 'object' && typeof google.maps === 'object')) {
            $('.ct-js-googleMapGalpon').each(function () {
                var atcenter = "";
                var $this = $(this);
                var location = $this.data("location");
                var zoom = $this.data("zoom");

                var offset = -30;

                if (validatedata($this.data("offset"))) {
                    offset = $this.data("offset");
                }

                var $drag = true;

                if(device.mobile() || device.tablet() || ($devicewidth < 768)){
                    $drag = false;
                }

                if (validatedata(location)) {
                    $this.gmap3({
                        marker: {
                            //latLng: [40.616439, -74.035540],
                            address: location,
                            options: {
                                visible: false
                            },
                            callback: function (marker) {
                                atcenter = marker.getPosition();
                            }
                        }, map: {
                            options: {
                                //maxZoom:11,
                                zoom: zoom,
                                mapTypeId: google.maps.MapTypeId.TERRAIN, // ('ROADMAP', 'SATELLITE', 'HYBRID','TERRAIN');
                                scrollwheel: false,
                                disableDoubleClickZoom: false,
                                draggable: $drag, //disableDefaultUI: true,
                                mapTypeControlOptions: {
                                    //mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID],
                                    //style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                                    //position: google.maps.ControlPosition.RIGHT_CENTER
                                    mapTypeIds: []
                                }
                            }, events: {
                                idle: function () {
                                    if (!$this.data('idle')) {
                                        $this.gmap3('get').panBy(0, offset);
                                        $this.data('idle', true);
                                    }
                                }
                            }
                        },
                        overlay:{
                            address:location,
                            options:{
                                content:
                                "<div class='ct-googleMaps-infoBox'> \
                                    <div class='media'>\
                                        <div class='media-left'>\
                                            <a href='#'>\
                                                <img class='media-object' src='./assets/images/content/country-googlemap-item1.jpg' alt='Google Map Result'>\
                                            </a>\
                                        </div>\
                                        <div class='media-body'>\
                                            <h4 class='media-heading'>Buenos Aires, Barracas.</h4>\
                                            <address>\
                                                Gral. Gregorio Aráoz de Lamadrid 1468<br>\
                                                CP. C1267AAD, CABA \
                                            </address>\
                                            <ul class='list-unstyled'>\
                                                <li><i class='fa fa-fw fa-clock-o'></i>Lu a Vi: 10:00am - 6:00pm</li>\
                                                <li><i class='fa fa-fw fa-phone'></i>Cel: 11-5012-9869</li>\
                                                <li><i class='fa fa-fw fa-envelope'></i> Mail: info@alquilerestemporarios.com.ar</li>\
                                            </ul>\
                                        </div>\
                                    </div>\
                                </div>",
                                offset:{
                                    y:-220,
                                    x:-178
                                }
                            }
                        }
                        //},"autofit"
                    });

                    // center on resize
                    google.maps.event.addDomListener(window, "resize", function () {
                        //var userLocation = new google.maps.LatLng(53.8018,-1.553);
                        setTimeout(function () {
                            $this.gmap3('get').setCenter(atcenter);
                            $this.gmap3('get').panBy(0, offset);
                        }, 400);

                    });

                    // set height
                    $this.css("min-height", $this.data("height") + "px");
                }

                if ($this.parent().parent().hasClass('hidemap')) {
                    $this.parent().animate({height: '0px'}, 500);
                }

            })
        }

    }
    function initmapsantateresita() {
        if (($(".ct-js-googleMapsantateresita").length > 0) && (typeof google === 'object' && typeof google.maps === 'object')) {
            $('.ct-js-googleMapsantateresita').each(function () {
                var atcenter = "";
                var $this = $(this);
                var location = $this.data("location");
                var zoom = $this.data("zoom");

                var offset = -30;

                if (validatedata($this.data("offset"))) {
                    offset = $this.data("offset");
                }

                var $drag = true;

                if(device.mobile() || device.tablet() || ($devicewidth < 768)){
                    $drag = false;
                }

                if (validatedata(location)) {
                    $this.gmap3({
                        marker: {
                            //latLng: [40.616439, -74.035540],
                            address: location,
                            options: {
                                visible: false
                            },
                            callback: function (marker) {
                                atcenter = marker.getPosition();
                            }
                        }, map: {
                            options: {
                                //maxZoom:11,
                                zoom: zoom,
                                mapTypeId: google.maps.MapTypeId.TERRAIN, // ('ROADMAP', 'SATELLITE', 'HYBRID','TERRAIN');
                                scrollwheel: false,
                                disableDoubleClickZoom: false,
                                draggable: $drag, //disableDefaultUI: true,
                                mapTypeControlOptions: {
                                    //mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID],
                                    //style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                                    //position: google.maps.ControlPosition.RIGHT_CENTER
                                    mapTypeIds: []
                                }
                            }, events: {
                                idle: function () {
                                    if (!$this.data('idle')) {
                                        $this.gmap3('get').panBy(0, offset);
                                        $this.data('idle', true);
                                    }
                                }
                            }
                        },
                        overlay:{
                            address:location,
                            options:{
                                content:
                                "<div class='ct-googleMaps-infoBox'> \
                                    <div class='media'>\
                                        <div class='media-left'>\
                                            <a href='#'>\
                                                <img class='media-object' src='./assets/images/content/country-googlemap-item2.jpg' alt='Google Map Result'>\
                                            </a>\
                                        </div>\
                                        <div class='media-body'>\
                                            <h4 class='media-heading'>Santa Teresita, Buenos Aires.</h4>\
                                            <address>\
                                            Calle 30 N° 244 ENTRE 2 Y 3, 1º Piso - DEPARTAMENTO 9\
                                            <br>\
                                                (B7107) SANTA TERESITA \
                                            </address>\
                                            <ul class='list-unstyled'>\
                                                <li><i class='fa fa-fw fa-clock-o'></i>Lu a Vi: 10:00am - 6:00pm</li>\
                                                <li><i class='fa fa-fw fa-phone'></i>Cel: 11-5012-9869</li>\
                                                <li><i class='fa fa-fw fa-envelope'></i> Mail: info@alquilerestemporarios.com.ar</li>\
                                            </ul>\
                                        </div>\
                                    </div>\
                                </div>",
                                offset:{
                                    y:-220,
                                    x:-178
                                }
                            }
                        }
                        //},"autofit"
                    });

                    // center on resize
                    google.maps.event.addDomListener(window, "resize", function () {
                        //var userLocation = new google.maps.LatLng(53.8018,-1.553);
                        setTimeout(function () {
                            $this.gmap3('get').setCenter(atcenter);
                            $this.gmap3('get').panBy(0, offset);
                        }, 400);

                    });

                    // set height
                    $this.css("min-height", $this.data("height") + "px");
                }

                if ($this.parent().parent().hasClass('hidemap')) {
                    $this.parent().animate({height: '0px'}, 500);
                }

            })
        }

    }
    initmapgalpon();
    initmap();
    initmapsantateresita();
    initmapcasabarracas();
})(jQuery);