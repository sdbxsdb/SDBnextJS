import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>

      <h1 className="text-3xl mb-12">Home page</h1>

      <p>lorem ipsum dolor sit amet, consectetur adipNostrud commodo quis nisi reprehenderit Lorem. Velit non aute qui do id exercitation dolore nisi non aliqua. Minim laborum ut incididunt anim nisi occaecat aliqua quis.</p>
      <p>lorem ipsum dolor sit amet, consectetur adipNostrud commodo quis nisi reprehenderit Lorem. Velit non aute qui do id exercitation dolore nisi non aliqua. Minim laborum ut incididunt anim nisi occaecat aliqua quis.</p>

      <Link href="/projects">
        <a>Projects</a>
      </Link>

    </div>
  )
}
