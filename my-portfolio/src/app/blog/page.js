
import { getSortedPostsData } from '../../../lib/posts';



export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }
  
export default function Blog({ allPostsData }){
    return (
        <section>
            <h1>Blog title</h1>
            
        </section>
    )
}