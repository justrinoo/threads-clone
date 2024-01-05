import React from 'react';
import {
    Heart,
    ChatCircle,
    ArrowBendDownLeft,
    ArrowBendUpRight,
} from '../../../../../assets/icons';

type Props = {};

export default function CardPostAction({}: Props) {
    return (
        <div className='flex items-center gap-x-4'>
            <Heart weight='bold' size={20} />
            <ChatCircle weight='bold' size={20} />
            <div>
                <ArrowBendUpRight weight='bold' size={16} className='-mb-1' />
                <ArrowBendDownLeft weight='bold' size={16} />
            </div>
        </div>
    );
}
