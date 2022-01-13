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
    <div className=" flex justify-between items-center w-full h-full">


      <div className="">
        <img src="/sdbavatarcroppedgif.gif" className="" width="250" />
      </div>


      <div className="flex flex-1 ml-4 flex-col justify-center">
        <div className="flex flex-col flex-1 justify-center">
          <h2 className="text-2xl">👈  That&apos;s me... Sam Donaghy-Bell...   Hi! 👋 🙂</h2>
          <h2 className="text-2xl">      I&apos;m a developer based in Belfast N.Ireland.</h2>
          <br />
          <p className="text-2xl">This is my personal site where I&apos;ll share my skills, thoughts and ambitions.</p>
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
