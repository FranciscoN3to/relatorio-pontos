//funções de macros
export const INICIO_JORNADA = 'INICIO_JORNADA'
export const INICIO_DIRECAO = 'INICIO_DIRECAO'
export const INICIO_DESCANSO = 'INICIO_DESCANSO'
export const INICIO_ESPERA = 'INICIO_ESPERA'
export const INICIO_REFEICAO = 'INICIO_REFEICAO'
export const INTERJORNADA = 'INTERJORNADA'
export const EM_OPERACAO = 'EM_OPERACAO'
export const SEM_JORNADA = 'SEM_JORNADA'
export const MACRO_AUTOMATICA = 'MACRO_AUTOMATICA'
export const MACRO_EXCLUIODA = 'MACRO_EXCLUIODA'


export default function SchemaMacro(macro) {
    return {
        id: macro?.id || null,                    
        nome_macro: macro?.nome_macro || null,            
        macro: macro?.macro || null,                 
        funcao_macro: macro?.funcao_macro || null,          
        macro_automatica: macro?.macro_automatica || false,      
        id_employee: macro?.id_employee || null,       
        hora_definida: macro?.hora_definida || null,         
        hora_insercao: macro?.hora_insercao || null,         
        latitude: macro?.latitude || null,              
        longitude: macro?.longitude || null,             
        data_macro: macro?.data_macro || null,            
        justificativa: macro?.justificativa || null,                       
        texto_justificativa: macro?.texto_justificativa || null,   
        editado: macro?.editado || false, 
    }
}
