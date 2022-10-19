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
          <h1 className="text-4xl mb-4 font-semibold">
            Short and sweet.
          </h1>
          <p className="text-subtitle">
            My name is Sam Donaghy-Bell.  
            <br />
            I live just outside Belfast and I currently work as a Software Engineer for a
            global company at their Belfast Center of Excellence.
          </p>
        </div>

        <div className="pb-12">
          <h1 className="text-4xl mb-4 font-semibold">TLDR;</h1>
          <div className="ml-2 mt-8">
            <p className="text-subtitle -ml-2 font-semibold">
              - Software Engineer / Developer for a global company at their
              Belfast base.
            </p>
            <p className="text-subtitle">
              Before the project came to an end I was part of the Vertica team
              tasked with localising the customer facing Management Console for
              white label use in any language required.
              <br />
              <br />
              This required use of the i18Next translation tool and on
              completion was worth several million dollars in sales for the
              company.
              <br />
              <br />
              I&apos;m currently part of a team developing a platform to be used by police detectives to organise case data and display it across their internal teams.
            </p>
          </div>

          <div className="ml-2 mt-12">
            <p className="text-subtitle -ml-2 font-semibold">
              - Managing Director / Founder at
              <a
                className="text-blue-400"
                href="https://www.getcrew.pro"
                target="_blank"
                rel="noreferrer"
              >
                  Get Crew
              </a>
              .
            </p>
            <p className="text-subtitle">
              Get Crew is a database platform for UK and Irish Film, Television
              and Broadcast crew to host their professional profiles.  I built
              it as a side project to fill a void in the industry.
              <br />
              <br />
              It allows anyone to search for crew via department, filter by role
              and contact each person. It allows registered users to list their
              credits, website, skills, working locations, update their
              availability and more.
              <br />
              <br />
              It has a Stripe payment system intergrated for registered users to
              pay and have their profile go live.
              <br />
              The platform is self-sufficient requiring minimal input to keep it
              up and running.
            </p>
          </div>

          <div className="ml-2 my-12">
            <p className="text-subtitle -ml-2 font-semibold">
              - CTO and Director at
              <a
                className="text-blue-400"
                href="https://cinecopters.co.uk"
                target="_blank"
                rel="noreferrer"
              >
                  CineCopters - Drones for Film & TV
              </a>
              .
            </p>
            <p className="text-subtitle">
              During my 12 years as a Camera Engineer in the Film and Television
              industry I also built Ireland&apos;s biggest and most reputable
              drone filming company.
              <br />
              <br />
              The company has been operating since 2013 and currently employs 4
              full time and 3 part time staff.  CineCopters provides drones and
              cameras to the biggest productions shooting in Ireland with
              clients including Disney, Netflix, BBC&apos;s Top Gear, RedBull,
              Universal Pictures, Land Rover, Ford and many more.
              <br />
              <br />I built the website for CineCopters which contains a stock
              footage ordering platform and also allows existing clients to
              manage bookings for upcoming shoots.
            </p>
          </div>

          <hr className="border-2 rounded-full border-blue-400" />

          <div className="mt-12">
            <p className="text-subtitle">
              I&apos;m an extremely driven person and a fast learner with a
              &quot;challenge accepted&quot; approach to anything I don&apos;t
              know how to do.  I love a challenge, mental or otherwise and firmly believe
              it&apos;s a sad day when you don&apos;t learn something new.
              <br />
              <br />
              My goal is to become proficient in both front and back end
              development culminating in becoming a full stack developer.
              I&apos;m a firm believer in learn by doing and muscle
              memory.
              <br />
              <br />
              I&apos;m always looking to expand my knowledge in
              languages, libraries and tools while refining the skills I already
              have.
              <br />
              Practice doesn&apos;t make perfect, practice makes better!
            </p>
          </div>


          <div className="mt-12">
            <p className="text-subtitle">
              -A little bit more - <br />
              <ul className="ml-6">
                <li>
                  I&apos;m a Northern Irish record holder and British Champion
                  Compound Bare-bow Archer 🎯.
                </li>
                <li>
                  I&apos;m a UK and Ireland licensed UAV pilot ✈️ and I&apos;m
                  currently looking into getting my manned light-aircraft
                  license.
                </li>
                <li>
                  My lovely wife 👩‍❤️‍💋‍👨 is also a Software Engineer so our home office looks like the Whitehouse Situation Room.
                </li>
                <li>
                  I&apos;ve got two dogs 🐶 (Luna & Indie) and 2 cats 🐱 (Meeko
                  & Joey).
                </li>
                <li>
                  I built this site with NextJS 💻 which I love to work with.
                </li>
              </ul>
              <br />
              <br />
              If you have any questions or would like to have a chat I&apos;d
              love to hear from you!
            </p>
          </div>
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
