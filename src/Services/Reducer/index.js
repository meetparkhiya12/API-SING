import { combineReducers } from "redux";
import productreducer from "./productreducer";
import studentreducer from "./StudenReducer/Studenreducer"
import authreducer from "/"

const mainreducer = combineReducers({

    productreducer,
    studentreducer,
    authreducer
}

)

export default mainreducer