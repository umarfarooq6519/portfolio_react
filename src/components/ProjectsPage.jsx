function ProjectsPage() {
  return (
    <section className="Projects min-h-screen flex flex-col gap-14 items-center justify-center px-10 py-12 md:px-24 md:py-14">
      {/* projects header */}
      <div className="projects-header flex flex-col items-center w-fit">
        Discover my
        <span className="heading text-4xl md:text-5xl">Projects</span>
      </div>

      {/* projects timeline */}
      <ol className="relative max-w-lg border-s border-neutral-content">
        <span className="flex flex-col gap-4">
          <li className="ms-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-[6.2px] bg-neutral"></div>
            <time className="text-sm opacity-70">June' 2023 - Aug' 2023</time>
            <span className="flex items-center">
              <h4 className="font-semibold text-lg">Firebase Chat App</h4>
              <i className="fa-solid fa-arrow-right-long fa-sm ml-2 mt-1"></i>
            </span>
            <p>
              A<span className="font-medium"> React + Firebase </span>{" "}
              application. Implemented authentication and firestore. Inspired
              from
              <a
                href="https://dribbble.com/shots/22026872-Chatbot-Web-UI"
                target="_blank"
                className="font-medium"
              >
                {" "}
                this design
              </a>
              .
            </p>
            <span className="underline decoration-1 text-sm opacity-70">
              Source Code
            </span>
          </li>

          <li className="ms-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-[6.2px] bg-neutral"></div>
            <time className="text-sm opacity-70">June' 2023 - Aug' 2023</time>
            <span className="flex items-center">
              <h4 className="font-semibold text-lg">Ecommerce App</h4>
              <i className="fa-solid fa-arrow-right-long fa-sm ml-2 mt-1"></i>
            </span>
            <p>
              A<span className="font-medium"> React + PHP </span> application.
              Implemented MySQL database for product items. Inspired from
              <a
                href="https://dribbble.com/shots/20972968-E-commerce-Web-design"
                target="_blank"
                className="font-medium"
              >
                {" "}
                this design
              </a>
              .
            </p>
            <span className="underline decoration-1 text-sm opacity-70">
              Source Code
            </span>
          </li>

          <li className="ms-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-[6.2px] bg-neutral"></div>
            <time className="text-sm opacity-70">June' 2023 - Aug' 2023</time>
            <span className="flex items-center">
              <h4 className="font-semibold text-lg">React Todo App</h4>
              <i className="fa-solid fa-arrow-right-long fa-sm ml-2 mt-1"></i>
            </span>
            <p>
              A<span className="font-medium"> React + Firebase </span>{" "}
              application. Implemented firestore for todo list. Inspired from
              <a
                href="https://dribbble.com/shots/20502706-Todo-App"
                target="_blank"
                className="font-medium"
              >
                {" "}
                this design
              </a>
              .
            </p>
            <span className="underline decoration-1 text-sm opacity-70">
              Source Code
            </span>
          </li>
        </span>
      </ol>
    </section>
  );
}

export default ProjectsPage;
