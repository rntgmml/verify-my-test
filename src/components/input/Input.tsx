import React from 'react';


type InputProps = {
    legend: string;
};

export const Input = ({ legend }: InputProps) => {
    return (
        <fieldset className="border border-solid border-sonicSilver py-2 px-2 rounded-full w-full sm:w-[500px]">
            <legend className="text-sm font-semibold px-1.5">{legend}</legend>
            <input placeholder="Please type in..." className="ml-2 focus:outline-none" />
        </fieldset>
    )
}