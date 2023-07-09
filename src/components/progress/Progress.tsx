import React from 'react';

interface ProgressProps {
    strokeWidth?: number;
    progressColor?: string;
    children?: React.ReactNode;
    totalSteps: number;
    step: number;
}

export const Progress = ({
    strokeWidth = 5,
    progressColor = '#FBC81D',
    totalSteps,
    step,
}: ProgressProps) => {
    const radius = 25;
    const circumference = 2 * Math.PI * radius;
    const offset = ((100 - (step / totalSteps) * 100) / 100 * circumference);


    return (
        <div className='relative w-[80px] h-[80px]'>
            <svg width="100%" height="100%" viewBox="0 0 80 80" fill="none">
                <g filter="url(#filter0_d_1_606)">
                    <circle cx="40" cy="35" r="25" fill="white" />
                </g>
                <defs>
                    <filter
                        id="filter0_d_1_606"
                        x="0"
                        y="0"
                        width="80"
                        height="80"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="5" />
                        <feGaussianBlur stdDeviation="7.5" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_606" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1_606"
                            result="shape"
                        />
                    </filter>
                </defs>
                <circle
                    cx="40"
                    cy="35"
                    r={radius}
                    fill="none"
                    strokeWidth={strokeWidth}
                    stroke={progressColor}
                    strokeOpacity={1}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform="rotate(-90 40 35)"
                />
            </svg>
            <div
                className='absolute top-[45%] left-[50%] text-center text-darkGrey'
                style={{
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div className='flex items-center justify-center'>
                    <p className='text-sm font-bold'>{step}</p>
                    <p className='text-xs'>{`/${totalSteps}`}</p>
                </div>
            </div>
        </div>
    );
};
