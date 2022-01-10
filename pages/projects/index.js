import Link from 'next/link'

const Projects = () => {
  return (
    <div>
      <h1 className="text-3xl mb-12">All Projects</h1>
      <ul>
        <li>
          <Link href="/projects/1">
          <a>
            <h1>Item 1</h1>
          </a>
          </Link>
        </li>
        <li>
          <Link href="/projects/2">
          <a>
            <h1>Item 2</h1>
          </a>
          </Link>
        </li>
        <li>
          <Link href="/projects/3">
          <a>
            <h1>Item 2</h1>
          </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
