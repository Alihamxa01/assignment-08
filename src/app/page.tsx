import { client } from '@/sanity/lib/client';
import React from 'react';

interface Post {
  name: string;
  title: string;
  details: string;
}

export default async function Page() {
  const blogs: Post[] = await client.fetch(`*[_type == 'blog']`);
  return (
    <div>
      {
      blogs.map((blog, index) => (
        <div key={index}>
<h1 className="text-5xl text-green-500 font-black"><span className="text-blue-400 text-xl">publish by</span>{blog.title}</h1>
<p className='text-2xl underline'><span className="text-orange-500 text-xl">DISCRIPTION is writen below</span><br/>{blog.name}</p>
<p>{blog.details}</p>

        </div>

      ))
      }
    </div>
  );
}



// import React from 'react'

// export default function page() {
//   return (
//     <div>page</div>
//   )
// }
