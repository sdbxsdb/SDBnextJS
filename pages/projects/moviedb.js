import MoreInfoCard from "../../components/MoreInfoCard";
import Head from 'next/head';


const moviedb = () => {
  return ( 
    <>
    <Head>
      <title>React Typescript Movie DB Search | Sam Donaghy-Bell</title>
      <meta name="keywords" content="React Typescript Movie DB Search" />
      <meta name="description" content="A DB search and view data site." />
    </Head>
    <div className="absolute top-[112px] w-full left-0">

      <div className="flex w-full justify-center items-center gap-x-12 h-[80px]">

      <MoreInfoCard
          content='
          <div>
            <div class="moreInfoContent">
            <p>A quick project I put together using NextJS, Typescript and Tailwind.  
            <br/>
            <br/>
            The app allows the user to view popular movies with infinite scroll, search for specific movies and then view details about that movie. 
            <br/>
            
            <br/><br/>
            I used:
            <br/><br/>
            <ul class="listElements themeColorText">
            <li>NextJS along with TypeScript</li>
            <li>Tailwind</li>
            <li>The Movie DB API</li>
            <li>React Query</li>
            <li>Vercel to deploy</li>

            </ul><br>


            
            </p></div>
            </div>
            '
        />

        <a className="underline transition hover:text-blue-400" href="https://github.com/sdbxsdb/typescript-movie-db" target="_blank" rel="noreferrer">GitHub</a>
        <a className="underline transition hover:text-blue-400" href="https://typescript-movie-db.vercel.app/" target="_blank" rel="noreferrer">Live Site</a>
      </div>

      <div className="flex flex-col items-center mb-4">
        <p className='text-smallerTitle'>React Typescript Movie DB Search</p>
        <small>Please allow time for the external site below to load - it may take a few seconds.</small>
      </div>

      <div className="iframeWrapper dark:bg-darkGrey bg-lightGrey">
        <iframe className="w-screen h-[calc(100vh-280px)]" src="https://typescript-movie-db.vercel.app/"></iframe>
      </div>

    </div>
    </>
  );
}
 
export default moviedb;