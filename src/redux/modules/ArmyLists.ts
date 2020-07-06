import { v4 as uuidv4 } from "uuid";

const CREATE = "CREATE";
const UPDATE_POINTS = "UPDATE_POINTS";

const initialState = {
  lists: [],
};

export type ARMY_LISTS_STATE = {
  lists: Array<{
    id: string;
    points: number;
  }>;
};

interface CREATE_ACTION {
  name: string;
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
      const { name } = action;
      const newArmyList = { id: uuidv4(), name };
      return { ...state, lists: [...state.lists, newArmyList] };
    default:
      return state;
  }
};

export default reducer;

export const createArmy = (name: string) => ({
  name,
  type: CREATE,
});
