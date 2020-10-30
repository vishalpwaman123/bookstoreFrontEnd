import {LOGINTOGGLE} from './RegisterType'
import {SIGNUPTOGGLE} from './RegisterType'

const initialState = {
    logintoggle : true,
    signuptoggle : false
}

const bookStorereducer = (state = initialState , action) => {
    switch(action.type) {

        case LOGINTOGGLE :
            return {
                ...state,
                logintoggle : true,
                signuptoggle : false
            }

        case SIGNUPTOGGLE :
            return {
                ...state,
                logintoggle : false,
                signuptoggle : true
            }

        default : return state;
    }
}

export default bookStorereducer;