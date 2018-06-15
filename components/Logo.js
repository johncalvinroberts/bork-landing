import React from 'react'
import styled from 'styled-components'

const GradientBackground = styled('div')([], props => ({
  width: props.height,
  height: props.height,
  padding: '3px',
  backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898',
  backgroundBlendMode: 'multiply, multiply',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  margin: '0 auto',
  // marginBottom: '5rem',
  maxWidth: '100vw'
}))

const Bork = styled('div')([], {
  backgroundImage: 'url(https://up.img.heidiancdn.com/o_1cfu154ingdf37d1kf3qdh7u20_code2.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  height: 'auto',
  paddingTop: '100%',
  maxHeight: '450px',
  flex: '0 0 65%'
})

GradientBackground.defaultProps = {
  height: '20rem'
}

const LogoMask = styled('div')([], props => ({
  border: 0,
  position: 'relative',
  width: '100%',
  height: '100%',
  backgroundColor: props.color,
  color: props.color === '#000000' ? '#ffffff': '#000000'
}))

LogoMask.defaultProps = {
  color: '#000000'
}

const LogoInner = styled('div')([], {
  position: 'absolute',
  bottom: '10px',
  right: '10px',
  fontSize: '2rem'
})

const Logo = props => (
  <GradientBackground height={props.height}>
    <Bork/>
  </GradientBackground>
)

export default Logo