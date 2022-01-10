import Link from 'next/link'

export const getStaticProps = async () => {

  const res = await fetch('https://www.googleapis.com/blogger/v3/blogs/543125446417715626/posts?key=AIzaSyBi0m3EdpabwT1EAKfV2zU7loUoS9S_7SU');

  const data = await res.json();

  console.log(data.items);

  return {
    props: { blogs: data.items }
  }

}

const Blogs = ({ blogs }) => {
  return ( 
    <div>
      <h1 className="text-3xl mb-12">All Blogs</h1>
      {blogs.map( blog => (
        <div key={blog.id}>
          <Link href={'/blogs/' + blog.id}>
            <a>
              <h3>{blog.title}</h3>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Blogs;