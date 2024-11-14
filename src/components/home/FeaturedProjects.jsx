import { Link } from "react-router-dom";

export default function FeaturedProjects() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-2xl text-blue-600 mb-16">
            FEATURES PROJECTS
          </h1>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4">
          {/* Best Quality */}
          <div className="flex flex-col">
            <div className="flex justify-center items-center">
              <img
                src={`https://images.unsplash.com/photo-1578244839273-a4f49e03e24c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt="Street constructions"
                className="w-96 h-64"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center items-center">
              <img
                src={`https://images.unsplash.com/photo-1593786267440-550458cc882a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2UlMjBjb25zdHJ1Y3Rpb258ZW58MHwwfDB8fHww`}
                alt="Street constructions"
                className="w-96 h-64"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center items-center">
              <img
                src={`https://images.unsplash.com/photo-1517060826726-eb8ff5938eb8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt="Street constructions"
                className="w-96 h-64"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center items-center">
              <img
                src={`https://images.unsplash.com/photo-1588712112000-947b1377041b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt="Street constructions"
                className="w-96 h-64"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-16">
        <Link to="/projects" onClick={scrollToTop}>
          <button className="py-4 px-8 bg-atlantis-500 text-white font-semibold text-lg">
            All Projects
          </button>
        </Link>
      </div>
    </div>
  );
}
