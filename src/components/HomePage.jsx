function HomePage() {
  const linkedin_link = "https://www.linkedin.com/in/umar-farooq-325811255/";
  const upwork_link = "https://www.upwork.com/freelancers/~018e9328fc604635b6";
  const insta_link = "https://www.instagram.com/umar._.52/";

  const socialsDiv = (
    <>
      <ul className="flex items-center gap-5 max-sm:hidden">
        <li>
          <a href={linkedin_link} target="_blank">
            <i className="fa-brands fa-linkedin fa-xl"></i>
          </a>
        </li>
        <li>
          <a href={upwork_link} target="_blank">
            <i className="fa-brands fa-square-upwork fa-xl"></i>
          </a>
        </li>
        <li>
          <a href={insta_link} target="_blank">
            <i className="fa-brands fa-instagram fa-xl"></i>
          </a>
        </li>
      </ul>
    </>
  );

  return (
    <section className="HomePage h-screen px-10 py-8 md:px-24 md:py-14 flex flex-col">
      <Header />
      <HomeMain />
      <span className="flex max-sm:justify-center justify-between items-center">
        {socialsDiv}
        <dotlottie-player
          src="https://lottie.host/dc434165-0e80-464e-b7c8-c9842a1e05ac/ENqpGRbGZK.lottie"
          background="transparent"
          speed="1"
          style={{ width: "100px", height: "100px" }}
          loop
          autoplay
        ></dotlottie-player>
      </span>
    </section>
  );
}

function Header() {
  const resume_path =
    "https://www.canva.com/design/DAF_foF_iIc/sxu5yHjuJF74gR0tNd-aRA/edit?utm_content=DAF_foF_iIc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";

  const navItems = [
    {
      id: 0,
      text: "About",
      href: "#about",
    },
    {
      id: 1,
      text: "Expertise",
      href: "#expertise",
    },
    {
      id: 2,
      text: "Projects",
      href: "#projects",
    },
    {
      id: 3,
      text: "Contact",
      href: "#contact",
    },
  ];

  return (
    <span className="Home-header flex items-center w-full justify-between text-xl heading">
      <ul className="flex max-sm:hidden gap-4 lg:gap-8 justify-center">
        {navItems.map((item) => (
          <li key={item.id} className="hover:opacity-80 cursor-pointer">
            <a href={item.href} className="z-10">
              {item.text}
            </a>
          </li>
        ))}
      </ul>

      {/* mobile menu */}
      <div className="dropdown sm:hidden">
        <div tabIndex={0} role="button" className="p-2">
          <i className="fa-solid fa-bars fa-lg"></i>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-0 text-lg shadow bg-base-100 rounded-box w-52"
        >
          {navItems.map((item) => (
            <li key={item.id} className="">
              <a href={item.href} className="rounded-xl px-3 py-2 z-10">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <span className="resume flex items-center">
        <a href={resume_path} target="_blank" className="hover:opacity-80">
          My Résumé
        </a>
        <i className="fa-solid fa-arrow-up-right-from-square fa-xs ml-2 mb-0.5"></i>
      </span>
    </span>
  );
}

function HomeMain() {
  return (
    <div className="Home-main flex-1 flex items-center justify-center">
      <span className="flex flex-col items-center">
        <h1 className="text-6xl md:text-7xl heading">Umar Farooq</h1>
        <span className="flex flex-col">
          <h2 className="text-xl">Web Developer - Full Stack</h2>
          <span className="flex justify-between px-6 pt-2">
            <span>
              <i className="fa-solid fa-location-dot mr-2"></i>Pakistan
            </span>
            <span>
              <i className="fa-solid fa-hourglass-half mr-2"></i>Available
            </span>
          </span>
        </span>
      </span>
    </div>
  );
}

export default HomePage;
