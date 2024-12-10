import { useState } from 'react';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import NoProjectSelected  from './components/NoProjectSelected.jsx';
import NewProject from './components/NewProject.jsx';

const App = () => {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    }) 
  };

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onHandleAddProject={handleAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onHandleAddProject={handleAddProject}/>
      { content }
    </main>
  );
}

export default App;
