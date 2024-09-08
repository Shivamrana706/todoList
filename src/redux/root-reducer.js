import { combineReducers } from "redux";
import { todoData } from "./reducer";

const root_Reducer = combineReducers({
    todoData,
})

export default root_Reducer