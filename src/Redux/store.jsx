import { configureStore } from "@reduxjs/toolkit";
import { dropdownReducer } from "./dropDownSlice";
import { productsReducer } from "./ProductsSlice";
import { filtersReducer } from "./filterSlice";
import { cartReducer } from "./cartSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';

  const persistConfig = {
    key:"items",
    storage
  };

  const persistedProductsCartReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    reducer: {
        dropdown: dropdownReducer,
        products: productsReducer,
        cart: persistedProductsCartReducer,
        filterPrice: filtersReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})

// export default store;
export const persistor = persistStore(store);