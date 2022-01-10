import Link from "next/link";
import { useEffect } from 'react'
import { useRouter } from "next/router";

const NotFound = () => {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1);
      router.push('/');
    }, 3000)

  }, []) 

  return (
    <div className="notFound w-full flex flex-col justify center items-center">
      <h1 className="text-3xl mb-12">Uh oh...</h1>
      <h2>That page doesn't seem to exisit!</h2>
      <Link href="/">
        <a className="mt-12 underline">Go back</a>
      </Link>
    </div>
  );
};

export default NotFound;
