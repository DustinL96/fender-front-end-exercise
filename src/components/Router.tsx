import * as React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { INDIVIDUAL_ITEM, PRODUCTS } from "../defs/routerPaths";
import ProductsScreen from "../screens/ProductsScreen";
import IndividualItemScreen from "../screens/IndividualItemScreen";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const PageContainer = styled.div`
    flex-grow: 1;
    width: 100%;
    display: flex;
    justify-content: center;
`;
function Router(): JSX.Element {
    return (
        <HashRouter basename="/">
            <Header />
            <PageContainer>
                <Switch>
                    <Route path={PRODUCTS} exact component={ProductsScreen} />
                    <Route path={INDIVIDUAL_ITEM} exact component={IndividualItemScreen} />
                    <Redirect to={PRODUCTS} />
                </Switch>
            </PageContainer>
            <Footer />
        </HashRouter>
    );
}

export default Router;
