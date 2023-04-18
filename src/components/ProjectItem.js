import React from "react";

function ProjectItem({ name, about, technologies,id }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */
       
        }
        {technologies.map((technology)=>{
          return (
            <span key={technology}>{technology}</span>
          )
        })}
      </div>
    </div>
  );
}

export default ProjectItem;
