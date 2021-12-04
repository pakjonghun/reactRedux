import { configureStore, createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";
import faker from "faker";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const initialState = [
  { id: shortid.generate(), isDone: false, content: faker.lorem.sentence() },
];

export const todos = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add(state, action) {
      return [action.payload, ...state];
    },
    delete(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    complete(state, action) {
      const item = state.find((item) => item.id === action.payload.id);
      item.isDone = !item.isDone;
    },
  },
});

const persistedReducer = persistReducer(persistConfig, todos.reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// const store = configureStore({ reducer: todos.reducer });
export default store;
