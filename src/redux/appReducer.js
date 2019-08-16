import {me} from './authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case INITIALIZED_SUCCESS : {
            return {
                ...state,
                initialized: true
            }
        }
        default: {
            return state;
        }
    }
};

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(me());
    promise.then(() => {
        dispatch(initializedSuccess());
    })

};

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});


export default appReducer;