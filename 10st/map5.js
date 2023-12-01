//[ https://apis.map.kakao.com/web/sample/addMapClickEventWithMarker/ 클릭한 위치에 마커 표시하기]
var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 지도를 클릭한 위치에 표출할 마커입니다
var marker = new kakao.maps.Marker({
  // 지도 중심좌표에 마커를 생성합니다
  position: map.getCenter(),
});
// 지도에 마커를 표시합니다
marker.setMap(map);

// 지도에 클릭 이벤트를 등록합니다
// 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
kakao.maps.event.addListener(map, "click", async function (event) {
  // 클릭한 위도, 경도 정보를 가져옵니다
  var latlng = event.latLng;
  console.log(latlng);

  // 마커 위치를 클릭한 위치로 옮깁니다
  marker.setPosition(latlng);

  // [ https://openweathermap.org/current 날씨API ]

  const API_KEY = "022c44fda65f777ac64bc741ad25b005";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlng.getLat()}&lon=${latlng.getLng()}&appid=${API_KEY}`;
  const weatherData = await (await fetch(url)).json();
  const city = weatherData.weather[0].main;
  const weather = weatherData.name;

  // [ https://apis.map.kakao.com/web/sample/addMarkerClickEvent/ 마커에 클릭 이벤트 등록하기]

  // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
  var iwContent = `<div style="padding:5px;">도시명 : ${city}</div><div style="padding:5px;">현재날씨 : ${weather} <br></div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

  console.log(iwContent);

  // 인포윈도우를 생성합니다
  var infowindow = new kakao.maps.InfoWindow({
    content: iwContent,
    removable: iwRemoveable,
  });
  // 마커 위에 인포윈도우를 표시합니다
  infowindow.open(map, marker);
});