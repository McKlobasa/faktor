import React, {useState, useEffect} from 'react'
import styled  from 'styled-components'
import ContentThreeDays from './ContentThreeDays.js'
import FastTextArea from './FastTextArea.js'
import StyledPanel from './StyledPanel.js'
import Button from './Button.js'
import InputTitle from './InputTitle.js'
import {SocketProvider, useSocket} from '../hooks/useSocket.js'
import FileSelector from './FileSelector.js'
import Panel from './Panel.js'

const InputSize = styled.div`
  height: 100px;
`

function GostPanel(props){
  const [story_1, setStory_1] = useState('')
  const [story_2, setStory_2] = useState('')
  const [story_3, setStory_3] = useState('')
  const [story_4, setStory_4] = useState('')

  return(
    <Panel>
      <FastTextArea text={story_1} setText={setStory_1}  />
      <FastTextArea text={story_2} setText={setStory_2}  />
      <FastTextArea text={story_3} setText={setStory_3}  />
      <FastTextArea text={story_4} setText={setStory_4}  />
      <Button onClick={() => {
        fetch(`http://localhost:4545/setStories`, {
          method: 'POST',
          body: JSON.stringify({
            stories: [story_1, story_2, story_3, story_4]
          }),
          headers: {'Content-Type': 'application/json'},
        })
      }}>SUBMIT</Button>
    </Panel>
  )
}

export default GostPanel
