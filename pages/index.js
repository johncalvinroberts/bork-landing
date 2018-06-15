import React from 'react'
import styled from 'styled-components'
import { connect } from 'refunk'
import FlexContainer from '../components/FlexContainer'
import Logo from '../components/Logo'

const Heading = styled('h1')([], {
  fontSize: '48px',
  margin: 0,
  display: 'block',
  width: '100%',
  textAlign: 'center'
})

const SubHeader = styled('p')([], {
  textAlign: 'center'
})

const Index = connect(props => (
  <FlexContainer>
    <div className="flex--inner">
        {/* <div class="bork"></div> */}
        <Logo/>
        <div className="bork-box">
            <p>BORK IS A WECHAT MINI PROGRAM FOR CONNECTING STRAY ANIMALS WITH THEIR FOREVER HOMES.</p>
            <h2>scan QR code</h2>
        </div>
    </div>
  </FlexContainer>
))

export default Index
