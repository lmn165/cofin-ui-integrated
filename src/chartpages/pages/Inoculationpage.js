import React from "react";
import styled from "styled-components";
import {InoculationNavi,ChartHeader, CofinChart, LocalChart} from "chartpages/index";
import { Switch, Route } from "react-router-dom";

const Inoculationpage =() => {
    return(
        <>
        <LayoutDiv>
            <InoculationNavi/>
        </LayoutDiv>
        <Switch>
            <Route exact path='/cofin-chart' component = {CofinChart}/>
            <Route exact path='/local-chart' component = {LocalChart}/>
        </Switch>
        </>
        );
}
export default Inoculationpage

const LayoutDiv = styled.div`
  width: 100%;
  `