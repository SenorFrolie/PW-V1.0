import Link from 'next/link';



export default function Navbar(){
    return (
    <aside className='md:w-[100px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif'>
    <div className='lg:sticky lg:top-20'>
        <nav
        className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
        id="nav"
        >
          <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
            <div className='dark:hover:text-neutral-200 flex align-middle'>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/projects'>Projects</Link></li>
                <li><Link href='/blog'>Blog</Link></li>
            </ul>
            </div>
          </div>
        </nav>
    </div>
    </aside>
    )
}