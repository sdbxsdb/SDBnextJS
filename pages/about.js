import Head from 'next/head'

const About = () => {
  return ( 
    //Below is a fragment just surrounding everything in one element
    <>  
    <Head>
      <title>Home | Sam Donaghy-Bell</title>
      <meta name="keywords" content="About" />
      <meta name="description" content="Hello this is a test description for the About page" />
    </Head>
    <div className="flex flex-col gap-y-12 ">

      <div>
        <h1 className="text-4xl mb-4 font-semibold">Who am I?</h1>
        <p className="text-subtitle">I&apos;m a former film & TV drama camera engineer of 12 years turned self-taught developer.</p>
      </div>

      <div className="pb-12">
        <h1 className="text-4xl mb-4 font-semibold">TLDR;</h1>
        <p className="text-subtitle">This is my personal site where I'll share my skills, thoughts and ambitions.
        <br /><br />
        I'm former camera engineer for film and TV productions of 12 years but I've now taken to go coding full time and currently work as a developer in Belfast.
        <br /><br />
        I've been coding for a number of years for side projects (like my 'smart mirror') and building ✈️  drones  ✈️  for my company <a href="https://cinecopters.co.uk" target="_blank"><span className="underline">CineCopters (who I also built the website for with a custom stock footage ordering platform)</span></a>.
        <br /><br />
        I’m an extremely driven person and a fast learner with a "challenge accepted" approach to anything I don't know how to do.   I find I learn new skills most efficiently when coding real world solutions for real world problems.
        <br /><br />
        I love a challenge, mental or otherwise and firmly believe it’s a sad day when you don’t learn something new.   Because of this I’m always looking to expand my knowledge in languages and tools etc (both back and front end) while refining the skills I already have to get as close to perfection as possible.
        <br /><br />
        My goal is to become proficient in both front and back end development culminating in becoming a full stack developer.
        <br /><br />
        If you have any questions or would like to get in touch I'd love to hear from you!</p>
      </div>
      
      {/* <div className="w-full flex justify-center">
        <Link href="/projects">
            <a className={styles.btn}>Projects</a>
        </Link>
      </div> */}

    </div>
    </>
  );
}

export default About;