import React, {useState, useEffect} from 'react'
import styled  from 'styled-components'
import TextInput from './FastTextInput.js'
import StyledPanel from './StyledPanel.js'
import Button from './Button.js'
import {SocketProvider, useSocket} from '../hooks/useSocket.js'
import FileSelector from './FileSelector.js'
import InputTitle from './InputTitle.js'
import Panel from './Panel.js'

function ViriPanel(props){
  const [tema, setTema] = useState ('ni teme')
  const [vir, setVir] = useState ('vir: ')
  const [vir1, setVir1] = useState('vir: ')
  const [vir2, setVir2] = useState('vir: ')
  const [vir3, setVir3] = useState('vir: ')
  const [vir4, setVir4] = useState('vir: ')
  const [vir5, setVir5] = useState('vir: ')
  const [vir6, setVir6] = useState('vir: ')
  const [vir7, setVir7] = useState('vir: ')
  const [vir8, setVir8] = useState('vir: ')
  const [vir9, setVir9] = useState('vir: ')
  useEffect( () => {
    fetch(`http://localhost:4545/setAndPlayVir`, {
      method: 'POST',
      body: JSON.stringify({
        vir: [vir1, vir2, vir3, vir4, vir5, vir6, vir7, vir8, vir9]
      }),
      headers: {'Content-Type': 'application/json'},
    })
  }, [vir1, vir2, vir3, vir4, vir5, vir6, vir7, vir8, vir9])

  return(
    <Panel>
      <InputTitle text={'VIRI'} />
      <TextInput text={vir1} setText={setVir1}  />
      <TextInput text={vir2} setText={setVir2}  />
      <TextInput text={vir3} setText={setVir3}  />
      <TextInput text={vir4} setText={setVir4}  />
      <TextInput text={vir5} setText={setVir5}  />
      <TextInput text={vir6} setText={setVir6}  />
      <TextInput text={vir7} setText={setVir7}  />
      <TextInput text={vir8} setText={setVir8}  />
      <TextInput text={vir9} setText={setVir9}  />
    </Panel>
  )
}

export default ViriPanel
