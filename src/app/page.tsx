import Button from "@/components/button"
import Input from "@/components/input"

export default function Home() {
  return (
    <div className="p-5">
      <h1 className='font-semibold text-2xl text-darkGrey'>Join VerifyMyAge</h1>
      <Input legend="Full Name" />
      <Button variant="primary">
        Primary Button
      </Button>
      <Button variant="secondary">
        Secondary Button
      </Button>
      <Button
        variant="primary"
      >
        Icon Button
      </Button>
    </div >
  )
}
