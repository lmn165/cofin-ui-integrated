import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { LocalMapPage, WorldMap } from 'place/index'
import { CofinHomepage  } from 'home'
import styled from 'styled-components'
import { CofinHomeMenu } from 'common/index'
import { FreeBoardpage, Writepage } from 'board'
import { MessagePage } from 'message'
import { News } from 'news'
import { Login } from 'user'
import { MedPoint } from 'medPoint'

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