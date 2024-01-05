import Image from 'next/image';
import React from 'react';
import { BorderDottedIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Props = {};

export default function Others({}: Props) {
    return (
        <div className='flex items-center gap-x-3'>
            <span>
                <Image
                    src='/svg/edited.svg'
                    width={24}
                    height={24}
                    alt='Edited'
                />
            </span>
            <span className='text-gray-400'>21h</span>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant='default'
                        className='outline-none hover:bg-gray-600/50 hover:rounded-full'
                        size='icon'
                    >
                        <BorderDottedIcon className='w-4 h-4' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-44 cursor-pointer'>
                    <DropdownMenuLabel>Muted</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel className='text-red-600 font-semibold'>
                        Block
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Hide</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel className='text-red-600 font-semibold'>
                        Report
                    </DropdownMenuLabel>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
