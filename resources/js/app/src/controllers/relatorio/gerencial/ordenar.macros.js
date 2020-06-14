//Ordenar todas as macros por data e hora 
import moment from 'moment'
 
export default function Ordernar(periodo, macros) {

    return periodo.reduce((initialValue, dateObj) => {

        const listMacrosDate = macros.filter(mac => mac.data_macro === dateObj.date)

        listMacrosDate.sort((a, b) => { return moment(a.hora_definida, 'HH:mm:ss') - moment(b.hora_definida, 'HH:mm:ss') })

        initialValue.push({ ...dateObj, macros: listMacrosDate })

        return initialValue

    }, [])

}