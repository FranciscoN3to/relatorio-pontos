export const ADD_MACRO = 'ADD_MACRO'
export const REMOVE_MACRO = 'REMOVE_MACRO'
export const MACRO_REQUEST = 'MACRO_REQUEST'
export const MACRO_SUCCESS = 'MACRO_SUCCESS'
export const MACRO_FAILURE = 'MACRO_FAILURE'

export function addMacro(macro) {
    return {
        type: ADD_MACRO,
        ...macro
    }
}

export function removeMacro(macro) {
    return {
        type: REMOVE_MACRO,
        ...macro
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
        ...macro
    }
}

export function macroFailure(macro) {
    return {
        type: MACRO_FAILURE,
        ...macro
    }
}