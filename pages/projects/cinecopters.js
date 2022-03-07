import MoreInfoCard from "../../components/MoreInfoCard";



const cinecopters = () => {
  return ( 
    <div className="absolute top-[112px] w-full left-0">

      <div className="flex w-full justify-center items-center border gap-x-12 h-[80px]">

      <MoreInfoCard
          content='
          <div class="w-full h-full overflow-hidden pt-[40px]">
            <div class="moreInfoContent">
            <p>At the time this was my most in-depth website to date at the time in terms of size and functionality.  Built using HTML 5, PHP, SCSS, Bootstrap 4, JavaScript . 
            <br/><br/>
            The site contains:
            <br/><br/>
            <ul class="listElements themeColorText">
            <li>Dynamically editable stock submission forms</li>
            <li>Youtube API</li>
            <li>Videos within modals</li>
            <li>Expanding card elements</li>
            <li>iframes</li>
            <li>Smooth scroll & Back to top</li>
            <li>Contact submission forms with validation</li>
            <li>Responsive autoplay hero video</li>
            <li>Lightbox equivalent</li>
            <li>Fully responsive</li>
            <li>Page position anchors</li>
            <li>and more</li>
            </ul><br>

            </p></div>
            </div>
            '
        />

        <a className="underline hover:text-blue-400 transition" href="https://github.com/sdbxsdb/CineCopters" target="_blank">GitHub</a>
        <a className="underline hover:text-blue-400 transition" href="https://cinecopters.co.uk" target="_blank">Live Site</a>
      </div>

      <div className="hidden">
        <iframe className="w-screen h-[calc(100vh-280px)]" src="https://cinecopters.co.uk"></iframe>
      </div>

    </div>
  );
}
 
export default cinecopters;