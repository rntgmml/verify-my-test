'use client'
import { ChangeEvent, useEffect, useState } from "react"
import Button from "@/components/button"
import Header from "@/components/header"
import Input from "@/components/input"
import { isEmail } from "@/utils/isEmailValid"
import { isFullName } from "@/utils/isFullNameValid"
import { isPossiblePhoneNumber } from 'react-phone-number-input'


export default function Home() {
  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('')
  const [isMobileValid, setIsMobileValid] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [step, setStep] = useState(0);


  useEffect(() => {
    const validStatesCount = [isNameValid, isEmailValid, isMobileValid, isPasswordValid].filter(
      isValid => isValid
    ).length;
    setStep(validStatesCount)
  }, [isNameValid, isEmailValid, isMobileValid, isPasswordValid]);

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

  return (
    <div className="px-6 py-5">
      <Header step={step} />
      <Input value={name} onChange={handleNameChange} type="text" legend="Full Name" isValid={isNameValid || name === ''} />
      <Input value={email} onChange={handleEmailChange} type="text" legend="Email" isValid={isEmailValid || email === ''} />
      <Input legend="Mobile" isMobile onChange={handleMobileChange} isValid={isMobileValid || mobileNumber === undefined} />
      <Input value={password} onChange={handlePasswordChange} type="password" legend="Password" isPassword isValid={isPasswordValid || password === ''} />
      <Button variant="primary">
        Save
      </Button>
      <Button variant="secondary">
        Got a VerifyMyAge account? Sign in
      </Button>
    </div>
  )
}
