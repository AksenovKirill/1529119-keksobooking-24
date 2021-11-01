import { inputForAddress } from './form.js';
import {createOfferElement} from './markUp.js';

const ZOOM_LEVEL = 12;

let mapContainer, markerGroup;

const tokyoCoordinates = {
  lat: 35.67555,
  lng: 139.75333,
};

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  tokyoCoordinates,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const pinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const createMap = (mapLoad) => {
  mapContainer = L.map('map-canvas')
    .on('load', mapLoad)
    .setView(tokyoCoordinates, ZOOM_LEVEL);
  inputForAddress.value = `Lat: ${tokyoCoordinates.lat}; Lng: ${tokyoCoordinates.lng}`;

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
    foo: 'bar',
    attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(mapContainer);

  mainMarker.addTo(mapContainer)
    .on('moveend', (evt) => {
      const point = evt.target.getLatLng();
      inputForAddress.value = `Lat: ${point.lat.toFixed(5)}; Lng: ${point.lng.toFixed(5)}`;
    });

  markerGroup = L.layerGroup().addTo(mapContainer);
};

const createMarker = (offers) => {
  offers.forEach((offer) => {
    const otherMarkers = L.marker(
      {
        lat: offer.location.lat,
        lng: offer.location.lng,
      },
      {
        pinIcon,
      },
    );
    return otherMarkers;
  });};

const createMarkers = (offers) => {
  markerGroup.clearLayers();
  offers.forEach(createMarker);
};

const setMarkers = () => {
  mainMarker.setLatLng(tokyoCoordinates);
  mapContainer.setView(tokyoCoordinates, ZOOM_LEVEL);
};

export {createMap,createMarker, createMarkers, setMarkers, tokyoCoordinates, mapContainer};
