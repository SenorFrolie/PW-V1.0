import Link from 'next/link';
import Image from 'next/image'

import { avatar } from 'lib/info';


export default function Navbar(){
    return (
<>
  <aside className='md:w-[110px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif' >
    <div className='lg:sticky lg:top-20' >
        <nav
        className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative "
        id="nav"
        >
          <div className='fled lg:hidden'>
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
            <div className='flex align-middle text-base/[50px] text-[18px]'>
              <ul>
                  <li><Link href='/' className='px-1 py-1 text-white-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>Home</Link></li>
                  <li><Link href='/about' className='px-1 py-1 text-white-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>About</Link></li>
                  <li><Link href='/projects' className='px-1 py-1 text-white-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>Projects</Link></li>
                  <li><Link href='/blog' className='px-1 py-1 text-white-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>Blog</Link></li>
              </ul>
            </div>
          </div>
          </div>
        </nav>
    </div>
    </aside>
    </>
    )
}