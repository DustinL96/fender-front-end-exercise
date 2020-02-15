import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { HOME } from "../defs/routerPaths";
import ProductsScreen from "../screens/ProductsScreen";

function Router(): JSX.Element {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={HOME} exact component={ProductsScreen} />
                <Redirect to={HOME} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
