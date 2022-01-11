import Layout from '../components/Layout'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  


  return (

      <div className="dark:bg-darkGray dark:text-lightGrey bg-lightGrey text-darkGrey transition">
        <Layout>
          <div className="flex flex-1 max-w-[960px] mx-auto ">
          
            <Component {...pageProps} />
          </div>
        </Layout>
      </div>

  )
}

export default MyApp
