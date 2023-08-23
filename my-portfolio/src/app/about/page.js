import {
    GitHubIcon,
    ArrowIcon,
    LinkedinIcon,
    ResumeIcon
  } from '../../../components/Icons';
  

export default function AboutPage(){
    return (
        <section>
            <h1 className="font-bold text-3xl font-serif">About Me</h1>
            <p className='text-[20.5px]'>
                How is it going! My name is Robert.
            </p>
            <div className="my-5 w-[750px] text-[20.5px] prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
                <p className="mb-8">
                I recently graduated with a B.S. in Computer Science from Texas State. I am excited about technology and its potential to improve lives. 
                I am particularly into web and mobile development. I look forward to starting my career and contributing to new technologies.
                </p>
                <hr className="mb-8" />
                <p className="mb-8">
                In my free time, I like to socialize with my friends and play video games. 
                I am particularly fond of Apex Legends, Valorant, and other similar games. 
                I also enjoy reading about the latest technological trends and how they are shaping the world..<br></br>
                </p>
                <p className="mb-8">
                I hope to use this website to document my career as a software developer, from the good times to the bad. 
                I hope that when I retire, I can look back on this website and see a timeline of my hard work and success. 
                It would be amazing to see my website continue to be updated for decades to come, as a testament to my career.
                </p>
                <p className="mb-8">
                    This website will be available for others to reference and take pieces from to be used for their own website. I used
                   <a href='https://nextjs.org/docs' className='font-bold text-white hover:text-gray-600'> Next.js </a>
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

            <a
                rel="noopener noreferrer"
                target="_blank"
                href="/Robert_Bonham_Resume_2023.pdf"
                className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
            >
                <div className="flex items-center fill-white">
                <ResumeIcon />
                <div className="ml-3">Resume</div>
                </div>
                <ArrowIcon />
            </a>

            </div>
        </section>
    )
}