import MoreInfoCard from "../../components/MoreInfoCard";
import Head from 'next/head';


const coffeeShops = () => {
  return ( 
    <>
    <Head>
      <title>Coffee Connoisseur | Sam Donaghy-Bell</title>
      <meta name="keywords" content="Coffee Connoisseur" />
      <meta name="description" content="A coffee shop voting site with location." />
    </Head>
    <div className="absolute top-[112px] w-full left-0">

      <div className="flex w-full justify-center items-center gap-x-12 h-[80px]">

      <MoreInfoCard
          content='
          <div>
            <div class="moreInfoContent">
            <p>A tutorial I coded along with to make this NextJS App.  
            <br/>
            <br/>
            The app allows the user to view and upvote some statically generated coffee shops as well as do the same for coffee shops found based on their location. 
            <br/>
            
            <br/><br/>
            I used:
            <br/><br/>
            <ul class="listElements themeColorText">
            <li>NextJS along with FourSquare for the location data</li>
            <li>useState, useRef, useEffect</li>
            <li>Unsplash for some generic images</li>
            <li>SWR for saving data to Context</li>
            <li>Airtable as a database</li>
            <li>Vercel to deploy</li>

            </ul><br>


            
            </p></div>
            </div>
            '
        />

        <a className="underline transition hover:text-blue-400" href="https://github.com/sdbxsdb/coffee-shops-nextjs" target="_blank" rel="noreferrer">GitHub</a>
        <a className="underline transition hover:text-blue-400" href="https://coffee-shops-nextjs.vercel.app/" target="_blank" rel="noreferrer">Live Site</a>
      </div>

      <div className="flex flex-col items-center mb-4">
        <p className='text-smallerTitle'>Location based coffee shop search &amp; voting</p>
        <small>Please allow time for the external site below to load - it may take a few seconds.</small>
        <p><cite>** The live location may not work in some browsers due to iframe restrictions.   If this is the case please visit the live site for a working demo. **</cite></p>
      </div>

      <div className="iframeWrapper dark:bg-darkGrey bg-lightGrey">
        <iframe className="w-screen h-[calc(100vh-280px)]" src="https://coffee-shops-nextjs.vercel.app/"></iframe>
      </div>

    </div>
    </>
  );
}
 
export default coffeeShops;