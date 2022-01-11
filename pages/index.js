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
    <div className="bg-black flex justify-between w-full">


      <div className="">
        <img src="/sdbavatarloopedcropped.gif" className="" width="250" />
      </div>


      <div className="flex flex-1 ml-4 flex-col">
        <h1 className="text-3xl mb-12">Welcome!</h1>
        <h2>👈  That&apos;s me...</h2>
        <p>I&apos;m a </p>
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
