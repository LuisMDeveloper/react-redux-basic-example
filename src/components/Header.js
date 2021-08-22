import classes from './Header.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/authSlice'

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  function logoutHandler() {
    dispatch(logout())
  }

  const navLinks = (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  )
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && navLinks}
    </header>
  )
}

export default Header
