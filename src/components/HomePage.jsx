import Lottie from "react-lottie";
import scrolldown from "../assets/cupcake_scrolldown.json";

function HomePage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    pause: false,
    animationData: scrolldown,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="HomePage h-screen px-10 py-6 md:px-24 md:py-14">
      <Header />
      <div className="Home-main h-5/6 flex items-center justify-center">
        <span className="flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl heading">Umar Farooq</h1>
          <span className="flex flex-col">
            <h2 className="text-xl">Web Developer - Front End</h2>
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
      <span className="flex items-center xl:-mt-4">
        <Lottie options={defaultOptions} height={100} width={100} />{" "}
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
