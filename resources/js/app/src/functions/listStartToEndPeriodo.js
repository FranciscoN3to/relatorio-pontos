import moment from 'moment'

export default function getPeriodo(dateStart, dateEnd) {

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