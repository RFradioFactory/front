import React, {useContext, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';  
import { AuthContext } from '../sevise/AutoContext';
import { faBox, faChartBar, faCircleUser, faCode, faGem, faHouse, faNewspaper, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Header  ()  {
  
    const authContext = useContext(AuthContext);

    if (!authContext) {
      throw new Error('AuthContext is not provided');
    }
  
    const { isAuthenticated, username, loginContext, logoutContext } = authContext;
  return (
    <>
    <header>
      
      <div className="left-section"><FontAwesomeIcon icon={faCode} /> Панель администратора</div>

      
      <div className="stripeBack"></div>

      
      {!isAuthenticated?<div className='widhtBox'></div>:
      <nav >
        <a href="/" ><FontAwesomeIcon icon={faHouse} /> Главная</a>
        <a href="/news" className="nav-link"><FontAwesomeIcon icon={faNewspaper} /> Новости</a>
        <a href="/users" className="nav-link"><FontAwesomeIcon icon={faUserGroup} /> Пользователи</a>
        <a href="/brands" className="nav-link"><FontAwesomeIcon icon={faGem} /> Бренды</a>
        <a href="/products" className="nav-link"><FontAwesomeIcon icon={faBox} /> Товары</a>
        <a href="/tree" className="nav-link"><FontAwesomeIcon icon={faChartBar} /> Дерево</a>
      </nav>}

      
      <div className="stripe"></div>

      
      <div className="auth-section" >
        <FontAwesomeIcon icon={faCircleUser} />

        {isAuthenticated ?<> <span> {username}</span> <button  onClick={logoutContext}> Выход</button></>: <Link to = '/Login'><button> Выполните вход</button></Link>}
      </div>
    </header></>
  );
};

export default Header;
