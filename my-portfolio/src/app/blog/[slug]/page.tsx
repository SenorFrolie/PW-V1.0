import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { Balancer } from 'react-wrap-balancer';
import { allBlogs } from 'contentlayer/generated';
import { Mdx } from '../../../../components/Mdx'

export default async function Blog({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  return (
    <section>
 
      <h1 className="font-bold text-3xl font-serif max-w-[650px]">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="grid items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
        <div className="bg-neutral-100 dark:bg-neutral-700 rounded-md px-2 py-1 tracking-tighter max-w-[100px]">
          {post.publishedAt}
        </div>
        <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-700 mx-2 mt-4 mb-2" />
          <Mdx code={post.body.code} tweets={undefined} />
      </div>
    </section>
  );
}
