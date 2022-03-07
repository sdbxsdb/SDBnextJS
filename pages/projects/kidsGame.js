const kidsGame = () => {
  return ( 
    <div className="absolute top-[112px] left-0">

      <div className="flex justify-center items-center gap-x-12 h-[80px]">
        <a className="underline hover:text-blue-400 transition" href="https://github.com/sdbxsdb/CineCopters" target="_blank">GitHub</a>
        <a className="underline hover:text-blue-400 transition" href="https://www.sdbkidsgame.xyz/" target="_blank">Live Site</a>
      </div>

      <div className="">
        <iframe className="w-screen h-[calc(100vh-280px)]" src="https://www.sdbkidsgame.xyz/"></iframe>
      </div>

    </div>
   );
}
 
export default kidsGame;