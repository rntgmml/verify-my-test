import React, { useState } from 'react';
import CheckIcon from '../../../public/images/check.svg'
import Image from 'next/image';

interface CheckboxProps {
    onChange: (checked: boolean) => void;
    defaultChecked?: boolean;
}

export const Checkbox = ({
    onChange,
    defaultChecked = false,
}: CheckboxProps) => {
    const [checked, setChecked] = useState(defaultChecked);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        setChecked(isChecked);
        onChange(isChecked);
    };

    return (
        <label className="flex items-center space-x-2 cursor-pointer mb-5 mt-2">
            <div
                className={`w-5 h-5 border ${checked ? 'bg-lightYellow border-lightYellow ' : 'bg-white border-sonicSilver'
                    } rounded-md flex items-center justify-center`}
            >
                {checked && (
                    <Image
                        src={CheckIcon}
                        priority
                        alt="Check icon"
                        className='mr-0.5 mt-0.5'
                    />
                )}
            </div>
            <input
                type="checkbox"
                className="hidden"
                checked={checked}
                onChange={handleChange}
            />
            <span className='text-xs text-darkGrey whitespace-pre md:whitespace-nowrap'>{`Tick this box to confirm you’ve read and agreed to\n`}our <span className='underline'><a href="#">Terms</a></span> and <span className='underline'><a href="#">Privacy Policy</a></span>.</span>
        </label>
    );
};

