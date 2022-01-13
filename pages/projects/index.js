import { useState } from "react"
import Link from "next/link";
import Card from "../../components/Card";



const Projects = () => {

  return (
    <>
    
    <div className="grid grid-cols-1 md:grid-cols-2">
      
      <Card title="HTML" 
            subtitle="&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;" 
            image="/skills/html5logo.png"
            content='
            <div">
              <img width="100%" height="200px" src="https://media.giphy.com/media/oobNzX5ICcRZC/giphy.gif" </div>'
            />
      <Card title="CSS | SCSS" 
            subtitle="&#x2605;&#x2605;&#x2605;&#x2605;" 
            image="/skills/cssLogo.png"
            content="
            <div>
              <p>I&apos;m well versed in vanilla CSS, SASS and SCSS. I always try to reduce, reuse and recycle classes and variables where possible.
              <br><br>I&apos;m very familiar with flexbox, :nth and CSS grids. <br><br> I also really enjoy building custom CSS animations and hover effects.</p> 
            </div>"
            />
      <Card title="Tailwind | Bootstrap" 
            subtitle="&#x2605;&#x2605;&#x2605;&#x2605;" 
            image="/skills/tailwindLogo.png"
            image2="/skills/bootstrapLogo.png"
            content="
            <div>
            <p>I built my first ever website using zero bootstrap, my second using Bootstrap3 and the third using BS4.  <br><br>Although bootstrap has it&apos;s place, I now much prefer Tailwind. <br><br> It&apos;s small, highly and easily customisable and makes getting off the ground really fast.  <br><br>
            In recent projects I&apos;ve been using JIT mode which is a fantastic additon.   It gives me everything out of the box that I was having to add to the config file with the standard mode. </p>
            </div>"
            />
      <Card title="Javascript | jQuery" 
            subtitle="&#x2605;&#x2605;&#x2605;" 
            image="/skills/jsLogo.png"
            image2="/skills/jqueryLogo.png"
            content="
            <p>
            I love the literally endless capabilities of this language. <br><br>
            I&apos;m well versed in vanilla JS as well as jQuery and it&apos;s many plugins. Whether via CND or NPM. <br><br>
            Some recent projects have required: <br><br>
          <div >
            <li>- Form submissions via AJAX.</li><br>
            <li>- Checking logged in user data against collections for allowing different products to be purchased.</li><br>
            <li>- Showing warning message depending on products status.</li><br>
            <li>- Integrating What3Words into GoogleMaps API to allow clients to swap their coordinates for 3 words instead.</li><br>
            <li>- Looping through YouTube videos, getting ID&apos;s and applying the embedded thumbnail of each to an img tag for each video.</li><br>
            <li>- Saving data to local storage.</li>
  
          </div>
  
          </p>"/>
      <Card title="JS" 
            subtitle="&#x2605;&#x2605;&#x2605;" 
            image="/skills/jsLogo.png"
            content="
            <p>
            I love the literally endless capabilities of this language. <br><br>
            I&apos;m well versed in vanilla JS as well as jQuery and it&apos;s many plugins. Whether via CND or NPM. <br><br>
            Some recent projects have required: <br><br>
          <div >
            <li>- Form submissions via AJAX</li><br>
            <li>- Checking logged in user data against collections for allowing different products to be purchased</li><br>
            <li>- Showing warning message depending on products status</li><br>
            <li>- Integrating What3Words into GoogleMaps API to allow clients to swap their coordinates for 3 words instead</li><br>
            <li>- Looping through YouTube videos, getting ID&apos;s and applying the embedded thumbnail of each to an img tag for each video</li><br>
            <li>- Saving data to local storage (like your dark or light mode preferences here!)</li>
  
          </div>
  
          </p>"/>
      <Card title="JS" 
            subtitle="&#x2605;&#x2605;&#x2605;" 
            image="/skills/jsLogo.png"
            content="
            <p>
            I love the literally endless capabilities of this language. <br><br>
            I&apos;m well versed in vanilla JS as well as jQuery and it&apos;s many plugins. Whether via CND or NPM. <br><br>
            Some recent projects have required: <br><br>
          <div >
            <li>- Form submissions via AJAX</li><br>
            <li>- Checking logged in user data against collections for allowing different products to be purchased</li><br>
            <li>- Showing warning message depending on products status</li><br>
            <li>- Integrating What3Words into GoogleMaps API to allow clients to swap their coordinates for 3 words instead</li><br>
            <li>- Looping through YouTube videos, getting ID&apos;s and applying the embedded thumbnail of each to an img tag for each video</li><br>
            <li>- Saving data to local storage (like your dark or light mode preferences here!)</li>
  
            <li>- Showing warning message depending on products status</li><br>
            <li>- Integrating What3Words into GoogleMaps API to allow clients to swap their coordinates for 3 words instead</li><br>
            <li>- Looping through YouTube videos, getting ID&apos;s and applying the embedded thumbnail of each to an img tag for each video</li><br>
            <li>- Saving data to local storage (like your dark or light mode preferences here!)</li>
  
            <li>- Showing warning message depending on products status</li><br>
            <li>- Integrating What3Words into GoogleMaps API to allow clients to swap their coordinates for 3 words instead</li><br>
            <li>- Looping through YouTube videos, getting ID&apos;s and applying the embedded thumbnail of each to an img tag for each video</li><br>
            <li>- Saving data to local storage (like your dark or light mode preferences here!)</li>
  
            <li>- Showing warning message depending on products status</li><br>
            <li>- Integrating What3Words into GoogleMaps API to allow clients to swap their coordinates for 3 words instead</li><br>
            <li>- Looping through YouTube videos, getting ID&apos;s and applying the embedded thumbnail of each to an img tag for each video</li><br>
            <li>- Saving data to local storage (like your dark or light mode preferences here!)</li>
  
          </div>
  
          </p>"/>
    </div>
    </>
  );
};

export default Projects;
