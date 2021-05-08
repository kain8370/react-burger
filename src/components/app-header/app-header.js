import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import appHeader from './app-header.module.css';
import HeaderItem from '../header-item/header-item';

const AppHeader = () => {
  const items = [
    {
      iconName: BurgerIcon,
      text: 'Конструктор',
      isActive: true
    },
    {
      iconName: ListIcon,
      text: 'Лента заказов',
      isActive: false

    },
    {
      iconName: Logo,
      text: null,
      isActive: false
    },
    {
      iconName: ProfileIcon,
      text: 'Личный кабинет',
      isActive: false
    }
  ]
  
  const headerElements = items.map((item, index) => {
    let i = '';
    if (item.iconName === 'Logo') {
      i = <Logo />;
    } else if (item.isActive) {
      i = <item.iconName type="primary" />;
    } else {
      i = <item.iconName type="secondary" />;
    }
    return <HeaderItem key={index + 1} icon={i} text={item.text} isActive={item.isActive} />
  });
  
  return (
    <header className={appHeader.header}>
      <ul className={appHeader.container}>
        {headerElements}
      </ul>
      </header>
)};

export default AppHeader;