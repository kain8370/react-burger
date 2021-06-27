import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { useSelector } from 'react-redux';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import app from './app.module.css';

const App = () => {

  const { currentIngredientVisible,
          order } = useSelector(store => ({
                                                      currentIngredientVisible: store.ingredientsReducer.currentIngredientVisible,
                                                      addedIngredients: store.ingredientsReducer.addedIngredients,
                                                      order: store.ingredientsReducer.order
                                                      }));

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
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={app.main}>
          {content}
        </main>
      </DndProvider>
      
      {currentIngredientVisible && <ModalOverlay><IngredientDetails /></ModalOverlay>}
      { order.orderNumber  && <ModalOverlay /*onChangeVisible={setState}>*/><OrderDetails  /></ModalOverlay>}
    </div>
  );
}

export default App;
