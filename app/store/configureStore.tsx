import {createStore, combineReducers} from 'redux';
import user from '../store/reducers/user';
const rootReducer = combineReducers({user: user});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
