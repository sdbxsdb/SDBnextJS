import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1 className="text-3xl text-red-500">Home page</h1>
      <p>lorem ipsum dolor sit amet, consectetur adipNostrud commodo quis nisi reprehenderit Lorem. Velit non aute qui do id exercitation dolore nisi non aliqua. Minim laborum ut incididunt anim nisi occaecat aliqua quis.</p>
      <p>lorem ipsum dolor sit amet, consectetur adipNostrud commodo quis nisi reprehenderit Lorem. Velit non aute qui do id exercitation dolore nisi non aliqua. Minim laborum ut incididunt anim nisi occaecat aliqua quis.</p>
      <Footer/>
    </div>
  )
}
