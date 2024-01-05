import React from 'react';
import Link from 'next/link';
import { NavigationProp } from './_types/types';

export default function Navigation({ menus }: NavigationProp) {
    return (
        <div className='flex justify-between items-center py-3'>
            {menus.map((menu) => (
                <Link
                    href={typeof menu.path === 'string' ? menu.path : '/'}
                    key={menu.key}
                >
                    {menu.label}
                </Link>
            ))}
        </div>
    );
}
