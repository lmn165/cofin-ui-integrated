import React from "react";
import styled from "styled-components";
import {InpectionNavi, ChartHeader, CofinChart, LocalChart} from "chartpages/index";
import { Switch, Route } from "react-router";
import World from "chartpages/components/World";

const Inpectionpage =() => {
    return(
        <>
        <LayoutDiv>
            <InpectionNavi/>
        </LayoutDiv>
        <Switch>
           <Route exact path='/cofin-chart' component={CofinChart}/>
           <Route exact path='/local-chart' component={LocalChart}/>
           <Route exact path='/world-status' component={World}/>
        </Switch>
        </>
        );
}
export default Inpectionpage

const LayoutDiv = styled.div`
  width: 100%;
`