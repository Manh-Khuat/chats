/* eslint-disable no-undef */
import { compose, configureStore } from '@reduxjs/toolkit';
import headerBarSlice from './components/layouts/header-bar/headerBar.slice';

const devToolsExtension =
  process.env.NODE_ENV !== "production" && typeof window === "object"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const reducer = {
  headerBar: headerBarSlice
}

export const store = configureStore({
  reducer,
  devTools: devToolsExtension,
});