import React from 'react'
import Router from 'next/router'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

export type PostProps = {
  id: number
  title: string
  author: {
    name: string
  }
  content: string
  published: boolean
}

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : 'Unknown author'
  return (
    <article className="sm:flex overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25 basis-1/3">
      <Image
        alt="Office"
        src="/hoge.png"
        className="h-56 w-full object-cover"
        width={240}
        height={200}
      />

      <div className="bg-white p-4 dark:bg-gray-900 sm:p-6">
        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
            How to position your furniture for positivity
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>
      </div>
    </article>
  )
}

export default Post
