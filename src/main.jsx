import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App'
import './index.css'
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import  {store, persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename='e-commerce-fragrance' >
    <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
