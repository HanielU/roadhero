<script lang="ts">
  import "mapbox-gl/dist/mapbox-gl.css";
  import mapboxgl, { Map, GeoJSONSource, type LngLatLike, Marker } from "mapbox-gl";
  import { onMount } from "svelte";
  import MapSearch from "./MapSearch.svelte";
  import { modalState } from "$lib/stores";

  type Coordinates = [number, number];

  let mapPresent = false;
  let currentPos: Coordinates = [0, 0];
  let map: Map;

  const addMarker = (map: Map, location: LngLatLike) => new Marker().setLngLat(location).addTo(map);

  // create a function to make a directions request
  async function getRoute(end: Coordinates) {
    // make a directions request using cycling profile
    // an arbitrary start will always be the same
    // only the end or destination will change

    const query = await fetch(
      // @ts-ignore
      `https://api.mapbox.com/directions/v5/mapbox/driving/${currentPos[0]},${currentPos[1]};${end[0]},${end[1]}?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=${mapboxgl.accessToken}`
    );

    const json = await query.json();
    const data = json.routes[0];
    const route = data.geometry.coordinates;
    const geojson: GeoJSON.Feature<GeoJSON.Geometry> = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: route,
      },
    };
    // if the route already exists on the map, we'll reset it using setData
    if (map.getSource("route")) {
      (<GeoJSONSource>map.getSource("route")).setData(geojson);
    }
    // otherwise, we'll make a new request
    else {
      map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: geojson,
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#3887be",
          "line-width": 5,
          "line-opacity": 0.75,
        },
      });
    }
  }

  onMount(() => {
    try {
      mapboxgl.accessToken =
        "pk.eyJ1Ijoia2luZ2ltb2giLCJhIjoiY2xhdjVmNWIwMDJnazNxc2o3aW14bHJseCJ9._HBlCjjOJ5fD-y6OoRqI0Q";

      if (!mapPresent) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError, {
          enableHighAccuracy: true,
        });
      }

      function onSuccess(position: GeolocationPosition) {
        let supposedCurrentPos: Coordinates = [position.coords.longitude, position.coords.latitude];
        setupMap(supposedCurrentPos);
      }

      function onError() {
        let bazeUniversityBlockDLibrary = [7.405533646178658, 9.006449673032344];
        let bazeUniversity: Coordinates = [7.405952340281745, 9.007773176138375];
        setupMap(bazeUniversity);
      }

      function setupMap(center: Coordinates) {
        currentPos = center;

        map = new Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v11",
          center: currentPos,
          zoom: 14,
        });

        addMarker(map, currentPos);

        // Add zoom and rotation controls to the map.
        map.addControl(new mapboxgl.NavigationControl()); // defaults to top-right

        map.on("load", () => {
          // make an initial directions request that
          // starts and ends at the same location
          getRoute(currentPos);
          mapPresent = true;

          // Add starting point to the map
          map.addLayer({
            id: "point",
            type: "circle",
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    properties: {},
                    geometry: {
                      type: "Point",
                      coordinates: currentPos,
                    },
                  },
                ],
              },
            },
            paint: {
              "circle-radius": 10,
              "circle-color": "#3887be",
            },
          });
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
</script>

<div class="square-full relative z-1">
  <div class="square-full" id="map">
    {#if !mapPresent}
      <div class="square-full text-center">Loading map</div>
    {/if}
  </div>
</div>
<MapSearch />

<!-- <absolute-bottom-right>
  <button
    class="btn btn-primary"
    on:click={() => {
      modalState.set({
        show: true,
        title: "Search for a location",
        body: MapSearch,
      });
    }}
  >
    Search
  </button>
</absolute-bottom-right> -->
