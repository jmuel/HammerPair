import { createStore, combineReducers, Reducer } from "redux";
import ArmyLists, { ARMY_LISTS_STATE } from "./modules/ArmyLists";

export type APPLICATION_STATE = {
  armyLists: ARMY_LISTS_STATE;
};

const reducers: Reducer<APPLICATION_STATE> = combineReducers({
  armyLists: ArmyLists,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
