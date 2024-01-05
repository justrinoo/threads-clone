import React from 'react';
import Image from 'next/image';

type Props = {};

export default function CardPostProfile({}: Props) {
    return (
        <React.Fragment>
            <Image
                src='/images/profile-dummy.jpg'
                alt='Profile'
                width={40}
                height={40}
                className='mr-3 relative'
                style={{
                    borderRadius: '100%',
                    height: '50px',
                    width: '50px',
                    objectFit: 'cover',
                }}
            />
            <div className='absolute bg-white rounded-full left-10 top-7 border-[1px] border-black'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='12'
                    height='12'
                    fill='#000000'
                    viewBox='0 0 256 256'
                >
                    <path d='M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z'></path>
                </svg>
            </div>
        </React.Fragment>
    );
}
