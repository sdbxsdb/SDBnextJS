import { bold } from "gulp-cli/lib/shared/ansi";

export const getStaticPaths = async () => {
  const res = await fetch('https://www.googleapis.com/blogger/v3/blogs/543125446417715626/posts?key=AIzaSyBi0m3EdpabwT1EAKfV2zU7loUoS9S_7SU');

  const data = await res.json();

  const paths = data.items.map(blog => {
    return {
      params: { id: blog.id.toString()}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://www.googleapis.com/blogger/v3/blogs/543125446417715626/posts/' + id + '?key=AIzaSyBi0m3EdpabwT1EAKfV2zU7loUoS9S_7SU');
  const data = await res.json();


  return {
    props: { blog: data }
  }
}

const Details = ({blog}) => {
  return (
    <div>
      <h1>Details Page</h1>

      <h3>{blog.title}</h3>
      <p>{(blog.content)}</p>
      
    </div>
  );
};

export default Details;
