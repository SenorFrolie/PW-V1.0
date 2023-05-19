import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import {name,about,avatar,bio} from '../../lib/info';
import { allPosts } from 'contentlayer/generated';


export default async function HomePage() {
  return (
      <section>
        <h1 className="font-bold text-3xl font-serif">{name}</h1>
        <p className="my-5 max-w-[550px] text-[20.5px] text-neutral-800 dark:text-neutral-200">
          {about()}
        </p>
              <p className="my-5 max-w-[750px] text-[20.5px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      </section>
  )
}
