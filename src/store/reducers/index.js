import authenNavigationReducer from '../../authen/reducers/authen_navigation_reducer';
import navigationReducer from './root_navigation/root_navigation_reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    navigationReducer,
    authenNavigationReducer
});
