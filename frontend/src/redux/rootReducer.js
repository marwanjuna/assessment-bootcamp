import { combineReducers } from "redux";
import addPasswordReducer from "./password/addPasswordReducer";
import allPaswordReducer from "./password/allPasswordReducer";
import editPasswordReducer from "./password/editPasswordReducer";
import getUserReducer from "./user/get/getUserReducer";
import userLoginReducer from "./user/login/userLoginReducer";
import userRegisterReducer from "./user/register/userRegisterReducer";
import updateUserReducer from "./user/update/updateUserReducer";

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  addPassword: addPasswordReducer,
  allPassword: allPaswordReducer,
  editPassword: editPasswordReducer,
  userDetail: getUserReducer,
  updateUser: updateUserReducer,
});

export default rootReducer;