import { combineReducers } from "redux";
import addPasswordReducer from "./password/addPasswordReducer";
import allPaswordReducer from "./password/allPasswordReducer";
import deletePasswordReducer from "./password/deletePasswordReducer.js";
import detailPasswordReducer from "./password/deletePasswordReducer.js";
import editPasswordReducer from "./password/editPasswordReducer";
import userLoginReducer from "./user/login/userLoginReducer";
import userRegisterReducer from "./user/register/userRegisterReducer";

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  addPassword: addPasswordReducer,
  allPassword: allPaswordReducer,
  editPassword: editPasswordReducer,
  deletePassword: deletePasswordReducer,
});

export default rootReducer;