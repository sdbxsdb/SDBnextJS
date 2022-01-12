import Layout from '../components/Layout'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  


  return (

      <div className="">
        <Layout>
          <div className="flex flex-1 dark:bg-darkGrey dark:text-lightGrey bg-lightGrey text-darkGrey transition  w-full justify-center px-12">
            <div className="max-w-[960px] w-full mt-[113px] pt-12">
              <Component {...pageProps} />
            </div>
          </div>
        </Layout>
      </div>

  )
}

export default MyApp
