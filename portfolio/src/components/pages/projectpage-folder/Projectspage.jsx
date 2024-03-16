import React from 'react';
import Card from '../card/card';
import projectlist from '../projectlist';
import Project from "../project-folder/Project"
import Title from '../Title/Title';
import "./style.css"



function createCard(projectlist){
  return (
  <Card 
  id={projectlist.id}
  key = {projectlist.id}
  title={projectlist.title}
  screenshot={projectlist.screenshot}
  project= {projectlist.projectURL}
  github = {projectlist.github}
  />
  )
  }

function Projectspage() {
  return (
    <Project>
          <Title>Projects List</Title>
            {projectlist.map(createCard)}
    </Project>
      
      
  
  );
}

export default Projectspage;
