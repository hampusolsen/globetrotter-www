import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useAtom } from "jotai";
import React, { useState } from "react";
import styled from "styled-components";
import { LIGHT_MODE } from "../../../../../config/constants.config";
import LoadingOverlay from "../../../../../middleware/Loader";
import { darkMode, lightMode } from "../../../../../resources/style/map.style";
import { useGeolocation } from "../../../../../resources/util/hooks";
import feedState from "../../../../../store/feed.state";

const defaultCenterCoordinates = {
  lat: 52.520007,
  lng: 13.404954
};

const Wrapper = styled.main`
  width: 100%;
  height: 100%;

  > div.map-container {
    height: 100%;
  }

  div.gmnoprint,
  a {
    visibility: hidden;
  }
`;

const mapOptions: google.maps.MapOptions = {
  disableDefaultUI: true,
  maxZoom: 15,
  minZoom: 3
};

const Map: React.FC = () => {
  const coordinates = useGeolocation();
  const [{ mode }] = useAtom(feedState);
  const [map, setMap] = useState<google.maps.Map>();
  const { isLoaded } = useLoadScript({
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY!,
    preventGoogleFontsLoading: true
  });

  const onLoad = React.useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  return (
    <Wrapper>
      {isLoaded ? (
        <GoogleMap
          center={coordinates || defaultCenterCoordinates}
          zoom={12}
          onLoad={onLoad}
          mapContainerClassName="map-container"
          clickableIcons={false}
          options={{
            ...mapOptions,
            styles: mode === LIGHT_MODE ? lightMode : darkMode
          }}
        >
          <></>
        </GoogleMap>
      ) : (
        <LoadingOverlay />
      )}
    </Wrapper>
  );
};

export default React.memo(Map);
