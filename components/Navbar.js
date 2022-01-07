import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="mb-12">
      <div className="logo">
        <h1>SDB Site</h1>
      </div>
      <div className="flex gap-x-12">
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/projects"><a>Projects</a></Link>
      </div>
    </nav>
  );
};

export default Navbar;
