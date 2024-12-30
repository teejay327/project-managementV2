import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";

const App = () => {

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NewProject />
      <h1 className="mb-8 text-center text-5xl font-bold">ProjectManagementTools</h1>
    </main>
  );
}

export default App;

