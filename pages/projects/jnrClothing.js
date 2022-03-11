import MoreInfoCard from "../../components/MoreInfoCard";


const jnrclothing = () => {
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
            <li>Live filtering when typing built with Alpine JS</li>
            <li>Full CMS control</li>
            <li>Snipcart API stock keeping, checkout and payment intergration</li>
            <li>Live price changing depening on size chosen and amount</li>
            <li>Navbar basket quantity update</li>
            <li>AJAX contact submission form</li>
            <li>Basket editing with live reload</li>
            <li>Fully responsive</li>
            <li>Hover and active states</li>
            <li>Carousel</li>
            
            </ul><br>

            
            </p></div>
            </div>
            '
        />

        
        <a className="underline hover:text-blue-400 transition" href="https://jnrclothing.com/" target="_blank" rel="noreferrer">Live Site</a>
      </div>

      <div className="flex flex-col mb-4 items-center">
        <p className='text-smallerTitle'>JnR Clothing</p>
        <small>Please allow time for the external site below to load - it may take a few seconds.</small>
      </div>

      <div className="iframeWrapper">
        <iframe className="w-screen h-[calc(100vh-280px)]" src="https://jnrclothing.com/"></iframe>
      </div>

    </div>
   );
}
 
export default jnrclothing;