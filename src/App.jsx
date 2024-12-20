import { useState } from 'react';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import NoProjectSelected  from './components/NoProjectSelected.jsx';
import NewProject from './components/NewProject.jsx';

const App = () => {

  const [ projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    });
  };

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  };

  console.log(projectsState);

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={ handleAddProject }/>
  } else if (projectsState.setProjectId === undefined) {
    content = <NoProjectSelected onHandleAddProject={ handleStartAddProject }/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onHandleAddProject={ handleStartAddProject } projects={projectsState.projects}/>
      { content }
    </main>
  );
}

export default App;
