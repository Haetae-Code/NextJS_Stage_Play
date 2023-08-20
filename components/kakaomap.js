import { useEffect } from "react";

function KakaoMap(props) {
    const addressValue = props.value;
    const str_addressValue = addressValue.toString();

    useEffect(() => {
        const mapScript = document.createElement("script");

        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false&libraries=services`;

        document.head.appendChild(mapScript);

        const onLoadKakaoMap = (props) => {
            
            
            window.kakao.maps.load(() => {
                const mapContainer = document.getElementById("map");
                const mapOption = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3,
                };
                // new window.kakao.maps.Map(mapContainer, mapOption);

                var map = new kakao.maps.Map(mapContainer, mapOption);

                var geocoder = new kakao.maps.services.Geocoder();

                geocoder.addressSearch(
                    str_addressValue,
                    function (result, status) {
                        if (status === kakao.maps.services.Status.OK) {
                            var coords = new kakao.maps.LatLng(
                                result[0].y,
                                result[0].x
                            );

                            var marker = new kakao.maps.Marker({
                                map: map,
                                position: coords,
                            });

                            var infowindow = new kakao.maps.InfoWindow({
                                content:
                                    '<div style="width:150px;text-align:center;padding:6px 0;">공연장소</div>',
                            });
                            infowindow.open(map, marker);

                            map.setCenter(coords);
                        }
                    }
                );
            });
        };
        mapScript.addEventListener("load", onLoadKakaoMap);

        // var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667);

        // var marker = new kakao.maps.Marker({
        //     position: markerPosition
        // });

        // marker.setMap(map);

        // var iwContent = '<div style="padding:5px;">Hello World! <br><a href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        //     iwPosition = new kakao.maps.LatLng(33.450701, 126.570667);

        // var infowindow = new kakao.maps.InfoWindow({
        //     position : iwPosition,
        //     content : iwContent
        // });

        // infowindow.open(map, marker);
    }, []);

    return (
        <div>
            <div id="map" style={{ height: 350 }}></div>
        </div>
    );
}

export default KakaoMap;
