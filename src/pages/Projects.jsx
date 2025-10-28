import Card from "../components/Card";
import { Lightbulb } from 'lucide-react';

const Projects = () => {
  return (
  <div className="flex items-center justify-center gap-4">
	<Card icon={Lightbulb} title="Project Title" description="Project description goes here." />
	<Card icon={Lightbulb} title="Project Title" description="Project description goes here." />
	<Card icon={Lightbulb} title="Project Title" description="Project description goes here." />
  </div>
  
);
};

export default Projects;
