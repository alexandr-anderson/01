import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialog-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersReducer from "./users-reducers";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers)

window.store = store;

export default store