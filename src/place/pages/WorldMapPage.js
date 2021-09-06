import React from 'react'
import styled from 'styled-components';
import { CofinWorldMap } from 'place';
import { CofinHomeMenu } from 'home';

const WorldMap = () =>{
    return (
    <WorldMapDiv>
        <CofinWorldMap/>
    </WorldMapDiv>
    )
}


export default WorldMap;


const WorldMapDiv = styled.div`
    display: inline-block;
    width: 80%;
    text-align: center;
`