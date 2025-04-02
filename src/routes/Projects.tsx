import ProjectCardComponent from "../components/Project-Card";


function Projects() {
  
    return (
      <>
        <h1>Projects</h1>
        <ProjectCardComponent 
            name="Portfolio Website"
            description="A simple static website serving as a digital portfolio." />
        <ProjectCardComponent 
            name="Income Summary"
            description="A python tool to summarize bank statements" />
        <ProjectCardComponent 
            name="Receipt Parser"
            description="A python tool built to parse out text and structure from receipt images." />
      </>
    )
  }
  
  export default Projects;
  