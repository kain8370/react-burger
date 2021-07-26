import React from 'react'
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest}) => {

  const user = useSelector(store => store.userReducer.user);
  const token = localStorage.getItem('token');

  if (!user && !token) {
    return (
      <Route {...rest} render={({ location }) => (<Redirect to={{ pathname: '/login', state: { from: location }}} />)} />
    )
  }

  return (
    <Route {...rest} render={() => children} />
  )

}

export default ProtectedRoute;