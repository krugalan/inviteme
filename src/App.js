import React, { useEffect, useState } from 'react'
import { HashRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { RouterMain } from './RouterMain';
import { store } from "./store/store";


export const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <RouterMain />
      </Router>
    </Provider>
  )
}
