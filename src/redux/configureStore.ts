import { createStore, combineReducers, Reducer } from "redux";
import ArmyLists, { ARMY_LISTS_STATE } from "./modules/ArmyLists";
// import Crusades, { CRUSADES_STATE } from "./modules/Crusades";
import UserState, { USERS_STATE } from "./modules/UserState";

export type APPLICATION_STATE = {
  armyLists: ARMY_LISTS_STATE;
  // crusades: CRUSADES_STATE;
  userState: USERS_STATE;
};

const reducers: Reducer<APPLICATION_STATE> = combineReducers({
  armyLists: ArmyLists,
  // crusades: Crusades,
  userState: UserState,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
