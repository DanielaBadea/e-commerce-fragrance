import { configureStore } from "@reduxjs/toolkit";
import { dropdownReducer } from "./dropDownSlice";
import { productsReducer } from "./ProductsSlice";
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
import { reducerCustomerService } from "./CustomerService";
import { authReducer } from "./auth/authSlice";
import { cartReducer } from "./cart/cartSlice";
// import { filterPriceReducer } from "./filterPriceSlice";
// import { categoryReducer } from "./categorySlice";
// import { brandReducer } from "./brandSlice";

 const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
  const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
      auth: persistedAuthReducer,
        dropdown: dropdownReducer,
        products: productsReducer,
        // category: categoryReducer,
        // brand: brandReducer,
        cart: cartReducer,
        // priceFilter: filterPriceReducer,
        customerService: reducerCustomerService,
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