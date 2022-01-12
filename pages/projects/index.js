import Link from "next/link";
import Accordion from "../../components/Accordion";
import Card from "../../components/Card";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Card title="HTML" 
            subtitle="&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;" 
            image="/skills/html5logo.png"
            content="Test for HTML"/>
      <Card title="CSS" 
            subtitle="&#x2605;&#x2605;&#x2605;&#x2605;" 
            image="/skills/cssLogo.png"
            content="
            <div>
              <p>I'm well versed in vanilla CSS, SASS and SCSS. I always try to reduce, reuse and recycle classes and variables where possible.
              <br><br>I'm very familiar with flexbox, :nth and CSS grids. <br><br> I also really enjoy building custom CSS animations and hover effects.</p> 
            </div>"
            />
      <Card title="JS" 
            subtitle="&#x2605;&#x2605;&#x2605;" 
            image="/skills/jsLogo.png"
            content="Test for JS"/>
    </div>
  );
};

export default Projects;
