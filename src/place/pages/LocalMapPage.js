import React from "react";
import styled from 'styled-components'
import { CofinMap, LocalMapSelectionBar, LocalMapInfoBar } from "place";
import { CofinHomeMenu } from "home";


const LocalMapPage = () => {
  return (<>
    <MapLayoutDiv id="contents">
      <LeftSideDiv id="left">
          <LocalMapSelectionBar/>
      </LeftSideDiv>

      <MapDiv id="map">
          <CofinMap/>
      </MapDiv>

      <RightSideDiv id="right">
          <LocalMapInfoBar/>
      </RightSideDiv>
    </MapLayoutDiv>
  </>
  );      
        
};

export default LocalMapPage

const MapLayoutDiv = styled.div`
  width: auto;
`

const MapDiv = styled.div`
min-width: 520px;
width: 60%;
height: 720px;
float: left
`
const LeftSideDiv = styled.div`
float: left;
height: 720px;
min-width: 140px;
width: 8%
`

const RightSideDiv = styled.div`
float: left;
height: 720px;
min-width: 140px;
width: 11%
`
