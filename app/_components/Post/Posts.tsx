import React from 'react';
import CardPost from './components/CardPost/CardPost';

type Props = {};
export default function Posts({}: Props) {
    return (
        <React.Fragment>
            <div className='flex flex-col gap-y-8 items-start'>
                <CardPost />
                <CardPost />
                <CardPost />
                <CardPost />
            </div>
            <hr className='p-1 border-gray-800 mt-5 mb-5' />
        </React.Fragment>
    );
}
