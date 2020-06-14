/** FUNÇÃO DE CONTRAUÇÃO DO RELATORIO
 *      Ordenar todas as macros por data e hora
 *      Inserir primeira e ultima macro de cada jornada caso não haja 
 *      separar todas as jornas e multiplas jornada do dia.
 *      Organizar fim de ciclo das demais macros.
 *      Calcular total intervalos.
 *      Calcular total refeição.
 *      Calcular total trabalho.
 *      Calcular total espera.
 *      Calcular total hora extra.
 *      Calcular total ad noturno.
 *      Calcular total banco de horas.
 */
import ListPeriodo from '../../../functions/listStartToEndPeriodo'
import OrdernarMacros from "./ordenar.macros"
import SepararCiclos from './separar.ciclos.jornadas'
import FecharCiclos from "./fechar.ciclos.jornada"

export default (periodo) => {

    //buscar macros no cache

    const periodoList = ListPeriodo(periodo.start, periodo.end)
    const macrosOrdenadas = OrdernarMacros(periodoList, allMacros)
    const ciclosFechados = FecharCiclos(macrosOrdenadas)
    const separarJornadas = SepararCiclos(ciclosFechados)

}