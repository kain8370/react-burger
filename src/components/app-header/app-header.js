import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon, LogoutIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import appHeader from './app-header.module.css';
import HeaderItem from '../header-item/header-item';

const AppHeader = React.memo(() => {
  const items = [
    {
      iconName: BurgerIcon,
      text: 'Конструктор',
      to: '/'
    },
    {
      iconName: ListIcon,
      text: 'Лента заказов',
      to: '/feed'
    },
    {
      iconName: Logo,
      text: null,
      to: '/'
    },
    {
      iconName: ProfileIcon,
      text: 'Личный кабинет',
      to: '/profile'
    }
  ]
  
  const headerElements = items.map((item, index) => {
    let i = null;
    if (item.iconName === 'Logo') {
      i = <Logo />;
    } else {
      i = item.iconName
    }
    return <HeaderItem key={index + 1} icon={i} text={item.text} to={item.to} />
  });
  
  return (
    <header className={appHeader.header}>
      <ul className={appHeader.container}>
        {headerElements}
      </ul>
      </header>
)})

export default AppHeader;