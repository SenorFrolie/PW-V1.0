
import Link from "next/link"
export default function Projects(){
    return(
        <section>
             <h1 className="font-bold text-3xl font-serif">Projects</h1>
             <hr class="mb-6 mt-2"></hr>

             <Link href='https://github.com/SenorFrolie/PW-V1.0'>
            <div class="max-w-md mx-auto bg-white hover:bg-gray-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8">
                <div class="md:flex">
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            Portfolio Website
                        </div>
                        <p class="mt-2 text-slate-500">
                            A website to host all my achievements and past, current, and future personal projects.
                        </p>
                    </div>
                </div>
            </div>
        </Link>
        <Link href='https://github.com/SenorFrolie/Kidzblock'>
            <div class="max-w-md mx-auto bg-white hover:bg-gray-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8">
                <div class="md:flex">
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            Kidzblock
                        </div>
                        <p class="mt-2 text-slate-500"> web based application hosting an assortment of educational (or classic) games, which tracks the users performance.</p>
                    </div>
                </div>
            </div>
        </Link>

        <Link href='https://github.com/SenorFrolie/Library_SWE_2022'>
            <div class="max-w-md mx-auto bg-white hover:bg-gray-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8">
                <div class="md:flex">
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            Library System
                        </div>
                        <p class="mt-2 text-slate-500">Library system that keeps tracks of the current users books, how many they have currently.
                        And how much they own on rental</p>
                    </div>
                </div>
            </div>
        </Link>

        <Link href='https://github.com/SenorFrolie/Compiler-Construction-Course-Project'>
            <div class="max-w-md mx-auto bg-white hover:bg-gray-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8">
                <div class="md:flex">
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            Compiler-Construction-Course-Project
                        </div>
                        <p class="mt-2 text-slate-500">
                            This Repo is for the sole purpose of showing what I had accomplished during my Compiler Construction course during my time at Texas State.
                            This repo has 4 assignments breaking down into the front and backend of a compiler. 
                        </p>
                    </div>
                </div>
            </div>
        </Link>

        <Link href='https://github.com/SenorFrolie/Machine-Learning'>
            <div class="max-w-md mx-auto bg-white hover:bg-gray-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8">
                <div class="md:flex">
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            Small Machine Learning Projects
                        </div>
                        <p class="mt-2 text-slate-500">
                            A Repo to highlight small machine learning projects I've been playing around with
                        </p>
                    </div>
                </div>
            </div>
        </Link>
        
        </section>
    )
}