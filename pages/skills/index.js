import { useState } from "react";
import Link from "next/link";
import Card from "../../components/Card";
import Head from 'next/head';

const Skills = () => {
  return (
    <>
    <Head>
      <title>Skills | Sam Donaghy-Bell</title>
      <meta name="keywords" content="Skills" />
      <meta name="description" content="Here I break down my skills and what I know indept." />
    </Head>
    <div className="w-full text-center">
      <h1 className="text-4xl mb-4 font-semibold">Abilities</h1>
    </div>
      <div className="flex flex-wrap justify-center">
        <Card
          title="HTML"
          subtitle="&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;"
          image="/skills/html5logo.png"
          content='
            <div">
              <img width="100%" height="200px" src="https://media.giphy.com/media/oobNzX5ICcRZC/giphy.gif" </div>'
        />
        <Card
          title="CSS | SCSS"
          subtitle="&#x2605;&#x2605;&#x2605;&#x2605;&#10027;"
          image="/skills/cssLogo.png"
          content="
            <div>
              <p>I&apos;m well versed in vanilla CSS, SASS and SCSS. I always try to reduce, reuse and recycle classes and variables where possible.
              <br><br>I&apos;m very familiar with flexbox, :nth and CSS grids. <br><br> I also really enjoy building custom CSS animations and hover effects.</p> 
            </div>"
        />
        <Card
          title="Tailwind | Bootstrap"
          subtitle="&#x2605;&#x2605;&#x2605;&#x2605;&#10027;"
          image="/skills/tailwindLogo.png"
          image2="/skills/bootstrapLogo.png"
          content="
            <div>
            <p>I built my first ever website using zero bootstrap, my second using Bootstrap3 and the third using BS4.  <br><br>Although bootstrap has it&apos;s place, I now much prefer Tailwind. <br><br> It&apos;s small, highly and easily customisable and makes getting off the ground really fast.  <br><br>
            In recent projects I&apos;ve been using JIT mode which is a fantastic additon.   It gives me everything out of the box that I was having to add to the config file with the standard mode. </p>
            </div>"
        />
        <Card
          title="Javascript | jQuery"
          subtitle="&#x2605;&#x2605;&#x2605;&#10027;"
          image="/skills/jsLogo.png"
          image2="/skills/jqueryLogo.png"
          content="
            <p>
            I love the literally endless capabilities of this language. <br><br>
            I&apos;m well versed in vanilla JS as well as jQuery and it&apos;s many plugins. Whether via CND or NPM. <br><br>
            Some recent projects have required: <br><br>
          <div>
            <li>- Form submissions via AJAX.</li><br>
            <li>- Checking logged in user data against collections for allowing different products to be purchased.</li><br>
            <li>- Showing warning message depending on products status.</li><br>
            <li>- Integrating What3Words into GoogleMaps API to allow clients to swap their coordinates for 3 words instead.</li><br>
            <li>- Looping through YouTube videos, getting ID&apos;s and applying the embedded thumbnail of each to an img tag for each video.</li><br>
            <li>- Saving data to local storage.</li>
          </div>
  
          </p>"
        />
        <Card
          title="APIs"
          subtitle="&#x2605;&#x2605;&#10027;"
          image="/skills/apiLogo.png"
          content="
            <p>Using PostMan and Javascript I&apos;ve worked with and customised a number of free and paid for APIs for client and personal use.  <br><br>These include but aren&apos;t limited to:
            <div>
              <li>- Youtube API</li>
              <li>- GoogleMaps API</li>
              <li>- What3Words API</li>
              <li>- Snipcart API</li>
              <li>- Shopify API</li>
              <li>- Live Weather APIs</li>
              <li>- Spotify API</li>
              <li>- LastFM API</li>
              <li>- International Space Station tracking API</li>
            </div>
            </p>"
        />
        <Card
          title="Snipcart | Shopify"
          subtitle="&#x2605;&#x2605;&#x2605;"
          image="/skills/snipcartLogo.png"
          image2="/skills/shopifyLogo.png"
          content="
            <p>
            I have experience in integrating Shopify&apos;s API into a CMS and also with coding in it&apos;s templating language, Liquid&#128167;. <br><br>
            I&apos;ve set up a number of sites using Snipcart with a Stripe payment gateway. I&apos;ve found Snipcart to be an excellent and arguably more flexible alternative to Shopify.  It&apos;s API is very indepth and allows for a lot of customisation while maintaining functionality. <br><br> Using Snipcarts API I&apos;m able to allow the client to add products in their CMS (rather than jumping back and forth between CMS and shop) as well as accessing digital download products to automatically send a download link upon payment. <br><br>
            Snipcart has also allowed me to give clients access to their customers and assign special privileges like trade customers.
          </p>"
        />
        <Card
          title="CLI | Git"
          subtitle="&#x2605;&#x2605;&#x2605;"
          image="/skills/githubLogo.png"
          image2="/skills/itermLogo.png"
          content="
            <p>
            I&apos;m familiar with using Git on the command line, GitHub Desktop and terminal within VS Code for push, pulls, commits, branch creation, checkouts and merges. <br><br>This website and other client builds have webhooks attached for automatic pulls to the server when master branch is updated but I&apos;m also familiar with SSH for server access. <br><br> I&apos;m somewhat familiar with file up-loaders such as CyberDuck but usually prefer the above methods where appropriate.
          </p>"
        />
        <Card
          title="Adobe CC"
          subtitle="&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;"
          image="/skills/adobeLogo.png"
          content="
            <p>
            I started creating &amp; manipulating with Photoshop back in the CS2 days (12 years ago!). <br><br> I&apos;ve grown and updated my skills with every version since. <br><br> I&apos;m also extremely well practiced in Premiere Pro and AE.
            </p>"
        />
        <Card
          title="Design Translation"
          subtitle="&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;"
          image="/skills/figmaLogo.png"
          image2="/skills/sketchLogo.png"
          content="
            <p>
            I have good experience in translating a designers designs from various programs such as - <br><br>
            - Figma <br>
            - Sketch <br>
            - Zeplin <br><br>
            I take meticulous care in getting things pixel perfect and will also take initiative on responsive and mobile designs if none are provided.
            </p>"
        />
        <Card
          title="CMS"
          subtitle="&#x2605;&#x2605;&#x2605;&#x2605;"
          image="/skills/statamicLogo.png"
          content="
            <p>
            I was introduced to Statamic CMS about a year ago <small>(as of 2021)</small> after only using Wordpress and I&apos;ve found it far more modern, powerful and intuitive - not to mention it&apos;s built on-top of Laravel! <br><br>
            I have good experience in gaging a clients needs for their CMS in terms of what they want to achieve when in their Control Panel and arguably more important, what they&apos;re capable of achieving. <br><br> I&apos;m very careful not to over complicate things and overwhelm someone who isn&apos;t familar or confident with a CMS or computers in general.<br><br>
            I give clients the option to simply update text and images or create a new blog post to something more in-depth like custom page building with ‘componentised’ elements to be dropped in as they see fit.
            </p>"
        />
        <Card
          title="PHP | Laravel"
          subtitle="&#x2605;&#10027;"
          image="/skills/laravelLogo.png"
          content="
            <p>
            I&apos;ve unfortunatly had limited exposure to PHP but because I&apos;ve been working a lot with Statamic CMS which is built on top of Laravel I have a bit of experience of this and Blade. <br><br>
            I do want to increase my PHP skills moving forward and build on the Laravel knowledge I have.  In my portfolio you can find an Instagram copy I made with Blade via a few tutorials.
            </p>"
        />
        <Card
          title="React | NextJS"
          subtitle="&#x2605;&#x2605;"
          image="/skills/reactLogo.png"
          image2="/skills/nextjsLogo.png"
          content="
            <p>
            This site you&apos;re on now has had many facelifts in it&apos;s lifetime with the most recent one rebuilding it in NextJS. <br><br> 
            It&apos;s hosted on Vercel and has updated CNAME records with the host to point to the correct server.<br><br>
            In a recent project I&apos;ve used NextJS to build a loan calculator.  The calculator works out monthly, weekly and fortnight loan repayments depending on loan amount, term length and APR rate. This was then intergrated into a static website. <br><br> I&apos;ve also used VueJs to work with dynamically input user data, pass data from &apos;page&apos; to &apos;page&apos; and display accordingly. <br><br>
          
            I&apos;ve also built a simple, single page React app todo list.  It stores new data to a Firebase DB and allows the user to add and remove from the &apos;done&apos; list. 
            <br><br>
            I know I&apos;ve barely scratched the surface of Next, Vue, React and the likes but what I&apos;ve done so far has me extremely keen to keep learning. <br><br> The more practical, real world applications I can get the chance to work on the better and I&apos;ll jump at any chance to learn as much of React and it&apos;s frameworks as possible.
            </p>"
        />
        <Card
          title="Debugging"
          subtitle="&#x2605;&#x2605;&#x2605;&#x2605;"
          image="/skills/debugLogo.png"
          content='
            <div">
              <img width="100%" height="278px" src="https://media.giphy.com/media/AsArdOVzTM3LARfvjg/giphy.gif" </div>'
        />
      </div>
    </>
  );
};

export default Skills;
