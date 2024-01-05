import React from 'react';
import Posts from './Posts';

type Props = {};

export default function Post({}: Props) {
    return (
        <section className='text-white py-4'>
            <Posts />
        </section>
    );
}
