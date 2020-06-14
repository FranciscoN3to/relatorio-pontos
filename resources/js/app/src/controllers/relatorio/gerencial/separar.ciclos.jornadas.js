//separar todas as jornas e multiplas jornada do dia.
import { INICIO_JORNADA, INTERJORNADA } from './funcoes.macros'

export default function separarCiclos(jornadas) {
    
    return jornadas.map((jornada) => {

        const multJornadaSeparada = jornada.macros.reduce((initialValue, macro, index) => {
            
            if(macro.funcao_macro === INICIO_JORNADA || index === 0){ initialValue.push([]) }

            const lastArrayCircle = initialValue.length - 1

            initialValue[lastArrayCircle].push(macro)

            return initialValue

        }, [])

        return {
            ...jornada,
            macros: multJornadaSeparada
        }

    })

}