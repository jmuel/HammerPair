import { v4 as uuidv4 } from "react-native-uuid";

const CREATE_USER = "CREATE_USER";
const CHANGE_ACTIVE = "CHANGE_ACTIVE";


const initialState = {
  users: [],
  activeUser: undefined,
};

export type USERS_STATE = {
  users: Array<{
    id: string;
    name: string;
    email: string;
  }>;
};

interface CREATE_ACTION {
  name: string;
  email: string,
  type: "CREATE_USER";
}

interface CHANGE_ACTIVE_ACTION {
  id: string,
  type: "CHANGE_ACTIVE";
}


type UserStateActionAction = CREATE_ACTION | CHANGE_ACTIVE_ACTION;

const reducer = (
  state: USERS_STATE = initialState,
  action: UserStateActionAction
) => {
  switch (action.type) {
    case CHANGE_ACTIVE:
      const { id } = action;
      return { ...state, activeUser: id };
    case CREATE_USER:
      const { name, email } = action;
      const newUser = { id: uuidv4(), name, email};
      return { ...state, users: [...state.users, newUser] };
    default:
      return state;
  }
};

export default reducer;

export const createUser = (name: string, email: string) => ({
  name,
  email,
  type: CREATE_USER,
});

export const changeActive = (id: string) => ({
  id,
  type: CHANGE_ACTIVE
});