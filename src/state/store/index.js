import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import reducers from '../reducer';
import sagas from '../saga';

const getStorage = (persistConfig) => {
    const combinedReducer = combineReducers(reducers);
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const sagaMiddleware = createSagaMiddleware();
    const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
    const persistedReducer = persistReducer(persistConfig, combinedReducer);
    const store = createStore(persistedReducer, enhancer);
    const persistor = persistStore(store);

    sagaMiddleware.run(sagas);

    return { persistor, store };
};

export { getStorage };
