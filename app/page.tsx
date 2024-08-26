import { LoginButton } from '@/components/auth/login'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='h-screen bg-black text-white '>
    <div className=" flex  flex-col items-center justify-center bg-black  text-white mx-auto p-5 gap-2">
      <h1 className="text-4xl font-bold">Welcome to <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-gray-50 animate-pulse'> Charter</span></h1>
      <p className="">Create and customize your charts easily.</p>
     <LoginButton>
     <Button variant={'secondary'} size={'lg'} className='rounded-xl bg-blue-700'> Sign in</Button>
     </LoginButton>
     <Button variant={'secondary'} size={'lg'} className='rounded-xl bg-blue-700'>
       <Link href={'/chart'}>Generate Chart
       </Link>
       </Button>
    </div>
    </main>
  )
}
