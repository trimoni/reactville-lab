// Components & Assets
import Logo from '../../assets/react-logo.png'
import { NavLink } from 'react-router-dom'
import Clock from './Clock'
import Wallet from './Wallet'

const Nav = (props) => {
  return (
    <nav className="navigation-bar">
      <NavLink id='logo' to='/'><img src={Logo} alt="React Logo" /></NavLink>
      <NavLink to='/burgers'>BURGER SHOP</NavLink>
      <NavLink to='/market'>SUPER MARKET</NavLink>
      <Clock daytime={props.daytime} setDaytime={props.setDaytime}/>
      <Wallet />
    </nav>
  )
}

export default Nav