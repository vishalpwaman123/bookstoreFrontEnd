import { LOGINTOGGLE } from './RegisterType'
import { SIGNUPTOGGLE } from './RegisterType'
import { BOOKNAME } from './RegisterType'
import { ARRAYLIST } from './RegisterType'
import { ARRAYWISHLIST } from './RegisterType'
import { ADDQUENTITY } from './RegisterType'
import { SUBQUENTITY } from './RegisterType'
import { PLACEORDERKEY } from './RegisterType'
import { CONTINUESKEY } from './RegisterType'
import { SORTVALUE } from './RegisterType'
import { ATTRIBUTEVALUE } from './RegisterType'

const initialState = {
    key: '',
    logintoggle: true,
    signuptoggle: false,
    currentBookName: '',
    ArrayList: [],
    ArrayWishList: [],
    PlaceOrderKey: false,
    ContinuesKey: false,
    quentity: 0,
    Sortvalue: 'Sort by relevence',
    attributevalue : 'BOOK NAME'
}

const bookStorereducer = (state = initialState, action) => {

    switch (action.type) {

        case PLACEORDERKEY:
            return {
                ...state,
                PlaceOrderKey: !state.PlaceOrderKey,

            }

        case CONTINUESKEY:

            return {
                ...state,
                ContinuesKey: !state.ContinuesKey,

            }
        case LOGINTOGGLE:
            return {
                ...state,
                logintoggle: true,
                signuptoggle: false

            }

        case SIGNUPTOGGLE:
            return {
                ...state,
                logintoggle: false,
                signuptoggle: true

            }

        case BOOKNAME:
            return {
                ...state,
                currentBookName: action.bookName,
                ArrayList: '',

            }

        case ARRAYLIST:
            return {
                ...state,
                ArrayList: action.ArrayList,

            }

        case ARRAYWISHLIST:
            return {
                ...state,
                ArrayWishList: action.ArrayWishList,

            }

        case ADDQUENTITY:
            return {
                ...state,
                quentity: state.quentity + 1,

            }

        case SUBQUENTITY:
            if (state.quentity === 0) {
                state.quentity = 1
            }
            return {
                ...state,
                quentity: state.quentity - 1,

            }

        case SORTVALUE:

            return {
                ...state,
                Sortvalue: action.value,

            }

        case ATTRIBUTEVALUE:

            return {
                ...state,
                attributevalue: action.value,

            }

        default: return state;
    }
}

export default bookStorereducer;
