import React from 'react';

type Props = {};

export default function CardPostRepliesLikes({}: Props) {
    return (
        <div className='flex items-center gap-x-3'>
            <span className='text-gray-400 text-xs'>40 replies</span>
            <span className='text-gray-400 text-xs'>·</span>
            <span className='text-gray-400 text-xs'>
                {new Intl.NumberFormat('id-ID').format(10000)} likes
            </span>
        </div>
    );
}
