function ProjectsPage() {
  return (
    <section
      id="projects"
      className="Projects min-h-screen flex flex-col gap-14 items-center justify-center px-10 py-12 md:px-24 md:py-14"
    >
      {/* projects header */}
      <div className="projects-header flex flex-col items-center w-fit">
        Discover my
        <span className="heading text-4xl md:text-5xl">Projects</span>
      </div>

      {/* projects timeline */}
      <ProjectsTimeline />
    </section>
  );
}

function ProjectsTimeline() {
  const projects = [
    {
      id: 0,
      duration: "2 months",
      title: "Firebase Chat App",
      source: "https://github.com/umarfarooq6519/react_chat_app",
      preview: "https://react-chat-app-black.vercel.app",
      body: (
        <p className="ms-4">
          A<span className="font-medium"> React + Firebase </span> application.
          Implemented authentication and firestore. Inspired from{" "}
          <a
            href="https://dribbble.com/shots/22026872-Chatbot-Web-UI"
            target="_blank"
            className="font-medium"
          >
            this design
          </a>
          .
        </p>
      ),
    },
    {
      id: 1,
      duration: "2 months",
      title: "Ecommerce App",
      source: "https://github.com/umarfarooq6519/ecommerce_app",
      preview: "https://ecommerce52.vercel.app",
      body: (
        <p className="ms-4">
          A<span className="font-medium"> React + PHP </span> application.
          Developed it for my University Project. Inspired from{" "}
          <a
            href="https://dribbble.com/shots/20972968-E-commerce-Web-design"
            target="_blank"
            className="font-medium"
          >
            this design
          </a>
          .
        </p>
      ),
    },
    {
      id: 2,
      duration: "4 months",
      title: "React Todo App",
      source: "https://github.com/umarfarooq6519/TodoApp",
      preview: "https://todoapp52.vercel.app",
      body: (
        <p className="ms-4">
          A<span className="font-medium"> React </span> application. Developed
          it as a learning experience for React. Inspired from{" "}
          <a
            href="https://dribbble.com/shots/20502706-Todo-App"
            target="_blank"
            className="font-medium"
          >
            this design
          </a>
          .
        </p>
      ),
    },
  ];

  return (
    <ol className="relative max-w-lg border-s border-neutral-content">
      <span className="flex flex-col gap-4">
        {projects.map((project) => (
          <li key={project.id} className="list-none">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-[6.2px] bg-neutral"></div>

            <time className="text-sm opacity-70 ms-4">{project.duration}</time>
            <div className="flex items-center ms-4">
              <h4 className="font-semibold text-lg">
                <a href={project.preview} target="_blank">
                  {project.title}
                </a>
              </h4>
              <i className="fa-solid fa-arrow-right-long fa-sm ml-2 mt-1"></i>
            </div>
            {project.body}
            <span className="ms-4 underline decoration-1 text-sm opacity-70">
              <a href={project.source} target="_blank">
                Source Code
              </a>
            </span>
          </li>
        ))}
      </span>
    </ol>
  );
}

export default ProjectsPage;
