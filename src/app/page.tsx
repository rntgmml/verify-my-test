import Button from "@/components/button"

export default function Home() {
  return (
    <div className="p-5">
      <h1 className='font-semibold text-2xl text-darkGrey'>Join VerifyMyAge</h1>
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
