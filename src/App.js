import React from 'react'
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom'
import { LocalMapPage, WorldMap } from 'place/index'
import { CofinHomepage  } from 'home'
import styled from 'styled-components'
import { CofinHomeMenu } from 'common/index'
import { FreeBoardpage, Writepage } from 'board'
import { MessagePage } from 'message'
import { News } from 'news'
import { AppAlert, Login, Unregister, UserInfo, UserLost } from 'user'
import { MedPoint } from 'medPoint'
import RegisterForm from 'user/components/RegisterForm'
import { ChartPage, CofinChart, Inoculationpage, Inpectionpage, LocalChart } from 'chartpages'
import { CheckUp, VaccineResult } from 'vaccinepages'

const App = () => (
<>
<Layout>
</Layout>

<AppBody>
<Switch>

<Route exact path='/' component = { CofinHomepage }/>
<Redirect from='/home' to = { '/' }/>

<Route exact path='/cofin-map' component = { LocalMapPage }/>
<Route exact path='/cofin-world-map' component = { WorldMap }/>
<Route exact path='/free-board' component= { FreeBoardpage }/>
<Route exact path='/write' component= { Writepage}/>
<Route exact path='/message' component= { MessagePage }/>
<Route exact path='/news' component= { News }/>
<Route exact path='/login' component= { Login }/>
<Route exact path='/med-point' component= { MedPoint }/>

<Route exact path='/app-alert' component= { AppAlert }/>
<Route exact path='/regist' component= { RegisterForm }/>
<Route exact path='/unregist' component= { Unregister }/>
<Route exact path='/user-info' component= { UserInfo }/>
<Route exact path='/user-lost' component= { UserLost }/>


<Route exact path='/check-up' component={CheckUp}/>
<Route exact path='/vaccine-result' component = {VaccineResult}/>
<ChartPage/>
{/* <Route exact path='/cofin-chart' component = {CofinChart}/> */}
{/* <Route exact path='/local-chart' component = {LocalChart}/> */}
<Route exact path='/inpectionpage' component = {Inpectionpage}/>
<Route exact path='/inoculationpage' component = {Inoculationpage}/>

</Switch>
</AppBody>
<FootLayout><CofinHomeMenu/></FootLayout>
</>
)

export default App;

const Layout = styled.div`
  margin: 0 auto;
  display: block;
  width: 100%;
  height: 20px;
  flex-flow: row wrap;
`
const AppBody = styled.div`
    display: inline-block;
    justify-content: center;
    width: 80%;
`
const FootLayout = styled.div`
    display: inline-block;
    width: 20%;
    position: fixed;
`