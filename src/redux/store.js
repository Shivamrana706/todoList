import { createStore } from 'redux';
import root_Reducer from './root-reducer'



const store = createStore(root_Reducer);

export default store;