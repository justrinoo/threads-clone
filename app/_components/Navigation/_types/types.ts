import { ReactNode } from 'react';

export type Menu = {
    key: string;
    label: string;
    path: string | boolean;
    // icon: any;
};

export type NavigationProp = {
    menus: Menu[];
};
