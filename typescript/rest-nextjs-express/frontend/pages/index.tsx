import React from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../components/Layout'
import Post, { PostProps } from '../components/Post'

type Props = {
  feed: PostProps[]
}

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>My Blog</h1>
        <main className="flex flex-row">
          {props.feed.map((post) => (
            <div key={post.id} className=" basis-1/2">
              <Post post={post} />
            </div>
          ))}
        </main>
        <div className="flex flex-row">
          <div className="bg-green-100 px-2">1</div>
          <div className="bg-green-100 px-2 ml-1">2</div>
          <div className="bg-green-100 px-2 ml-1">3</div>
        </div>
      </div>
      {/* <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style> */}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3001/feed')
  const feed = await res.json()
  return {
    props: { feed },
  }
}

export default Blog
