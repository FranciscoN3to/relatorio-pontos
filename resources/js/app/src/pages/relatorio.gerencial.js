import React from 'react'
import Moment from 'moment'
import useQuery from '../functions/getQuery'


export default () => {
 
    const { start, end, employee } = useQuery(['end', 'start', 'employee'])

    console.log(start, end, employee)

    return (
        <div className="container">
            <h3>Relatório gerencial</h3>
            <button type="button" name="" id="" className="btn btn-success mr-2">
                <i className="fas fa-filter d-inline mr-2"></i>
                <p className="m-0 d-inline">Filtro</p>
            </button>
            <button type="button" name="" id="" className="btn btn-success mr-2">
                <i className="fas fa-plus d-inline mr-2"></i>
                <p className="m-0 d-inline">Inserir macro</p>
            </button>
            <button type="button" name="" id="" className="btn btn-success mr-2">
                <i className="fas fa-share-square d-inline mr-2"></i>
                <p className="m-0 d-inline">Exportar</p>
            </button>
            <div className="d-flex justify-content-center container-relatorio mt-10 rounded">
                <div className="w-100 d-flex container justify-content-center align-items-center">
                    <div>
                        <i className="fas fa-info-circle d-inline text-secondary mr-2"></i>
                        <p className="m-0 d-inline text-secondary">Sem dados para mostrar</p>
                    </div>
                </div>

            </div>
        </div>
    )
}