import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from '../components/nav';
import NotFoundPage from '../screens/notFound';
import { Routes } from './routes';
import GA from 'components/analytics';

export const Navigation: FunctionComponent = () => {
    return (
        <>
            <BrowserRouter basename="/">
                {GA.init() && <GA.RouteTracker />}
                <Switch>
                    {Routes.map((value, key) => {
                        return (
                            <Route exact path={value.path} key={key}>
                                <Nav />
                                <div className="page-content">
                                    <value.component />
                                </div>
                            </Route>
                        );
                    })}
                    <Route path="*">
                        <NotFoundPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
};
