import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
    <Head>
      <title>Home | Sam Donaghy-Bell</title>
      <meta name="keywords" content="Test" />
      <meta name="description" content="Hello this is a test description for the home page" />
    </Head>
    <div className="bg-black flex justify-between items-center w-full h-full">


      <div className="">
        <img src="/sdbavatarloopedcropped.gif" className="" width="240" />
      </div>


      <div className="flex flex-1 ml-4 flex-col justify-center">
        {/* <div className=" h-12">
          <h1 className="text-3xl mb-12">Welcome!</h1>
        </div> */}
        <div className="flex flex-col flex-1 justify-center">
          <h2 className="text-2xl">👈  That&apos;s me... Sam Donaghy-Bell...   Hi! 👋 🙂</h2>
          <h2 className="text-2xl">I'm a developer based in Belfast N.Ireland.</h2>
          <br />
          <p className="text-2xl">This is my personal site where I'll share my skills, thoughts and ambitions.</p>
        </div>
      </div>
      
      
      {/* <div className="w-full flex justify-center">
        <Link href="/projects">
            <a className={styles.btn}>Projects</a>
        </Link>
      </div> */}

    </div>
    </>
  )
}
