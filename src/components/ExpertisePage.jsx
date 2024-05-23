function ExpertisePage() {
  return (
    <section
      id="expertise"
      className="Expertise min-h-screen flex flex-col gap-20 items-center justify-center px-10 py-12 md:px-24 md:py-14"
    >
      <div className="flex flex-col items-center gap-10">
        <div className="expertise-header flex flex-col items-center w-fit">
          Explore my
          <span className="heading text-4xl md:text-5xl">Expertise</span>
        </div>

        <div className="flex max-lg:flex-col gap-10 lg:gap-24">
          <Frontend />
          <Backend />
        </div>
      </div>

      <div className="certifications flex flex-col gap-4 items-center">
        <h3 className="heading text-2xl text-center pb-3">Certifications</h3>
        <Certifications />
      </div>
    </section>
  );
}

function Certifications() {
  const certificates = [
    {
      id: 0,
      title: "Getting started as Full Stack Developer",
      body: "By Tom Geller - LinkedIn Learning",
      link: "https://bit.ly/44koqtZ",
    },
    {
      id: 1,
      title: "Learning Rest APIs",
      body: "By Morten - LinkedIn Learning",
      link: "https://bit.ly/3QoNnP7",
    },
  ];

  return (
    <ol className="relative max-w-lg border-s border-neutral-content">
      <span className="flex flex-col gap-4">
        {certificates.map((item) => (
          <li key={item.id} className="ms-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-[6.2px] bg-neutral"></div>
            <span className="flex items-center">
              <a
                href={item.link}
                target="_blank"
                className="font-semibold text-lg"
              >
                {item.title}
              </a>
              <i className="fa-solid fa-arrow-right-long fa-sm ml-2 mt-1"></i>
            </span>

            <p>{item.body}</p>
          </li>
        ))}
      </span>
    </ol>
  );
}

function Frontend() {
  return (
    <div className="frontend min-w-80 flex flex-col gap-3">
      <h3 className="heading text-2xl text-center pb-3">Front-end</h3>
      <span className="skills text-3xl flex justify-between">
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
  );
}

function Backend() {
  return (
    <div className="backend min-w-80 flex flex-col gap-3">
      <h3 className="heading text-2xl text-center pb-3">Back-end</h3>
      <span className="skills text-3xl flex justify-between">
        <div className="tooltip" data-tip="JavaScript">
          <button className="pt-2">
            <i className="fa-brands fa-square-js fa-2xl "></i>
          </button>
        </div>
        <div className="tooltip" data-tip="NodeJS">
          <button className="pt-2">
            <i className="fa-brands fa-node fa-2xl"></i>
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
  );
}

export default ExpertisePage;
