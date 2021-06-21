import { combineReducers } from "redux";
import addPasswordReducer from "./password/addPasswordReducer";
import userLoginReducer from "./user/login/userLoginReducer";
import userRegisterReducer from "./user/register/userRegisterReducer";

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  addPassword: addPasswordReducer,
});

export default rootReducer;