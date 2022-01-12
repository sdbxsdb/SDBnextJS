import Link from "next/link";
import Accordion from "../../components/Accordion";
import Card from "../../components/Card";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Card title="HTML" subtitle="&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;" content="Test for HTML"/>
      <Card title="CSS" subtitle="&#x2605;&#x2605;&#x2605;&#x2605;" content="Test for CSS"/>
      <Card title="JS" subtitle="&#x2605;&#x2605;&#x2605;" content="Test for JS"/>
    </div>
  );
};

export default Projects;
