import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";

function App() {
  return (
    <section className="App text-base">
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <section className="Expertise min-h-screen flex flex-col gap-14 items-center justify-center px-10 py-12 md:px-24 md:py-14">
        <div className="expertise-header flex flex-col items-center w-fit">
          Explore my
          <span className="heading text-4xl md:text-5xl ">Expertise</span>
        </div>

        <div className="flex max-lg:flex-col gap-14 lg:gap-24">
          <div className="frontend max-w-sm flex flex-col gap-3">
            <h3 className="heading text-2xl text-center pb-3">Front-end</h3>
            <span className="skills text-3xl flex gap-8">
              <div className="tooltip" data-tip="HTML5">
                <button className="pt-2">
                  <i className="fa-brands fa-html5 fa-2xl "></i>
                </button>
              </div>
              <div className="tooltip" data-tip="CSS3">
                <button className="pt-2">
                  <i className="fa-brands fa-css3-alt fa-2xl "></i>
                </button>
              </div>
              <div className="tooltip" data-tip="Bootstrap">
                <button className="pt-2">
                  <i className="fa-brands fa-bootstrap fa-2xl "></i>
                </button>
              </div>
              <div className="tooltip" data-tip="ReactJS">
                <button className="pt-2">
                  <i className="fa-brands fa-react fa-2xl "></i>
                </button>
              </div>
            </span>
          </div>
          <div className="backend max-w-sm flex flex-col gap-3">
            <h3 className="heading text-2xl text-center pb-3">Back-end</h3>
            <span className="skills text-3xl flex gap-8">
              <div className="tooltip" data-tip="JavaScript">
                <button className="pt-2">
                  <i className="fa-brands fa-square-js fa-2xl "></i>
                </button>
              </div>
              <div className="tooltip" data-tip="NodeJS">
                <button className="pt-2">
                  <i className="fa-brands fa-node-js fa-2xl "></i>
                </button>
              </div>
              <div className="tooltip" data-tip="PHP/MySQL">
                <button className="pt-2">
                  <i className="fa-brands fa-php fa-2xl"></i>
                </button>
              </div>
              <div className="tooltip" data-tip="Git/Github">
                <button className="pt-2">
                  <i className="fa-brands fa-git-alt fa-2xl "></i>
                </button>
              </div>
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
