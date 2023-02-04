import { combineReducers } from '@reduxjs/toolkit';
import ProductionReducer from '../reducers/ProductionReducer';
const rootReducer = combineReducers({
    production: ProductionReducer,
});

export default rootReducer;