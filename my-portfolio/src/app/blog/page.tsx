
import Head from 'next/head'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allBlogs} from 'contentlayer/generated'
 

export default function Blog(){

  return (
    <div >
      <h1 className="font-bold text-3xl font-serif">Blog</h1>
      <hr className="mb-8 mt-2" />
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p>{post.title}</p>
            </div>
          </Link>
        ))}
    </div>
  )
}

