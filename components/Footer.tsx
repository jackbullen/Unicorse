import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-1000 mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className="flex flex-col justify-start items-start gap-6">
          <Link href="/" className='flex items-center justify-center'>
            <div className="flex items-center justify-center gap-2">
              <Image src="/unicorn_logo.png" alt="logo" width={25} height={40} className='object-contain'/>
              <Image src="/logo.png" alt="logo" width={120} height={20} className="object-contain" />
            </div>
          </Link>
          <p className="text-base text-gray-700">© 2023 <br /> Discover Your UVicorn.</p>
        </div>
          <div className="foot-linkes">
            {footerLinks.map((link) => (
              <div key={link.title} className="flex flex-col gap-6 text-base min-w-[170px]">
                <h3 className="font-bold">{link.title}</h3>
                {link.links.map((item) => (
                  <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-gray-500 text-base"
                  >
                    {item.name}
                  </Link>
                ))  
                }
              </div>
            ))}
          </div>

        </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
      <p>©2023 UVicorn. All Rights Reserved</p>
        <div className='flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10'>
          <Link href='/' className='text-gray-500'>
            Privacy Policy
          </Link>
          <Link href='/' className='text-gray-500'>
            Terms of Use
          </Link>
        </div>
      </div>  
      
    </footer>
  )
}

export default Footer