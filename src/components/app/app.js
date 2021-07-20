import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import { useSelector } from 'react-redux';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import LoginPage from '../../pages/login-page/login-page';
import RegisterPage from '../../pages/register-page/register-page';
import ForgotPasswordPage from '../../pages/forgot-password-page/forgot-password-page';
import { BrowserRouter as Router, Switch, Route, useLocation, useHistory } from 'react-router-dom';
import ResetPasswordPage from '../../pages/reset-password-page/reset-password-page';
import ProfilePage from '../../pages/profile-page/profile-page';
import FeedPage from '../../pages/feed-page/feed-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import IngredientPage from '../../pages/ingredient-page/ingredient-page';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch } from 'react-redux';
import { getUser } from '../../services/actions/user';
import ProtectedRoute from '../protected-route/protected-route';

import app from './app.module.css';

const App = () => {
  const ModalSwitch = () => {

    const user = useSelector(store => store.userReducer.user);
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    let background = history.action === 'PUSH' && location.state && location.state.background;

    React.useEffect(() => {
    if (!user) {
      dispatch(getUser());
    }
    }, [dispatch, user]);

    const mainContent = (
    <>
      <h2 className="text text_type_main-large title">
            Соберите бургер
      </h2>
      <div className={app.wrapper}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </>
    );
    const content =  mainContent;

    return (
    <div className={app.app}>
      <DndProvider backend={HTML5Backend}>
            <AppHeader />
            <main className={app.main}>
              <Switch location={background || location}>
                <Route path="/" exact={true}>
                  {content}
                </Route>
                <Route path="/login" exact={true}>
                  <LoginPage />
                </Route>
                <Route path="/register" exact={true}>
                  <RegisterPage />
                </Route>
                <Route path="/forgot-password" exact={true}>
                  <ForgotPasswordPage />
                </Route>
                <Route path="/reset-password" exact={true}>
                  <ResetPasswordPage />
                </Route>
                <ProtectedRoute path="/profile" exact={true}>
                  <ProfilePage />
                </ProtectedRoute>
                <ProtectedRoute path="/profile/orders" exact={true}>
                  <ProfilePage />
                </ProtectedRoute>
                <Route path="/feed" exact={true}>
                  <FeedPage />
                </Route>
                <Route path="/ingredients/:id" exact={true}>
                 <IngredientPage />
                </Route>
                <ProtectedRoute path="/order" exact={true}>
                  <Modal><OrderDetails /></Modal>
                </ProtectedRoute>
                <Route>
                  <NotFoundPage />
                </Route>
              </Switch>
              <Switch>
                {background && <Route path="/ingredients/:id"><Modal><IngredientDetails /></Modal></Route>}
              </Switch>
            </main>
      </DndProvider>
    </div>
    );

  }
  return (
  <Router>
    <ModalSwitch/>
  </Router>
  );
}

export default App;
