export const ADD_MACRO = 'ADD_MACRO'
export const MACRO_REQUEST = 'MACRO_REQUEST'
export const MACRO_SUCCESS = 'MACRO_SUCCESS'
export const MACRO_FAILURE = 'MACRO_FAILURE'

export function addMacro(macro) {
    return {
        type: ADD_MACRO,
        payload: macro
    }
}

export function macroRequest() {
    return {
        type: MACRO_REQUEST
    }
}

export function macroSuccess(macro) {
    return {
        type: MACRO_SUCCESS,
        payload: macro
    }
}

export function macroFailure(macro) {
    return {
        type: MACRO_FAILURE,
        payload: macro
    }
}