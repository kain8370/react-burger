import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import headerItem from './header-item.module.css';

const HeaderItem = props => {

  const classNameItem = `${headerItem.item} text text_type_main-default`;

  return (
    <li className={classNameItem}><NavLink exact={props.to === '/' ? true : false} activeClassName={headerItem.active} className={headerItem.link} to={props.to}>{<props.icon type="secondary" />}{props.text ? <span className={headerItem.text}>{props.text}</span> : null}</NavLink></li>
  );

}

HeaderItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default HeaderItem;
