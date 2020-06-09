import { ADD_MACRO, MACRO_REQUEST, MACRO_SUCCESS, MACRO_FAILURE } from '../../actions/macros'

const INITIAL_STATE = {
    isFetching: false,
    periodo: {},
    macros: {},
    error: false
}
 
export default function Macros(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_MACRO:
            return {
                ...state,
                macros: {
                    ...state.macros,
                    [action.employeeID]: {
                  
                        ...state.macros[action.employeeID],
                        [action.date]: {
                            ...state.macros[action.employeeID][action.date],
                            data: [
                                ...state.macros[action.employeeID][action.date].data,
                                {
                                    ...action.macro
                                }
                            ]
                        },
                    }
                }
            }
        case MACRO_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case MACRO_SUCCESS:
            return {
                ...state,
                macros: {
                    ...joinNewCycle(state, action)
                },
                isFetching: false,
                error: false
            }
        case MACRO_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        default:
            return state
    }
}

/*
    {
        employeeID: 20,
        nome: 'francisco',
        macros: [
            {
                id: 22,
                macro: 'inicio_jornada'
            }
        ]
    }
*/

function joinNewCycle(state, employee) {

    const newState = {}

    const stateData = state.macros

    for(const employeeID in stateData){

        employee.map(data => {

            if(data.employeeID === employeeID){

                for(const date in stateData[employeeID]){

                    const cicloMacroState = stateData[employeeID][date].data

                    const newCircleMacro = cicloMacroState.reduce((contador, macro) => {
                        if(!contador.find(Element => Element.id === macro.id)){
                           return [...contador, {...macro}]
                        }
                        return contador
                    }, [...data.macros])

                    Object.assign(newState, {
                        ...newState,
                        [employeeID]: {
                            ...newState[employeeID],
                            [date]: {
                                date: date,
                                data: [newCircleMacro]
                            }
                        }
                    })
                }
            }
        })
    }

    return newState

}