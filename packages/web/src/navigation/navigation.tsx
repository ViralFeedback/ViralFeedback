import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../screens/not-found';
import { Routes } from './routes';

export const Navigation: FunctionComponent = () => {
    return (
        <BrowserRouter basename="/">
            <Switch>
                {Routes.map((value, key) => {
                    return (
                        <Route exact path={value.path} key={key}>
                            <value.component />
                        </Route>
                    );
                })}
                <Route path="*">
                    <NotFoundPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
