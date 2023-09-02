import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from '.'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10 bg-purple-50/[.4]'>
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href="/" className='flex items-center justify-center'>
                <Image src="/unicorn_logo.png" alt="logo" width={35} height={35} className='object-contain'/>
                <Image src="/logo.png" alt="logo" width={160} height={70} className='object-contain px-2'/>
            </Link>
            <CustomButton
            title="Sign in"
            btnType="button"
            containerStyles='text-prim-blue text-xl rounded-full bg-white min-w-[150px]'
            />
        </nav>
    </header>
  )
}

export default Navbar