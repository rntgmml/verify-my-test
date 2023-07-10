import Image from 'next/image';
import Logo from '../../../public/images/logo.svg'
import LogoGray from '../../../public/images/logo-gray.svg'
import LockerGray from '../../../public/images/locker-gray.svg'
import VerifiedIcon from '../../../public/images/verified.svg'
import DesktopImage from '../../../public/images/desktop.png'


export default function Verified() {
    return (
        <div className="px-6 py-5 md:px-0 md:py-0 md:flex bg-whiteSmoke md:bg-white h-screen md:h-full">
            <div className="w-1/2 hidden md:block">
                <Image src={DesktopImage} priority alt="Verify my logo" className="h-screen" />
            </div>
            <div className="md:pl-20 md:pr-5 md:pt-6">
                <Image src={Logo} priority alt="Verify my logo" className='mb-10' />
                <p className='hidden md:block font-bold text-4xl mb-5'>Congrats</p>
                <p className='hidden md:block whitespace-pre mb-10 text-lg'>{`You'll be automatically verified for all future orders.\nYour orders will be dispatched without delay.`}</p>

                <div className='z-10 relative top-4 md:top-0 custom-shadow bg-lightYellow flex flex-col md:flex-row justify-center items-center rounded-[20px] md:w-[383px] h-[192px]'>
                    <Image src={VerifiedIcon} priority alt="Verified icon" className='md:mr-6 mb-4 md:w-[75px] md:h-[75px]' />
                    <p className='whitespace-pre leading-[1em] font-bold text-center md:text-left'>{`You’ve been\nsuccessfully\nverified!`}</p>
                </div>
                <div className='bg-white md:hidden custom-shadow-2 py-16 px-5 rounded-b-[20px]'>
                    <p className='whitespace-pre text-xm text-center'>{`You'll be automatically verified for all future\norders.Your orders will be dispatched\nwithout delay.`}</p>
                </div>
                <div className='md:hidden pt-6 border-b-[2px] border-darkGrey opacity-[0.15]' />
                <div className='md:hidden flex justify-center items-center pt-6'>
                    <Image src={LockerGray} priority alt="Verified icon" />
                    <p className='text-gray mx-2 text-xs'>Secured by</p>
                    <Image src={LogoGray} priority alt="Verified icon" />
                </div>
            </div>
        </div>
    )
}

