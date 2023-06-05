import { NavLink } from "react-router-dom"
import logo from '../assets/shared/desktop/logo-white.svg'
export default function FooterLinks() {
  return (
    <div>
        <NavLink to={'/'}> <img src={logo} alt="Photosnap Logo" className=''/> </NavLink>
        <div>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'stories'}>Stories</NavLink>
            <NavLink to={'features'}>features</NavLink>
            <NavLink to={'pricing'}>pricing</NavLink>
        </div>
        <div>
            
        </div>
    </div>
  )
}
