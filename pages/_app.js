import Layout from '../components/Layout'
import '../styles/globals.css'
import useDarkMode from "../useDarkMode";

function MyApp({ Component, pageProps }) {
  const [colorTheme, setTheme] = useDarkMode();

  return (

      <div className="bg-darkGray text-lightGrey dark:bg-lightGrey dark:text-darkGray transition">
        <Layout>
          <div className="flex flex-1 max-w-[960px] mx-auto ">
          
            <Component {...pageProps} />
          </div>
        </Layout>
      </div>

  )
}

export default MyApp
