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

const createMap = (mapLoad, offers) => {
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

  offers.forEach((offer) => {
    const otherIcons = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const otherMarkers = L.marker(
      {
        lat: offer.address.lat,
        lng: offer.address.lng,
      },
      {
        otherIcons,
      },
    );
    otherMarkers.addTo(markerGroup)
      .bindPopup(((createOfferElement(offer))),
        { keepInView: true },
      );
  });
};

//перенос метки и масштаба при отчистке формы
const setMarkers = () => {
  mainMarker.setLatLng(tokyoCoordinates);
  mapContainer.setView(tokyoCoordinates, ZOOM_LEVEL);
};

export {createMap, setMarkers};
