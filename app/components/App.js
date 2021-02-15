import React, { useState, useEffect } from 'react'
import {SocketProvider} from '../hooks/useSocket.js'

import styled, { createGlobalStyle } from 'styled-components'
import GostPanel from './GostPanel.js'
import CrawlLoad from './CrawlLoad.js'
import ViriPanel from './ViriPanel.js'
import StartPanel from './StartPanel.js'

const GlobalStyle = createGlobalStyle`
  :root {
    --mainColor1: #2F4858; //temno modra
    --mainColor2: #336699; //svetlej modra
    --textColor: #FF5555;  //zelena
    --background: white;
  }
  #root {
    height: 100%
  }
  body {
    width: 100vw;
    position: relative;
    overflow: scroll;
    font-size: 1.5em;
    background: var(--mainColor1);

    //ozadje
  }
  html {
    width: 100vw;
    margin: 0;
  }
`
const AppContainer = styled.div`
  color: var(--background);
  height: 100%;
`

const AppTitle = styled.h1`
  font-size: 100px;
  font-weight: black;
  text-align: center;
  color: white;
  letter-spacing: 28px;
  text-shadow: 5px 5px 0px var(--textColor), -5px -5px 0px var(--mainColor2);
`

export default function App (props) {
  return (
    <SocketProvider connection={{ip:'localhost', port:6100}}>
      <GlobalStyle/>
      <AppTitle>FAKTOR</AppTitle>
      <StartPanel />
      <GostPanel />
      <ViriPanel />
      <CrawlLoad />
    </SocketProvider>
  )
}
