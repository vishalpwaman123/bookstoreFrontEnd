import {LOGINTOGGLE} from './RegisterType'
import {SIGNUPTOGGLE} from './RegisterType'
import {BOOKNAME} from './RegisterType'
import {ARRAYLIST} from './RegisterType'
import {ARRAYWISHLIST} from './RegisterType'
import {ADDQUENTITY} from './RegisterType'
import {SUBQUENTITY} from './RegisterType'
import {PLACEORDERKEY} from './RegisterType'
import { CONTINUESKEY } from './RegisterType'
import { SORTVALUE } from './RegisterType'
import { ATTRIBUTEVALUE } from './RegisterType'
 
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

export  const bookNameFunction = (bookName) => {
    return {
        type : BOOKNAME,
        bookName : bookName
    }
}

export  const PassingFunction = (ArrayList) => {
    return {
        type : ARRAYLIST,
        ArrayList : ArrayList
    }
}

export  const PassingWishFunction = (ArrayWishList) => {
    return {
        type : ARRAYWISHLIST,
        ArrayWishList : ArrayWishList
    }
}

export  const AddQuentity = () => {
    return {
        type : ADDQUENTITY,
        // value : quentity
    }
}

export  const SubQuentity = () => {
    return {
        type : SUBQUENTITY ,
        // value : quentity
    }
}

export  const PlaceOrderPress = () => {
    return {
        type : PLACEORDERKEY 
    }
}

export  const ContinuesPress = () => {
    return {
        type : CONTINUESKEY 
    }
}

export  const SortFunction = (value) => {
    return {
        type : SORTVALUE ,
        value : value ,
    }
}

export  const AttributeFunction = (value) => {
    return {
        type : ATTRIBUTEVALUE ,
        value : value ,
    }
}