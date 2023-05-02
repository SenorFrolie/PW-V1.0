import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import {name,about,avatar,bio} from '../../lib/info';
import { getSortedPostsData } from '../../lib/posts';




export default async function HomePage() {
  return (
      <section>
        <h1 className="font-bold text-3xl font-serif">{name}</h1>
        <p className="my-5 max-w-[450px] text-neutral-800 dark:text-neutral-200">
          {about()}
        </p>
              <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      </section>
  )
}
