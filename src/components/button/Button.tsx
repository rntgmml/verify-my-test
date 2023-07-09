import React, { ReactNode } from 'react';
import LockerIcon from '../../../public/images/locker.svg'
import Image from 'next/image';

type ButtonProps = {
    variant: 'primary' | 'secondary';
    leftIcon?: boolean;
    children: ReactNode;
};

export const Button = ({
    variant,
    children,
}: ButtonProps) => {

    const buttonStyle = `flex items-center justify-center rounded-full text-sm w-full py-2 lg:py-6 lg:px-7 lg:w-auto ${variant === 'secondary' ? 'border-darkGrey border' : 'border-none'
        } ${variant === 'primary' ? 'bg-lightYellow text-darkGrey font-semibold' : 'bg-white text-darkGrey'}`;

    return (
        <button className={buttonStyle}>
            {variant === 'primary' && (
                <Image src={LockerIcon} priority alt="Locker icon" className='mr-2' />
            )}
            {children}
        </button>
    );
};
