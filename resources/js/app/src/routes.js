import React from 'react'
import {
    Switch,
    Route,
    Link,
  } from "react-router-dom";

import RelatorioGerencial from './pages/relatorio.gerencial'

function MainRoutes() {

    return (
        <Switch>
            <Route path="/" exact>
                <div>Ola</div>
            </Route>
            <Route path="/relatorio/gerencial" exact>
                <RelatorioGerencial />
            </Route>
        </Switch>
    )

}

export default MainRoutes