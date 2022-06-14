import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';

export const HolzketteFrontend = () => (
    <Admin
        dataProvider={dataProvider}
    >
        <Resource name="wood_piles" list={ListGuesser} />
    </Admin>
);