//[ https://apis.map.kakao.com/web/sample/addMapClickEventWithMarker/ 클릭한 위치에 마커 표시하기]
var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 지도 중앙에 표출할 마커입니다
var marker = new kakao.maps.Marker({
  // 지도 중심좌표에 마커를 생성합니다
  position: map.getCenter(),
});
// 지도에 마커를 표시합니다
marker.setMap(map);