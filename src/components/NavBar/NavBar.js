import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logOut from '../../images/navbar_logout.svg';


const NavBar = (props) => {
  // const history = useHistory();
  // const [buttonClassName, setButtonClassName] = React.useState('');

  // useEffect(() => props.loggedIn ? setButtonClassName('header__link header__link_loggedIn') : setButtonClassName('header__link'), [props.loggedIn])
  const isMain = props.myPath.pathname === '/';

  function signOut() {
    if (props.loggedIn) {
      props.onSignOut();
      // localStorage.removeItem('jwt');
      // history.push('/sign-in');
    }
  }


  return (
    <nav className='header__navbar'>
      <ul className='header__nav' >
        {/* {props.loggedIn ? <li className='header__item'>{props.name}</li> : null} */}
        <li className={`${isMain ? 'header__item header__item_underline' : 'header__item'}`}> <Link to='/' className='header__link' >Главная</Link>
          {/* <Link to={props.buttonLink}>
          <button onClick={signOut} className={buttonClassName}>{props.buttonText}</button></Link> */}
        </li>
        {props.loggedIn ? <li className={`${!isMain ? 'header__item header__item_underline' : 'header__item'}`}><Link className='header__link' to='/saved-news'>Сохранённые статьи</Link></li> : null}
        {props.loggedIn ? <li className='header__item'><button className='header__button' onClick={signOut}>{props.userName} <img className='header__logout' src={logOut} alt='Выйти' /></button></li> : <li className='header__item'><button className='header__button' onClick={props.onLoginClick}> Авторизоваться </button></li>}

      </ul>

    </nav>
  )
}

// NavBar.propTypes = {
//   loggedIn: PropTypes.bool.isRequired,
//   onClick: PropTypes.func.isRequired,
//   name: PropTypes.string,
//   buttonLink: PropTypes.string,
//   buttonText: PropTypes.string,
// }

export default NavBar;