import MoreInfoCard from "../../components/MoreInfoCard";



const smartMirror = () => {
  return ( 
    <div className="absolute top-[112px] w-full left-0">

      <div className="flex w-full justify-center items-center gap-x-12 h-[80px]">

      <MoreInfoCard
          content='

            <div class="moreInfoContent">
            <p> A mixture of software and hardware - A mirror when off, a display when on.<br><br>
            
            I love building things, both software and hardware so when I saw a concept of a smart mirror a few years ago I knew I had to build my own.
            
            <br/><br/>

            I started off by dismantling an old display to it&apos;s bare bones. Then I attached a 2 way glass mirror to the LCD screen with industrial adhesive. 
            
            <br/><br/>
            
            Built with the use of Raspberry Pi, a number of APIs, AJAX and some custom elements the mirror displays: </p>

            <br/>

            <ul>
              <li>Local time in analogue and digital 24hr format</li>
              <li>Local weather with visual displays &amp; updates every 30mins</li>
              <li>Live Sky News</li>
              <li>Whats playing on my Spotify with album artwork</li>
              <li>A daily fact about cats!</li>
            </ul>
            <br>
            <p>A nice feature I implemented was that when there is music playing the news is muted and when theres no music the news is unmuted.</p>
          </div>

            '
        />

        <a className="underline hover:text-blue-400 transition" href="https://github.com/sdbxsdb/Smart-Mirror" target="_blank" rel="noreferrer">GitHub</a>

      </div>

      <div className="flex justify-center">
        <p className='text-smallerTitle'>Smart Mirror | Raspberry Pi and Two Way Mirror</p>
      </div>

      <div className="">
        <iframe className="w-screen h-[calc(100vh-280px)]" src="https://www.youtube.com/embed/2zdCBgs8KOc"></iframe>
      </div>

    </div>
  );
}
 
export default smartMirror;