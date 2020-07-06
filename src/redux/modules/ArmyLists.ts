const CREATE = 'CREATE';
const UPDATE_POINTS = 'UPDATE_POINTS';

const initialState = {
    lists: []
};

type ARMY_LISTS_STATE = {
  lists: Array<{
      id: string;
      points: number,
  }>
};

type CREATE_ACTION = {
    name: string,
    type: 'CREATE',
};

type UPDATE_POINTS_ACTION = {
    type: 'UPDATE_POINTS'
};

type ArmyListActionAction = CREATE_ACTION | UPDATE_POINTS_ACTION;

const reducer = (state: ARMY_LISTS_STATE = initialState, action: ArmyListActionAction) => {
    switch (action.type) {
        case "UPDATE_POINTS":
            return {...state};
        case CREATE:
            return {...state};
        default:
            return state;
    }
};

export default reducer;
