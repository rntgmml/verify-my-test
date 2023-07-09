import BackIcon from '../../../public/images/back.svg'
import Logo from '../../../public/images/logo.svg'
import Image from 'next/image';
import Progress from '../progress';


export const Header = () => {
    return (
        <div>
            <div className='hidden sm:flex justify-between items-center'>
                <Image src={Logo} priority alt="Verify my logo" />

                <Progress step={1} totalSteps={5} />

            </div>
            <div className='flex justify-between'>
                <div>
                    <div className='flex sm:flex-col items-center sm:items-start mb-[14px] sm:mb-[20px]'>
                        <Image src={BackIcon} priority alt="Arrow back" className='mr-[10px] sm:mb-[20px]' />
                        <p className='font-semibold text-[19px] sm:text-[36px] text-darkGrey'>Join VerifyMyAge</p>
                    </div>
                    <p className='mb-[30px] sm:mb-[60px] whitespace-pre sm:whitespace-nowrap'>{`Let's start by setting up\nyour login details.`}</p>
                </div>
                <div className='sm:hidden'>
                    <Progress step={1} totalSteps={5} />
                </div>
            </div>
        </div>
    )
}