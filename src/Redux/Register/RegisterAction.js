import {LOGINTOGGLE} from './RegisterType'
import {SIGNUPTOGGLE} from './RegisterType'

 
export  const loginToggleStatus = () => {
    return {
        type : LOGINTOGGLE
    }
}

export  const signupToggleStatus = () => {
    return {
        type : SIGNUPTOGGLE
    }
}