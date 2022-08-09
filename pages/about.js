import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    //Below is a fragment just surrounding everything in one element
    <>
      <Head>
        <title>About | Sam Donaghy-Bell</title>
        <meta name="keywords" content="About" />
        <meta
          name="description"
          content="Hello this is a test description for the About page"
        />
      </Head>
      <div className="flex flex-col gap-y-12 ">
        <div>
          <h1 className="text-4xl mb-4 font-semibold">Who am I?</h1>
          <p className="text-subtitle">
            This is my personal site where I&apos;ll share my thoughts, skills
            and ambitions. <br />
            I&apos;m former Camera Engineer for film and TV productions of 12
            years turned Software Developer.
          </p>
        </div>

        <div className="pb-12">
          <h1 className="text-4xl mb-4 font-semibold">TLDR;</h1>
          <p className="text-subtitle">
            This is my personal site where I&apos;ll share my skills, thoughts
            and ambitions.
            <br />
            <br />
            I&apos;m former Camera Engineer for film and TV productions of 12
            years turned Software Developer.  I currently work as a Software
            Engineer for a global company at their Belfast base.
            <br />
            <br />I travelled all over the world as a Camera Engineer looking
            after cameras and teams. <br />
            Positioning them 
            <small>
              <cite>
                (the cameras... the teams were safe for the most part!)
              </cite>
            </small>
             infront of things that talk, things and blow up, things that go
            really fast and things that don&apos;t even exist.  All for a bit of
            entertainment!
            <br /> <br />
            While doing all of that I was also tinkering away coding.
            <br /> I built myself a 
            <Link href="/projects/smartMirror">
              <a>
                <span className="underline">smart mirror.</span>
              </a>
            </Link>
              A mirror when off, a display when on.  It shows me the weather,
            the news and what&apos;s currently playing on my Spotify through the
            glass. <br /> <br />I also built a brochure and stock footage
            ordering site for my drone filming company, 
            <a
              href="https://cinecopters.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              <span className="underline">
                CineCopters - The biggest drone filming company in Ireland.
              </span>
            </a>
            <br />
            <br />
            <br />
            <hr />
            <br />
            <br /> I&apos;m an extremely driven person and a fast learner with a
            &quot;challenge accepted&quot; approach to anything I don&apos;t
            know how to do.  I find I learn new skills most efficiently when
            coding real world solutions for real world problems.
            <br /> I&apos;m a firm believer in learn by doing and muscle memory.
            <br />
            <br />
            I love a challenge, mental or otherwise and firmly believe it&apos;s
            a sad day when you don&apos;t learn something new. <br />
            My goal is to become proficient in both front and back end
            development culminating in becoming a full stack developer.
            <br />
            <br />
            Because of this I&apos;m always looking to expand my knowledge in
            languages, libraries and tools while refining the skills I already
            have to get as close to perfection as possible.
            <br />
            <br />
            <br />
            <br />
            -A little bit more - <br />
            <ul className="ml-6">
              <li>
                I&apos;m a Northern Irish record holder and British Champion
                Compound Bare-bow Archer 🎯.
              </li>
              <li>
                I&apos;m a UK and Ireland licensed UAV pilot ✈️ and I&apos;m
                currently looking into getting my manned light-aircraft license.
              </li>
              <li>
                My lovely wife 👩‍❤️‍💋‍👨 is also a Developer so our home office looks
                like the Whitehouse Situation Room.
              </li>
              <li>
                I&apos;ve got two dogs 🐶 (Luna & Indie) and 2 cats 🐱 (Meeko &
                Joey).
              </li>
              <li>
                I built this site with NextJS 💻 which was fantastic to work
                with.
              </li>
            </ul>
            <br />
            <br />
            <br />
            <br />
            If you have any questions or would like to have a chat I&apos;d love
            to hear from you!
          </p>
        </div>

        {/* <div className="w-full flex justify-center">
        <Link href="/projects">
            <a className={styles.btn}>Projects</a>
        </Link>
      </div> */}
      </div>
    </>
  );
};

export default About;
