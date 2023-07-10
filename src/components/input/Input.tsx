import React, { ChangeEvent, useEffect, useState } from 'react';
import PasswordIcon from '../../../public/images/password.svg'
import Image from 'next/image';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

type InputProps = {
    legend: string;
    type?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    isValid?: boolean;
    isPassword?: boolean;
    isMobile?: boolean
    mobileNumber?: number
};

export const Input = ({ legend, isValid = true, isPassword = false, type, value, onChange, isMobile = false, mobileNumber }: InputProps) => {
    const borderClassName = isValid ? 'border-sonicSilver' : 'border-warning';
    const [valueMobile, setValueMobile] = useState<any>(mobileNumber);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    useEffect(() => {
        if (isMobile) {
            onChange && onChange(valueMobile);
        }
    }, [valueMobile, isMobile, onChange]);

    const handleMobileChange = (newValue: any) => {
        setValueMobile(newValue);
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <fieldset className={`border border-solid ${borderClassName} pt-1 pb-2 px-2 rounded-full w-full md:w-[500px] mb-5`}>
            <legend className="text-sm font-semibold px-1.5">{legend}</legend>
            <div className="relative flex items-center">
                {isMobile ? (
                    <PhoneInput placeholder="Enter phone number" value={valueMobile} onChange={handleMobileChange} />

                ) : (
                    <input type={isPasswordVisible ? 'text' : type} placeholder="Please type in..." className="ml-2 focus:outline-none" value={value} onChange={onChange} />

                )}
                {isPassword && (
                    <div className="absolute right-1" onClick={togglePasswordVisibility}>
                        <Image src={PasswordIcon} priority alt="Password icon" className="mr-2" width={16} height={16} />
                    </div>
                )}
            </div>
        </fieldset>
    )
}