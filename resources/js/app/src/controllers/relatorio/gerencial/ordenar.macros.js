//Ordenar todas as macros por data e hora 
import moment from 'moment'

function getPeriodo(dateStart, dateEnd) {

    const start = moment(dateStart)
    const end = moment(dateEnd)
    const arrayDate = []

    while(start <= end){
        arrayDate.push({
                        date: start.format('YYYY-MM-DD'), 
                        weekday: start.format('ddd')
                    })
        start.add(1, 'days')
    }

    return arrayDate

}

export default function Ordernar(periodo, macros) {

    const periodoArray = getPeriodo(periodo.start, periodo.end)

    return periodoArray.reduce((initialValue, dateObj) => {

        const listMacrosDate = macros.filter(mac => mac.data_macro === dateObj.date)

        listMacrosDate.sort((a, b) => { return moment(a.hora_definida, 'HH:mm:ss') - moment(b.hora_definida, 'HH:mm:ss') })

        initialValue.push({ ...dateObj, macros: listMacrosDate })

        return initialValue

    }, [])

}