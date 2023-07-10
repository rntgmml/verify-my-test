import React, { ReactNode } from 'react';
import LockerIcon from '../../../public/images/locker.svg'
import Image from 'next/image';

type ButtonProps = {
    variant: 'primary' | 'secondary';
    leftIcon?: boolean;
    children: ReactNode;
    disabled: boolean
    onClick: () => void;
};

export const Button = ({
    variant,
    children,
    disabled,
    onClick
}: ButtonProps) => {

    const buttonStyle = `flex items-center justify-center rounded-full text-sm w-full py-2 md:py-6 sm:px-7 md:w-auto mb-5 ${variant === 'secondary' ? 'border-darkGrey border' : 'border-none'
        } ${variant === 'primary' ? 'bg-lightYellow text-darkGrey font-semibold' : 'bg-white text-darkGrey'}`;

    return (
        <button className={buttonStyle} disabled={disabled} onClick={onClick}>
            {variant === 'primary' && (
                <Image src={LockerIcon} priority alt="Locker icon" className='mr-2' />
            )}
            {children}
        </button>
    );
};
