import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Link as ReactRouteDomLink } from 'react-router-dom'

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background: #eeeeee;
`
const Menu = styled.nav`
  display: flex;
  position: relative;
  width: initial;
  border-bottom: none;
  margin: auto 0 auto auto;
  font-family: 'Open Sans';
  background: none;
  left: initial;
  top: initial;
`

type LinkStyleProps = {
  isActive?: boolean
  to: string
}

type LinkProps = {
  children: ReactNode
} & LinkStyleProps

const Link = ({ isActive, children, to, ...props }: LinkProps) => {
  return (
    <ReactRouteDomLink to={to} {...props}>
      {children}
    </ReactRouteDomLink>
  )
}

const StyledLink = styled(Link)<LinkStyleProps>`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Menu>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/login" isActive>
          Login
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  )
}

export default Header