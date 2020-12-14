import {NavLink} from 'react-router-dom';
import React, { useContext } from 'react'
import LinksContext from '../../contexts/LinksContext';
function Menu() {
  const links = useContext(LinksContext);
  const activeClass = 'menu__item-active';

    return (
      <nav>
        {links.map(item =>  <NavLink activeClassName={activeClass} className={'menu__item'} to={item.link}>{item.name}</NavLink>)}
      </nav>
    );
  }
  export default Menu;