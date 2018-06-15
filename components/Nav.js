import React from 'react'
import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components'
import { connect } from 'refunk'

const NavBase = styled('div')([], {
  display: 'flex',
  position: 'fixed',
  width: '100%',
  height: '3rem',
  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
  top: 0,
  right: 0,
  left: 0,
  zIndex: 1000,
  backgroundColor: '#ffffff'
})

// const NavBase = styled.div``

const NavItem = styled(Link)([], props => ({
  textDecoration: 'none',
  position: 'relative',
  padding: '0 0.3rem',
  margin: '1rem',
  opacity: '1',
  color: '#000000'
}))

const Nav = connect(props => {
  const {
    render,
    routes
  } = props

  const route = routes.find(route => route.path === props.location.pathname)  

  return (
    <NavBase>
      <NavItem to='/'>
        home
      </NavItem>         
      <NavItem to='/about'>
        about
      </NavItem>    
      <NavItem to='/projects'>
        projects
      </NavItem>              
      <NavItem to='/contact'>
        contact
      </NavItem>                           
    </NavBase>
)})


export default Nav