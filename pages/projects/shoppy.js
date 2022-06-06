import MoreInfoCard from "../../components/MoreInfoCard";
import Head from "next/head";

const shoppy = () => {
  return (
    <>
      <Head>
        <title>Faux Shop | Sam Donaghy-Bell</title>
        <meta name="keywords" content="Smart Mirror" />
        <meta
          name="description"
          content="A faux shop built with React and Typescript"
        />
      </Head>
      <div className="absolute top-[112px] w-full left-0">
        <div className="flex w-full justify-center items-center gap-x-12 h-[80px]">
          <MoreInfoCard
            content='
            <div>
              <div class="moreInfoContent">
              <p>Being pretty new to React and very new to Typescript, I followed a tutorial and built this faux shop.  I used Material UI for a few components as well as my own custom ones using styled components.
              <br/><br/>
              The site contains:
              <br/><br/>
              <ul class="listElements themeColorText">
              <li>Fake Shop Products API</li>
              <li>useState, useRef, useEffect</li>
              <li>Page loader while fetching the data from the API</li>
              <li>Total item quantity and price with dynamic changes</li>
              <li>Total basked price with dynamic changes</li>
              </ul><br>
      
              </p></div>
              </div>
              '
          />
          <a
            className="underline transition hover:text-blue-400"
            href="https://github.com/sdbxsdb/react-ts-shop"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="underline transition hover:text-blue-400"
            href="https://react-ts-shop.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </a>
        </div>
        <div className="flex flex-col items-center mb-4">
          <p className="text-smallerTitle">
            Faux shop built with React &amp; Typescript
          </p>
          <small>
            Please allow time for the external site below to load - it may take
            a few seconds.
          </small>
        </div>
        <div className="iframeWrapper dark:bg-darkGrey bg-lightGrey">
          <iframe
            className="w-screen h-[calc(100vh-280px)]"
            src="https://react-ts-shop.vercel.app"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default shoppy;
