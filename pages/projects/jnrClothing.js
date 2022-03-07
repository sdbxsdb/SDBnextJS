import MoreInfoCard from "../../components/MoreInfoCard";


const kidsGame = () => {
  return ( 
    <div className="absolute top-[112px] w-full left-0">

      <div className="flex w-full justify-center items-center gap-x-12 h-[80px]">

      <MoreInfoCard
          content='
          <div>
            <div class="moreInfoContent">
              <p> 
              I built this website for a clothing store while employed at Reflex Studios.  
              
              <br/><br/>
              I translated the designs and built everything out in HTML and CSS then converted this into templates to be used with the CMS Statamic.

              <br/><br/>

              I used Alpine JS to intergrate a live filtering for schools that filters as you type.  I also built a simple &apos;boys, girls or both&apos; filter
              </p>
              </div>
            </div>
            '
        />

        <a className="underline hover:text-blue-400 transition" href="https://github.com/sdbxsdb/Kids-Game" target="_blank">GitHub</a>
        <a className="underline hover:text-blue-400 transition" href="https://jnrclothing.com/" target="_blank">Live Site</a>
      </div>

      <div className="">
        <iframe className="w-screen h-[calc(100vh-280px)]" src="https://jnrclothing.com/"></iframe>
      </div>

    </div>
   );
}
 
export default kidsGame;