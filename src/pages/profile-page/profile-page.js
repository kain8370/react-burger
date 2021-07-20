import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import EditProfile from '../../components/edit-profile/edit-profile';
import {Route} from 'react-router-dom';
import Orders from '../../components/orders/orders';
import { useDispatch } from 'react-redux';
import { resetUser } from '../../services/actions/user';

import profilePageStyle from './profile-page.module.css';

const ProfilePage = () => {

  const linkClassName = `text text_type_main-medium text_color_inactive ${profilePageStyle.link}`;
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(resetUser());
  }

  return (
    <div className={profilePageStyle.profilePage}>
      <div className={profilePageStyle.profileNav}>
        <ul className={profilePageStyle.linksContainer}>
          <li className={profilePageStyle.item}>
            <NavLink exact={true} to="/profile" className={linkClassName} activeClassName={profilePageStyle.active}>Профиль</NavLink>
          </li>
          <li className={profilePageStyle.item}>
            <NavLink to="/profile/orders" className={linkClassName} activeClassName={profilePageStyle.active}>История заказов</NavLink>
          </li>
          <li className={profilePageStyle.item}>
            <span className={linkClassName} onClick={logout}>Выход</span>
          </li>
        </ul>
        <p className="text text_type_main-default text_color_inactive mt-20">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <Route path="/profile" exact={true}>
        <EditProfile />
      </Route>
      
      <Route path="/profile/orders" exact={true}>
        <Orders />
      </Route>
      
    </div>
  )
}

export default ProfilePage;