import { useLocation } from 'react-router-dom'

export default (query) => {

    return query.reduce((complete, qry) => {

        const value = new URLSearchParams(useLocation().search).get(qry)

        return Object.assign({}, {...complete}, {[qry]: value})

    }, {})
        
}