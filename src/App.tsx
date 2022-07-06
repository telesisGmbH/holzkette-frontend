import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { WoodPileList } from "./WoodPileList";

export const HolzketteFrontend = () => (
    <Admin
        //@ts-ignore
        dataProvider={dataProvider}
    >
        <Resource name="wood_piles" list={WoodPileList} />
    </Admin>
);