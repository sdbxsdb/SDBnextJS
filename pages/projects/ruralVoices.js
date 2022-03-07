import MoreInfoCard from "../../components/MoreInfoCard";

const kidsGame = () => {
  return (
    <div className="absolute top-[112px] w-full left-0">
      <div className="flex w-full justify-center items-center gap-x-12 h-[80px]">
        <MoreInfoCard
          content='
            <div>
              <div class="moreInfoContent">
              <p>I built this site while employed at Reflex Studios.  I translated the designers work and built: 
              <br/><br/>

              <ul class="listElements">
              <li>Javascript preloader while the site loads</li>
              <li>Redirect via Servers CP</li>
              <li>Multi-layer deep selection menu to navigate through counties, people and their stories built with Alpine JS</li>
              <li>AJAX Submission form with file upload</li>
              <li>Full CMS control for the client</li>
              <li>Audio animations when playing</li>
              <li>Modal Video</li>
              <li>Hover and active states</li>
              <li>Gifs and SVG animations</li>
              
              
              </ul><br>

              
              </p></div>
              </div>
              '
        />

        
        <a
          className="underline hover:text-blue-400 transition"
          href="https://ruralvoices.reflex-dev.com/"
          target="_blank"
        >
          Live Site
        </a>
      </div>

      <div className="flex justify-center">
        <p className='text-smallerTitle'>Rural Voices</p>
      </div>

      <div className="">
        <iframe
          className="w-screen h-[calc(100vh-280px)]"
          src="https://ruralvoices.reflex-dev.com/"
        ></iframe>
      </div>
    </div>
  );
};

export default kidsGame;