import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (

      <Layout>
        <div className="flex flex-1 max-w-[960px] mx-auto">
          <Component {...pageProps} />
        </div>
      </Layout>

  )
}

export default MyApp
