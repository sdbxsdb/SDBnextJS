import Layout from '../components/Layout'
import '../styles/globals.css'
import useDarkMode from "../useDarkMode";

function MyApp({ Component, pageProps }) {
  const [colorTheme, setTheme] = useDarkMode();

  return (

      <div className="dark:bg-darkGray dark:text-lightGrey bg-lightGrey text-darkGrey">
        <Layout>
          <div className="flex flex-1 max-w-[960px] mx-auto ">
          
            <Component {...pageProps} />
          </div>
        </Layout>
      </div>

  )
}

export default MyApp
