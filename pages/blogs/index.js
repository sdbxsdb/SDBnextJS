import Link from 'next/link'

export const getStaticProps = async () => {

  const res = await fetch('https://www.googleapis.com/blogger/v3/blogs/543125446417715626/posts?key=AIzaSyBi0m3EdpabwT1EAKfV2zU7loUoS9S_7SU');

  const data = await res.json();

  // console.log(data.items);

  return {
    props: { blogs: data.items }, 
    revalidate: 1
  }

}

const Blogs = ({ blogs }) => {
  return ( 
    <div cl>
      <div className="w-full text-center">
        <h1 className="text-4xl font-semibold mb-12">Blog</h1>
      </div>
      <div className="flex justify-center">
        <div className="w-1/2 flex flex-col items-start gap-y-12">
          {blogs.map( blog => (
            <div key={blog.id} className="border-b-2 dark:border-lightGrey border-darkGrey flex justify-start w-full transition group">
              <Link href={'/blogs/' + blog.id}>
                <a className="flex items-center w-full justify-start group">
                  <p className="group-hover:text-blue-400 transition transform group-hover:translate-x-4">{blog.title}</p>
                </a>
              </Link>
              
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;