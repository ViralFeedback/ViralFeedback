import React, { FunctionComponent } from 'react';
import {
    Link,
    matchPath,
    withRouter,
    RouteComponentProps
} from 'react-router-dom';
import { Routes } from '../navigation/routes';

interface INav extends RouteComponentProps {}

const Nav: FunctionComponent<INav> = ({ location }) => {
    return <div></div>;
};
