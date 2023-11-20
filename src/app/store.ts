import { combineReducers, configureStore } from "@reduxjs/toolkit";
import signInReducer from "../features/SignInForm/signInFormSlice";
import filterFormReducer from "../features/FilterForm/filterFormSlice";
import authReducer from "../features/Auth/AuthSlice";
import { signInAPI } from "../services/SignInService";
import { shopAPI } from "../services/ShopService";
import { categoriesAPI } from "../services/CategoriesService";
import { getUserAPI } from "../services/GetUserService";

const rootReducer = combineReducers({
  signInReducer,
  filterFormReducer,
  authReducer,
  [signInAPI.reducerPath]: signInAPI.reducer,
  [shopAPI.reducerPath]: shopAPI.reducer,
  [categoriesAPI.reducerPath]: categoriesAPI.reducer,
  [getUserAPI.reducerPath]: getUserAPI.reducer,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        signInAPI.middleware,
        shopAPI.middleware,
        categoriesAPI.middleware,
        getUserAPI.middleware
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
