import React from 'react'
import CommonBanner from '../components/CommonBanner'
import Project from '../components/Project';

const ProjectList = () => {
  return (
    <>
      <CommonBanner
        title="My Projects"
        subtitle="I build modern, responsive and high performance websites"
      />
      <Project />
    </>
  );
}

export default ProjectList;