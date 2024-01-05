'use client';
import React from 'react';
import CardPostAction from './CardPostAction';
import CardPostDescription from './CardPostDescription';
import CardPostProfile from './CardPostProfile';
import CardPostRepliesLikes from './CardPostRepliesLikes';

type Props = {};

export default function CardPost({}: Props) {
    return (
        <div className='flex items-start'>
            <div className='flex items-start justify-between w-full relative'>
                <CardPostProfile />
                <div className='flex flex-col gap-y-2'>
                    <CardPostDescription />
                    <CardPostAction />
                    <CardPostRepliesLikes />
                </div>
            </div>
        </div>
    );
}
