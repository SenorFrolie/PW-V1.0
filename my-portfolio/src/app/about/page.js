import {
    GitHubIcon,
    ArrowIcon,
    LinkedinIcon
  } from '../../../components/Icons';
  

export default function AboutPage(){
    return (
        <section>
            <h1 className="font-bold text-3xl font-serif">About Me</h1>
            <p>
                How is it going! My name is Robert.
            </p>
            <div className="my-5 w-[750px] text-[20.5px] prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
                <p className="mb-8">
                    I am a recent college graduate from Texas State Univerity with a Bachalors 
                    in Computer Science. I love all things tech and will go out of my way to learn how a new 
                    piece of technology. I believe Software has the potential 
                    to improve out lives and makes difficult task reachable 
                </p>
                <hr className="mb-8" />
                <p className="mb-8">
                    On my days off, I like to spend time with friends and play the occasional game of Apex, Valorant or 
                    whatever crappy game my friends decide to make me download for the day. Another thing I like to do is to read up on the newest trend of technology 
                    that is supposedly taking over the tech world.<br></br>
                </p>
                <p className="mb-8">
                    My hope for this website is to document my career as Software Developer, from the good to the very ugly and hopefully when i decide to retire, 
                    hopefully that plays out as it does in my head if so, would be cool to see a timeline of my hardwork and success be layout on a website I design and maintain 
                    on my own for decades to come. 
                </p>
                <p className="mb-8">
                    This website will be available for others to reference and take pieces from to be used for their own website. I used
                   <a href='https://nextjs.org/docs' className='font-bold text-white hover:text-gray-600'> Next.js</a>
                    and 
                    <a href='https://tailwindcss.com/' className='font-bold text-white hover:text-sky-500'> tailwindcss</a> as my css library
                </p>
            </div>
                <div className="flex flex-col gap-2 md:flex-row md:gap-2">
                <div className="flex items-center">    
                </div>
            <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/SenorFrolie"
                className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
            >
                <div className="flex items-center">
                <GitHubIcon />
                <div className="ml-3">GitHub</div>
                </div>
                <ArrowIcon />
            </a>
            <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/robert-e-bonham/"
                className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
            >
                <div className="flex items-center">
                <LinkedinIcon />    
                <div className="ml-3">Linkedin</div>
                </div>
                <ArrowIcon />
            </a>
            </div>
        </section>
    )
}