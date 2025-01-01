import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

const App = () => {

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NoProjectSelected />
      <h1 className="mb-8 text-center text-5xl font-bold">ProjectManagementTools</h1>
    </main>
  );
}

export default App;

