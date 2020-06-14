//Inserir primeira e ultima macro de cada jornada caso não haja 
import moment from 'moment'

import SchemaMacro, { INICIO_JORNADA, INICIO_DIRECAO, INICIO_DESCANSO, INICIO_ESPERA, INICIO_REFEICAO, INTERJORNADA, EM_OPERACAO, SEM_JORNADA, MACRO_AUTOMATICA, MACRO_EXCLUIODA } from './funcoes.macros'

const FUNCOES_PARADA = [INICIO_DESCANSO, INICIO_ESPERA, INICIO_REFEICAO]
const FUNCOES_DIRECAO = [INICIO_DIRECAO, EM_OPERACAO]
const FUNCOES_JORNADA = [INICIO_JORNADA]
const FUNCOES_PERNOITE = [INTERJORNADA]

export default function FecharCiclos(ArrayCiclos) {

    const toDay = moment().format('YYYY-MM-DD')

    return ArrayCiclos.map((cicloAtual, keyIndex) => {

        const ultimaMacroCicloAnterior = keyIndex > 0 ? ArrayCiclos[keyIndex - 1].macros[ArrayCiclos[keyIndex - 1].macros.length - 1] : null

        const cicloOrder = cicloAtual.macros.reduce((initialValue, macro, index, AllMacros) => {

            if(ultimaMacroCicloAnterior && index === 0){

                if(FUNCOES_PARADA.includes(ultimaMacroCicloAnterior.funcao_macro)){

                    if(FUNCOES_DIRECAO.includes(macro.funcao_macro)){
                        
                        //setar macro inicio jornada como automatica e 00:00:00
                        initialValue.push(SchemaMacro({
                            funcao_macro: INICIO_JORNADA,
                            macro_automatica: true,
                            hora_definida: '00:00:00',
                            macro: 'inicio_jornada',
                            nome_macro: 'Inicio Jornada'
                        }))

                        //setar ultimaMacroCicloAnterior como automatica e horario 00:00:00
                        initialValue.push(SchemaMacro({
                            funcao_macro: ultimaMacroCicloAnterior.funcao_macro,
                            macro_automatica: true,
                            hora_definida: '00:00:00',
                            macro: ultimaMacroCicloAnterior.macro,
                            nome_macro: ultimaMacroCicloAnterior.nome_macro
                        }))
 
                    }

                }else if(FUNCOES_DIRECAO.includes(ultimaMacroCicloAnterior.funcao_macro)){

                    if(!FUNCOES_JORNADA.includes(macro.funcao_macro)){

                        //setar macro inicio jornada como automatica e horario 00:00:00
                        initialValue.push(SchemaMacro({
                            funcao_macro: INICIO_JORNADA,
                            macro_automatica: true,
                            hora_definida: '00:00:00',
                            macro: 'inicio_jornada',
                            nome_macro: 'Inicio Jornada'
                        }))

                    } 

                }

                //setar macro atual
                initialValue.push(SchemaMacro(macro))

                return initialValue

            }else if(index === (AllMacros.length - 1)) {

                //setar macro atual
                initialValue.push(SchemaMacro(macro))

                if(toDay === cicloAtual.date){  return initialValue }

                if(FUNCOES_PARADA.includes(macro.funcao_macro)){

                    //setar macro reinicio de viagem como automatica e horario 23:59:59
                    initialValue.push(SchemaMacro({
                        funcao_macro: INICIO_DIRECAO,
                        macro_automatica: true,
                        hora_definida: '23:59:59',
                        macro: 'reinicio_viagem',
                        nome_macro: 'Reinicio de Viagem'
                    }))

                    //setar macro pernoite como automatica e horario 23:59:59
                    initialValue.push(SchemaMacro({
                        funcao_macro: INICIO_DIRECAO,
                        macro_automatica: true,
                        hora_definida: '23:59:59',
                        macro: 'pernoite',
                        nome_macro: 'Pernoite'
                    }))
 

                }else if(FUNCOES_DIRECAO.includes(macro.funcao_macro) || FUNCOES_JORNADA.includes(macro.funcao_macro)){
 
                    //setar macro pernoite como automatica e horario 23:59:59
                    initialValue.push(SchemaMacro({
                        funcao_macro: INICIO_DIRECAO,
                        macro_automatica: true,
                        hora_definida: '23:59:59',
                        macro: 'pernoite',
                        nome_macro: 'Pernoite'
                    }))
 

                }

                return initialValue

            }
 
            //setar macro atual
            initialValue.push(SchemaMacro(macro))

            return initialValue

        }, [])

        return {
            ...cicloAtual,
            macros: cicloOrder
        }
 
    })

}
 