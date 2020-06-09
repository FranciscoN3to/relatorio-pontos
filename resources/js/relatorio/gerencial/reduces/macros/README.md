# MACROS REDUCER 

Nesse recuder cada grupo de macros sera separdo pelo id do seu respectivo employee, A key de ciclos de macros dos employees serão especificada por date [YYYY-MM-DD], employeeList sera a lista de todos os employees

## Exemplo

```js
const state = {
    isFetching: false,
    periodo: {
        start: '2020-08-20',
        end: '2020-08-21'
    },
    employeesList: {
        20: {
            id: 20,
            nome: 'francisco',
            ...
        },
        ...
    },
    macros: {
        20: {
            '2020-08-20': {
                date: '2020-08-20',
                data: [
                    {
                        id: 33,
                        macro: 'inicio_jornada',
                        hora_definida: '11:22:59'
                    },
                    ...
                ]
            },
            '2020-08-21': {
                date: '2020-08-21',
                data: [
                    {
                        id: 77,
                        macro: 'inicio_jornada',
                        hora_definida: '06:28:18'
                    },
                    ...
                ]
            }
        },
        ...
    }
    error: false
}
```