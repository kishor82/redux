import { stat } from "fs";

const loggedReducer = (state = false , action ) => {
    switch(action.type){
        case 'SIGN_IN':
            return !state;
        default:
            return state;
    }
}
//added something
export default loggedReducer;