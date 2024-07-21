<script>
    let mapToken = "<%= process.env.MAP_TOKEN %>";
    console.log(mapToken);
	mapboxgl.accessToken = mapToken;
    
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: "mapbox://styles/mapbox/streets-v12", //style url
        center: [-74.5, 40], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });
</script>

<% if(listing.reviews.length > 0) { %>



    <div class="col-6 offset-3 mb-3">
    <h3>Where you'll be</h3>
    <div id="map">
</div>