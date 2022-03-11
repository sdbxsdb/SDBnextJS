import MoreInfoCard from "../../components/MoreInfoCard";


const kidsGame = () => {
  return ( 
    <div className="absolute top-[112px] w-full left-0">

      <div className="flex w-full justify-center items-center gap-x-12 h-[80px]">

      <MoreInfoCard
          content='
          <div>
            <div class="moreInfoContent">
              <p> This is a childrens game I made for my nieces using HTML, SCSS and JavaScript.
              
              <br><br>
              
              It&apos;s a relatively simple drag and drop game with <cite>really</cite> annoying sound effects.
              
              <br>
              
              It allows you to input your name at the start which carries across each page as you play.<br><br>It was my first dip into storing and recalling data, in this case to and from local storage. 
              
              <br>
            
              The game also has touch and drag intergrated via jQuery to allow for use on tablets.
              
              <br><br> 
              
              The game is best viewed on a desktop, laptop or tablet. <br><br> Responsiveness for the main page could do with a little more work but it works on most screen sizes.
              </p>
              </div>
            </div>
            '
        />

        <a className="underline hover:text-blue-400 transition" href="https://github.com/sdbxsdb/Kids-Game" target="_blank" rel="noreferrer">GitHub</a>
        <a className="underline hover:text-blue-400 transition" href="https://www.sdbkidsgame.xyz/" target="_blank" rel="noreferrer">Live Site</a>
      </div>

      <div className="flex flex-col mb-4 items-center">
        <p className='text-smallerTitle'>Farmer McDonald&apos;s Kids Game</p>
        <small>Please allow time for the external site below to load - it may take a few seconds.</small>
      </div>

      <div className="iframeWrapper">
        <iframe className="w-screen h-[calc(100vh-280px)]" src="https://www.sdbkidsgame.xyz/"></iframe>
      </div>

    </div>
   );
}
 
export default kidsGame;