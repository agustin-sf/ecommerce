import Cartwidget from './CartWidget'
import logo from '../../assets/logo.jpg'
import './navbar.scss'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='brand'>
            <img src={logo} alt="Logo 1" style={{ margin: '5px',  width: '60%' }} />
        </div>
        <ul>
            <li>Infantiles</li>
            <li>Documentales</li>
            <li>Musicales</li>

        </ul>
        <Cartwidget />
    </nav>
  )
}

export default NavBar