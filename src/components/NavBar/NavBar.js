import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { Link, useHistory } from 'react-router-dom';
import './NavBar.css';
import logOut from '../../images/navbar_logout.svg';


const NavBar = (props) => {
  // const history = useHistory();
  // const [buttonClassName, setButtonClassName] = React.useState('');

  // useEffect(() => props.loggedIn ? setButtonClassName('header__link header__link_loggedIn') : setButtonClassName('header__link'), [props.loggedIn])


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
        <li className='header__item'> Главная
          {/* <Link to={props.buttonLink}>
          <button onClick={signOut} className={buttonClassName}>{props.buttonText}</button></Link> */}
        </li>
        {props.loggedIn ? <li className='header__item'>Сохранённые статьи</li> : null}
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