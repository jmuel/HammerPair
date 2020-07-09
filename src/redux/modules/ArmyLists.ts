import { v4 as uuidv4 } from "react-native-uuid";

const CREATE = "CREATE";
const UPDATE_POINTS = "UPDATE_POINTS";

const initialState = {
  lists: [],
};

export type FACTION =
  | "IMPERIUM"
  | "CHAOS"
  | "AELDARI"
  | "TYRANIDS"
  | "ORKS"
  | "NECRONS"
  | "T'AU EMPIRE";

export type ARMY_LISTS_STATE = {
  lists: Array<{
    id: string;
    points: number;
    faction: FACTION;
  }>;
};

interface CREATE_ACTION {
  name: string;
  faction: FACTION,
  points: number,
  type: "CREATE";
}

interface UPDATE_POINTS_ACTION {
  type: "UPDATE_POINTS";
}


type ArmyListActionAction = CREATE_ACTION | UPDATE_POINTS_ACTION;

const reducer = (
  state: ARMY_LISTS_STATE = initialState,
  action: ArmyListActionAction
) => {
  switch (action.type) {
    case UPDATE_POINTS:
      return { ...state };
    case CREATE:
      const { name, faction, points } = action;
      const newArmyList = { id: uuidv4(), name, faction, points};
      return { ...state, lists: [...state.lists, newArmyList] };
    default:
      return state;
  }
};

export default reducer;

export const createArmy = (name: string, faction: FACTION, points: number) => ({
  name,
  faction,
  points,
  type: CREATE,
});
