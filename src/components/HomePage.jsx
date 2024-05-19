function HomePage() {
  const socialsDiv = (
    <>
      <span className="flex items-center gap-5 max-sm:hidden">
        <i className="fa-brands fa-instagram fa-xl"></i>
        <i className="fa-brands fa-linkedin fa-xl"></i>
        <i className="fa-brands fa-whatsapp fa-xl"></i>
      </span>
    </>
  );

  return (
    <section className="HomePage h-screen px-10 py-8 md:px-24 md:py-14">
      <Header />
      <div className="Home-main h-5/6 flex items-center justify-center">
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
  return (
    <span className="Home-header flex items-center w-full justify-between text-xl heading">
      <ul className="flex gap-3 md:gap-10 justify-center">
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <span className="resume underline decoration-1 underline-offset-2 ">
        My Résumé
        <i className="fa-solid fa-arrow-up-right-from-square fa-sm ml-2"></i>
      </span>
    </span>
  );
}

export default HomePage;
