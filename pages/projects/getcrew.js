import MoreInfoCard from "../../components/MoreInfoCard";
import Head from 'next/head';


const getcrew = () => {
  return ( 
    <>
    <Head>
      <title>Get Crew | Sam Donaghy-Bell</title>
      <meta name="keywords" content="React Typescript Movie DB Search" />
      <meta name="description" content="Get Crew" />
    </Head>
    <div className="absolute top-[112px] w-full left-0">

      <div className="flex w-full justify-center items-center gap-x-12 h-[80px]">

      <MoreInfoCard
          content='
          <div>
            <div class="moreInfoContent">
            <p>This is a live and working site I built as a side project.  It currently only has test users until it&apos;s official launch in a few weeks at which point it will be accessible to the 600,000+ members of the film, television and broadcast industries.

            <br/>
            <br/>
            The app allows the user to:
            <br/>
            <br/>
            <ul class="listElements themeColorText flex flex-col gap-y-2">
            <li>Register to the platform via passwordless magic link signin or Google sign in</li>
            <li>Create and customise their professional profile including uploading a profile image and CV.</li>
            <li>Update their availability status at will</li>
            <li>Edit each aspect of their profile (apart from email) and delete their profile at will</li>
            <li>The profile will be saved but won&apos;t become live until payment is made via stripe</li>
            <li>Once payment has been confirmed via the Stipe API the DB is updated and the profile is made live to the site</li>

            </ul>
            
            <br/><br/>
            I used:
            <br/><br/>
            <ul class="listElements themeColorText flex flex-col gap-y-2">
            <li>NextJS</li>
            <li>Context</li>
            <li>Cookies</li>
            <li>Supabase Interface and API</li>
            <li>Stripe Interface and API</li>
            <li>Vercel to deploy</li>

            </ul>
            
            <br>
            <br>
            I&apos;m extreamly pleased with how the platform has turned out


            
            </p></div>
            </div>
            '
        />

        <a className="underline transition hover:text-blue-400" href="https://github.com/sdbxsdb/we-are-crew" target="_blank" rel="noreferrer">GitHub</a>
        <a className="underline transition hover:text-blue-400" href="https://www.getcrew.pro" target="_blank" rel="noreferrer">Live Site</a>
      </div>

      <div className="flex flex-col items-center mb-4">
        <p className='text-smallerTitle'>Get Crew - A user login and payment platform</p>
        <small>Please allow time for the external site below to load - it may take a few seconds.</small>
        <br />
        <p>**iframe can distort the view of the site - if so please vist the live site for a proper preview.**</p>
      </div>

      <div className="iframeWrapper dark:bg-darkGrey bg-lightGrey">
        <iframe className="w-screen h-[calc(100vh-280px)]" src="https://www.getcrew.pro"></iframe>
      </div>

    </div>
    </>
  );
}
 
export default getcrew;