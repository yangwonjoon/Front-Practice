import logo from './logo.svg';
import './App.css';
import React, { useEffect } from "react";

function App() {

  const { kakao } = window;

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5540720468966, 126.920603903509),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    var marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(37.5540720468966, 126.920603903509), // 마커의 좌표
      map: map
    });
  }, []);


  return (
    <div className="App">
      <div id="map" style={{ width: "100%", height: "100vh" }}></div>
    </div >
  );
}

export default App;
