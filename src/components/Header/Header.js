import './header.css'
import {Link} from 'react-router-dom'


function Header() {


  return (
    <header className='header'>
      <Link to='/' style={{textDecoration:'none',color:'#a9c52f'}}>
      <h1>Trendy Treasures</h1>
      </Link>
        

        <Link to='/logout'>
        <button className='logout-btn' >Logout</button>
        </Link>
        
    </header>
  )
}
export default Header