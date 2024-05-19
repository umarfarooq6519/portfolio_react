import HomePage from "./components/HomePage";

function App() {
  return (
    <section className="App text-base">
      <HomePage />
      <section className="AboutPage border min-h-screen px-10 py-6 md:px-24 md:py-14 flex flex-col gap-10 w-full justify-center items-center">
        <div className="about-header flex flex-col items-center w-fit">
          Get to Know
          <span className="heading text-4xl md:text-5xl">About Me</span>
        </div>

        <div className="about-main flex max-xl:flex-col gap-12 md:gap-20 items-center justify-center w-full">
          <p className="max-w-xl md:text-lg text-justify">
            <h3 className="heading text-2xl pb-2">Why Me?</h3>
            Hey Peeps! I'm Umar, located in Lahore, Pakistan. I'm a Web
            Developer with over 2+ years of hands-on experience in crafting
            dynamic and user-focused websites, bringing ideas to life in the
            browser.
            <br /> <br /> What sets me apart from others is the dedicated
            concentration on the websites purpose. I prioritize understanding
            the intended use of the website and how the user will interact with
            the interface.I maintain ongoing communication with my clients to
            ensure a clear understanding of their requirements.
          </p>
          <div className="about-timeline text-justify">
            <h3 className="heading text-2xl pb-2">Education</h3>
            <ol className="relative max-w-xl border-s border-neutral-content">
              {/* education */}
              <span className="flex flex-col gap-2 mb-10">
                <li className="ms-4">
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-[6.2px] bg-neutral"></div>
                  <time className="text-sm opacity-70">
                    Matric (Computer Science)
                  </time>
                  <h4 className="font-semibold text-lg">
                    Beaconhouse School System
                  </h4>
                </li>
                <li className="ms-4">
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-[6.2px] bg-neutral"></div>
                  <time className="text-sm opacity-70">
                    Matric (Computer Science)
                  </time>
                  <h4 className="font-semibold text-lg">
                    Beaconhouse School System
                  </h4>
                </li>
              </span>
            </ol>

            {/* work timeline*/}
            <h3 className="heading text-2xl pb-2">Work Experience</h3>
            <ol className="relative max-w-lg border-s border-neutral-content">
              <span className="flex flex-col gap-2">
                <li className="ms-4">
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-[6.2px] bg-neutral"></div>
                  <time className="text-sm opacity-70">
                    June' 2023 - Aug' 2023
                  </time>
                  <h4 className="font-semibold text-lg">
                    Shark Innovation Labs Internee
                  </h4>
                  <p>
                    Learnt the JavaScript framework “Vue Js”. Built a
                    login/signup page using Vue Js and implemented local storage
                    for user’s data.
                  </p>
                </li>
              </span>
            </ol>
          </div>
          {/* work experience
          <div>
            <h3 className="heading text-2xl ml-4 pb-2">Work Experience</h3>

            <li className="ms-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-[6.2px] bg-neutral"></div>
              <time className="text-sm opacity-70">June' 2023 - Aug' 2023</time>
              <h4 className="font-semibold text-lg">
                Shark Innovation Labs Internee
              </h4>
              <p className="text-base">
                Learnt the JavaScript framework “Vue Js”. Utilized HTML, CSS, JS
                and Bootstrap to build fully responsive websites. Built a
                login/signup app using Vue Js and implemented local storage for
                user’s data.
              </p>
            </li>
          </div> */}
        </div>
      </section>
    </section>
  );
}

export default App;
