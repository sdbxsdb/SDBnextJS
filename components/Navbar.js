import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="mb-12 py-8">
      <div className="w-full flex justify-center">
        <Link href="/">
          <a>
            <h1>Sam Donaghy-Bell | CV</h1>
          </a>
        </Link>
      </div>
      <div className="w-full my-6 flex justify-center">
        <div className="flex gap-x-12">
          <Link href="/"><a>Home</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/projects"><a>Projects</a></Link>
          <Link href="/blogs"><a>Blog</a></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
