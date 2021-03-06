
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
background: #3498db;
height: 80px;
display: flex;
justify-content: space-between;
// padding: 0.5rem calc((100vw - 1000px) / 2);
margin-top: 40px;
z-index: 10;
background-color: ${({ useTransparent }) =>
    useTransparent ? 'transparent' : 'rgba(61, 39, 84, 1)'};
/* Third Nav */
/* justify-content: flex-start; */
`

export const NavLink = styled(Link)`
color: white;
font-family: 'Hammersmith One', sans-serif;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {color: #15cdfc;
}
&:hover {transition: all 0.2s ease-in-out;
}
`

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
width: 100vw;
white-space: nowrap;
@media screen and (max-width: 768px) {display: none;

}
`
