import React from 'react';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../../services/actions/user';
import { useSelector } from 'react-redux';

import editProfileStyle from './edit-profile.module.css';

const EditProfile = () => {

  const classNameInputContainer = `mt-6 ${editProfileStyle.inputContainer}`;
  const dispatch = useDispatch();

  const user = useSelector(store => store.userReducer.user);

  const oldName = user?.name;
  const oldEmail = user?.email;

  const [ email, setEmail ] = React.useState(oldEmail);
  const [ name, setName ] = React.useState(oldName);
  const [ password, setPassword ] = React.useState();

  const onChange = e => {
    switch(e.target.name) {
      case 'name': {
        setName(e.target.value);
        break;
      }
      case 'email': {
        setEmail(e.target.value);
        break;
      }
      case 'password': {
        setPassword(e.target.value);
        break;
      }
      default: {
        break
      }
    }
  }

  const onSubmit = (e) => {
    const userData = {}
    e.preventDefault();
    if (email !== oldEmail) {
      userData.email = email
    } else if (name !== oldName) {
      userData.name = name
    } else if (password) {
      userData.password = password;
    }
    dispatch(refreshUser(userData));
  }

  const onCancel = e => {
    e.preventDefault();
    if (email !== oldEmail) {
      setEmail(oldEmail);
    } else if (name !== oldName) {
      setName(oldName);
    } else if (password) {
      setPassword('');
    }
  }

  return (
    <div className={editProfileStyle.container}>
      <form className={editProfileStyle.editProfileForm} onSubmit={onSubmit}>
        <div className={editProfileStyle.inputContainer}>
          <Input type="text" name="name" value={name} placeholder="Имя" size="default" icon="EditIcon" onChange={onChange} />
        </div>
        <div className={classNameInputContainer}>
          <Input type="email" name="email" value={email} placeholder="Логин" icon="EditIcon" size="default" onChange={onChange} />
        </div>
        <div className={classNameInputContainer}>
          <Input type="password" name="password" value={password} placeholder="Пароль" icon="EditIcon" size="default" onChange={onChange} />
        </div>
        <div className="mt-6">
          <Button type="primary" className="mr-30">Сохранить</Button><Button type="primary" onClick={onCancel}>Отмена</Button>
        </div>
      </form>
    </div>
  )
}

export default EditProfile;