import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type Props = {};

export default function Comment({}: Props) {
    return (
        <React.Fragment>
            <div className='flex items-center justify-between'>
                <div className='flex gap-x-4 w-full'>
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
                    <input
                        type='text'
                        placeholder='Start thread...'
                        className='bg-transparent outline-none w-full'
                    />
                </div>
                <div>
                    <Button
                        variant='outline'
                        disabled
                        className='font-semibold rounded-full'
                    >
                        Post
                    </Button>
                </div>
            </div>
            <hr className='mt-4 border-darkslategray' />
        </React.Fragment>
    );
}
