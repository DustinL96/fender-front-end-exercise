import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { HOME } from "../defs/routerPaths";
import HomeScreen from "../screens/HomeScreen";

function Router(): JSX.Element {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={HOME} exact component={HomeScreen} />
                <Redirect to={HOME} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
