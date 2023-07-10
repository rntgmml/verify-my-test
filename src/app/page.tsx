'use client'
import { ChangeEvent, useEffect, useState } from "react"
import Image from 'next/image';
import { useRouter } from "next/navigation";
import Button from "@/components/button"
import Header from "@/components/header"
import Input from "@/components/input"
import { isEmail } from "@/utils/isEmailValid"
import { isFullName } from "@/utils/isFullNameValid"
import Checkbox from "@/components/checkbox"
import DesktopImage from '../../public/images/desktop.png'
import LogoGray from '../../public/images/logo-gray.svg'
import LockerGray from '../../public/images/locker-gray.svg'

export default function Home() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('')
  const [isMobileValid, setIsMobileValid] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [step, setStep] = useState(0);


  useEffect(() => {
    const validStatesCount = [isNameValid, isEmailValid, isMobileValid, isPasswordValid, isChecked].filter(
      isValid => isValid
    ).length;
    setStep(validStatesCount)
  }, [isNameValid, isEmailValid, isMobileValid, isPasswordValid, isChecked]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    if (isFullName(name)) {
      setIsNameValid(true)
    } else {
      setIsNameValid(false)
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (isEmail(email)) {
      setIsEmailValid(true)
    } else {
      setIsEmailValid(false)
    }
  }

  const handleMobileChange = (newValue: any) => {
    setMobileNumber(newValue)
    if (mobileNumber !== undefined) {
      setIsMobileValid(true)
    } else {
      setIsMobileValid(false)
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    if (password.length > 4) {
      setIsPasswordValid(true)
    } else {
      setIsPasswordValid(false)
    }
  }

  const handleSubmit = () => {
    // submit form data
    router.replace('/verified');
    console.log({ 'email': email, 'mobile': mobileNumber, 'name': name })
  }

  return (
    <div className="py-5 md:px-0 md:py-0 md:flex bg-whiteSmoke md:bg-white h-screen md:h-full">
      <div className="px-6 w-1/2 hidden md:block">
        <Image src={DesktopImage} priority alt="Verify my logo" className="h-screen" />
      </div>
      <div className="md:pl-20 md:pr-5">
        <div className="px-6">
          <Header step={step} />
          <Input value={name} onChange={handleNameChange} type="text" legend="Full Name" isValid={isNameValid || name === ''} />
          <Input value={email} onChange={handleEmailChange} type="text" legend="Email" isValid={isEmailValid || email === ''} />
          <Input legend="Mobile" isMobile onChange={handleMobileChange} isValid={isMobileValid || mobileNumber === undefined} />
          <Input value={password} onChange={handlePasswordChange} type="password" legend="Password" isPassword isValid={isPasswordValid || password === ''} />
          <Checkbox onChange={() => setIsChecked(!isChecked)} />
          <div className='md:hidden pt-6 border-b-[2px] border-darkGrey opacity-[0.15]' />
          <div className='md:hidden flex justify-center items-center py-6'>
            <Image src={LockerGray} priority alt="Verified icon" />
            <p className='text-gray mx-2 text-xs'>Secured by</p>
            <Image src={LogoGray} priority alt="Verified icon" />
          </div>
        </div>
        <div className='md:hidden border-b-[1px] border-darkGrey opacity-[0.15] mb-6' />
        <div className="md:flex md:gap-5 md:mt-14 bg-white px-6">
          <Button variant="primary" disabled={step !== 5} onClick={handleSubmit}>
            Save
          </Button>
          <Button variant="secondary" disabled={false} onClick={() => console.log('sign in page')}>
            Got a VerifyMyAge account? Sign in
          </Button>
        </div>
      </div>
    </div>
  )
}
