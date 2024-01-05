import { Menu } from './types';
// import {
//     House,
//     MagnifyingGlass,
//     NotePencil,
//     Heart,
//     User,
// } from '../../../../assets/icons';

export const menus: Menu[] = [
    {
        key: 'home',
        label: 'Home',
        path: '/',
    },
    {
        key: 'search',
        label: 'Search',
        path: '/search',
    },
    {
        key: 'thread',
        label: 'Thread',
        path: false,
    },
    {
        key: 'activity',
        label: 'Activity',
        path: '/activity',
    },
    {
        key: 'account',
        label: 'Account',
        path: '/account',
    },
];
