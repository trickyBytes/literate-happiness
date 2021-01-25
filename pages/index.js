import Head from 'next/head'
import styles from '../styles/Home.module.css'

export async function getStaticProps(context){
  const res = await fetch(`http://jsonplaceholder.typicode.com/posts`)
  const data = await res.json()
  
  if(!data) {
    return {
      notFound: true,
    }
  }

  return { props: { posts: data } }
}

const Home = ({posts, thing}) => {
  return (
    <section>
      <ul>
        {
          posts.map((post) => 
          <li>
            {post.title}
          </li>)
        }
      </ul>
    </section>
  )
};

export default Home;
