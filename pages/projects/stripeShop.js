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
              <p>A tutorial I coded along with to make this React App.  
              <br/>
              <br/>
              Its an online shop that allows a customer to browse the store, add and remove items form their cart (which is saved to local storage for later) and then checkout and pay via Stripe. 
              <br/>
              <br/>
              It also allows the customer to checkout as a guest or register and login with email and password or Sign in with Google.
              <br/>
              <br/>
              I originally started off by saving to Context but migrated this to Redux.  There was no real need for this because the App with working fine but I wanted to learn the principles of Redux for future larger scale projects. 

              <br/><br/>
              There are many moving parts to this app including:
              <br/><br/>
              <ul class="listElements themeColorText">

              <li>Firebase DB</li>
              <li>Login checks</li>
              <li>Loading states</li>
              <li>Saving and writing state to Redux</li>
              <li>Local Storage</li>

              </ul><br>

              </p></div>
              </div>
              '
        />

        <a
          className="underline transition hover:text-blue-400"
          href="https://github.com/sdbxsdb/react-stripe-shop"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="underline transition hover:text-blue-400"
          href="https://sdb-react-stripe-shop.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Live Site
        </a>
      </div>

      <div className="flex items-center flex-col mb-4">
          <p className="text-smallerTitle">
            Stripe Shop
          </p>
          <small>
            Please allow time for the external site below to load - it may take
            a few seconds.
          </small>
        </div>

        <div className="iframeWrapper bg dark:bg-darkGrey bg-lightGrey">
          <iframe
            className="w-screen bg-white h-[calc(100vh-260px)]"
            src="https://sdb-react-stripe-shop.netlify.app/"
          ></iframe>
        </div>

      
    </div>
  );
};

export default netflix;
