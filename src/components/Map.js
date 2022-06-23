import style from "../styles/Map.module.css";
import { useState, useEffect, useRef, useCallback } from "react";
import useStore from "../store/store.js";
import logo from "../images/logo.png";

const { kakao } = window;

function Map() {
  function getLocation() {
    let lat, long;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        map.setCenter(new kakao.maps.LatLng(lat, long));
        const markerPosition = new kakao.maps.LatLng(lat, long);
        const marker = new kakao.maps.Marker({
          position: markerPosition
        });
        marker.setMap(map);
      }, function (error) {
        console.error(error);
      }, {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity
      });
    } else {
      alert('GPS를 지원하지 않습니다');
      return;
    }
  }
  // getLocation();

  const { storeList, setCurrentStore } = useStore();
  const [map, setMap] = useState(null);
  const mapEle = useRef();

  const markStore = useCallback((storeList) => {
    const imageSize = new kakao.maps.Size(24, 35);
    const markerImage = new kakao.maps.MarkerImage("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", imageSize);
    storeList.forEach(ele => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(ele.lat, ele.long),
        title: ele.name,
        image: markerImage,
        clickable: true
      });
      kakao.maps.event.addListener(marker, 'click', () => {
        setCurrentStore(ele);
      });
    })
  }, [map]);

  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(37.3235993369, 127.0773597443),
      level: 3,
    }
    setMap(new kakao.maps.Map(mapEle.current, options));
    return () => { };
  }, []);

  useEffect(() => {
    markStore(storeList);
  }, [markStore, storeList]);

  return (
    <div className={style.mapContainer}>
      <div className={style.map} ref={mapEle}></div>
    </div>
  )
}

export default Map;