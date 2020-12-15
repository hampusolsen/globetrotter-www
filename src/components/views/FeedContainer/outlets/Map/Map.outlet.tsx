import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import { EDIT } from "../../../../../config/constants.config";
import LoadingOverlay from "../../../../../middleware/Loader";
import { lightModes } from "../../../../../resources/style/map.style";
import { toFlatArray } from "../../../../../resources/util/helpers";
import { useGeolocation } from "../../../../../resources/util/hooks";
import { submitStepAction } from "../../../../../store/happeningForm/happeningForm.actions";
import { happeningFormReducerAtom } from "../../../../../store/happeningForm/happeningForm.state";
import {
  initializeMapAction,
  mapClickAction,
  setHappeningAction
} from "../../../../../store/map/map.actions";
import { mapReducerAtom } from "../../../../../store/map/map.state";
import { toHappeningMarker } from "./Map.utils";
import HappeningInfo from "./sub-components/HappeningInfo/HappeningInfo.sub";

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
  maxZoom: 16,
  minZoom: 2
};

const Map: React.FC = () => {
  const [, formDispatch] = useAtom(happeningFormReducerAtom);
  const [mapState, mapDispatch] = useAtom(mapReducerAtom);
  const centerCoordinates = useGeolocation();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY || "",
    preventGoogleFontsLoading: true
  });

  const onLoad = React.useCallback((map: google.maps.Map) => {
    if (mapState.instance) return;
    mapDispatch(initializeMapAction(map));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isLoaded || !centerCoordinates || !mapState.travels.length) {
    return <LoadingOverlay />;
  }

  const handleMapClick = (e: google.maps.MouseEvent): void => {
    const latLng = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    };

    if (mapState.engageMode === EDIT) {
      formDispatch(submitStepAction({ latLng }));
    } else {
      mapDispatch(mapClickAction(latLng));
    }
  };

  const happeningMarkers = mapState.travels
    .map(toHappeningMarker)
    .reduce(toFlatArray);

  return (
    <Wrapper>
      <GoogleMap
        onClick={handleMapClick}
        center={centerCoordinates}
        zoom={12}
        onLoad={onLoad}
        mapContainerClassName="map-container"
        clickableIcons={false}
        options={{
          ...mapOptions,
          styles: lightModes[mapState.theme]
        }}
      >
        {happeningMarkers.map((happening) => (
          <Marker
            key={happening.id}
            position={happening.latLng}
            onClick={() => mapDispatch(setHappeningAction(happening))}
          />
        ))}
      </GoogleMap>
      {mapState.activeHappening && (
        <HappeningInfo happening={mapState.activeHappening} />
      )}
    </Wrapper>
  );
};

export default React.memo(Map);
