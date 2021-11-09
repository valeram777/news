import {SearchReducer} from '../Reducer/SearchReducer'

import { createStore,combineReducers } from 'redux' 
const RootReducer = combineReducers ({
    search: SearchReducer

})
export default createStore(RootReducer)
