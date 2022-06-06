import MoreInfoCard from "../../components/MoreInfoCard";
import Link from "next/link";

const netflix = () => {
  return (
    <div className="absolute top-[112px] w-full left-0">
      <div className="flex w-full justify-center items-center gap-x-12 h-[80px]">
        <MoreInfoCard
          content='
            <div>
              <div class="moreInfoContent">
              <p>A tutorial I coded along with to make this NextJS App.  
              <br/>
              <br/>
              It&apos;s a Netflix remake using Youtube videos as the content.  It allows users to sign in and register with passwordless login via their email.  Like and dislike videos.  Any liked videos get added to a "My List" and any watched videos get&apos;s added to a "Watch it again" list. 
              <br/>
              
              <br/><br/>
              There are many moving parts to this app including:
              <br/><br/>
              <ul class="listElements themeColorText">
              <li>Youtube API public video data</li>
              <li>Passwordless registration and login via Magic Link</li>
              <li>Json Web Token</li>
              <li>DiD Tokens</li>
              <li>Cookies and cookie clearance once logged out</li>
              <li>Next Routing</li>
              <li>If logged in checks</li>
              <li>Writing to, updating and retrieving data from Hasura Database</li>

              </ul><br>

              </p></div>
              </div>
              '
        />

        <a
          className="underline transition hover:text-blue-400"
          href="https://github.com/sdbxsdb/nextjs-netflix"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="underline transition hover:text-blue-400"
          href="https://nextjs-netflix-sdbxsdb.vercel.app/login"
          target="_blank"
          rel="noreferrer"
        >
          Live Site
        </a>
      </div>

      <div className="flex flex-col items-center mb-4">
        <p className="text-smallerTitle">Youtube - Netflix</p>
        <p>
          <cite>
            ** This site will not work within an iframe for security reasons.
            Please vist the live site for a demo. **
          </cite>
        </p>
      </div>

      <div className="w-full h-full flex flex-col justify-center items-center ">
        <Link href="https://nextjs-netflix-sdbxsdb.vercel.app/login" passHref>
          <a className='cursor-pointer flex flex-col items-center' href="https://nextjs-netflix-sdbxsdb.vercel.app/login"
              target="_blank"
              rel="noreferrer">
            <div
              style={{ backgroundImage: 'url("/netflixLogo.png")' }}
              className="w-[120px] h-[200px] bg-contain bg-no-repeat bg-center animate-pulse"
            ></div>
            <p className="underline transition hover:text-blue-400">
              Live Site
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default netflix;
