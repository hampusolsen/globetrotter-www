import store, { rootReducer } from ".";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
