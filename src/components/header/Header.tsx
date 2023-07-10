import BackIcon from '../../../public/images/back.svg'
import Logo from '../../../public/images/logo.svg'
import Image from 'next/image';
import Progress from '../progress';

interface HeaderProps {
    step: number
}

export const Header = ({ step }: HeaderProps) => {
    return (
        <div className='md:pt-5'>
            <div className='hidden md:flex justify-between items-center'>
                <Image src={Logo} priority alt="Verify my logo" />
                <Progress step={step} totalSteps={5} />
            </div>
            <div className='flex justify-between'>
                <div>
                    <div className='flex md:flex-col items-center md:items-start mb-[14px] md:mb-[20px]'>
                        <Image src={BackIcon} priority alt="Arrow back" className='mr-[10px] md:mb-[20px] md:w-[44px] md:h-[44px]' />
                        <p className='font-bold text-[19px] md:text-4xl text-darkGrey'>Join VerifyMyAge</p>
                    </div>
                    <p className='mb-[30px] ml-8 md:ml-0 md:mb-[60px] whitespace-pre md:whitespace-nowrap'>{`Let's start by setting up\nyour login details.`}</p>
                </div>
                <div className='md:hidden'>
                    <Progress step={step} totalSteps={5} />
                </div>
            </div>
        </div>
    )
}