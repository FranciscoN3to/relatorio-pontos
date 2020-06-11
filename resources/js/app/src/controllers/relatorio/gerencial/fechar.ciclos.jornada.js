//Inserir primeira e ultima macro de cada jornada caso não haja 
import moment from 'moment'
//funções de macros
export const INICIO_JORNADA = 'INICIO_JORNADA'
export const INICIO_DIRECAO = 'INICIO_DIRECAO'
export const INICIO_DESCANSO = 'INICIO_DESCANSO'
export const INICIO_ESPERA = 'INICIO_ESPERA'
export const INICIO_REFEICAO = 'INICIO_REFEICAO'
export const INTERJORNADA = 'INTERJORNADA'
export const EM_OPERACAO = 'EM_OPERACAO'

export default function FecharCiclos(ArrayCiclos) {

    const toDay = moment().format('YYYY-MM-DD')

    ArrayCiclos.map(ciclo => {

        if(ciclo.macros[0].funcao_macro !== INICIO_JORNADA){

        }
     
    })

}