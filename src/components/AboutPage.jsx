function AboutPage() {
  const about_paragraph = (
    <div className="max-w-3xl text-center flex flex-col gap-3">
      <span className="about-paragraph">
        <span className="font-medium">Hey Peeps!</span> I'm Umar, a Web
        Developer located in <span className="font-medium">Pakistan</span> with
        over
        <span className="font-medium"> 2+ years </span>of bringing{" "}
        <span className="font-medium"> ideas to life </span>in the browser. What
        <span className="font-medium"> sets me apart </span>from others is the
        dedicated concentration on the
        <span className="font-medium"> websites purpose </span>and how the user
        will interact with the interface. I maintain
        <span className="font-medium"> ongoing communication </span>with my
        clients to ensure a
        <span className="font-medium"> clear understanding </span>of their
        requirements.
      </span>
      {/* {about_socials} */}
    </div>
  );

  //   ##########  About Page ##########
  return (
    <section id="about" className="AboutPage min-h-screen px-10 py-12 md:px-24 md:py-14 max-md:pt-24 flex flex-col gap-4 w-full justify-center items-center">
      <div className="about-header flex flex-col items-center w-fit">
        Get to Know
        <span className="heading text-4xl md:text-5xl">About Me</span>
      </div>

      <div className="about-main flex flex-col gap-14 items-center justify-center w-full">
        {about_paragraph}

        <div className="about-timeline lg:flex gap-20 justify-between text-justify">
          <div className="education-timeline max-w-sm">
            <h3 className="heading text-2xl text-center pb-3">Education</h3>
            <Education />
          </div>

          <div className="work-timeline max-w-sm">
            <h3 className="heading text-2xl text-center pb-3">
              Work Experience
            </h3>
            <WorkExp />
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkExp() {
  return (
    <ol className="relative max-w-lg border-s border-neutral-content">
      <span className="flex flex-col gap-4">
        <li className="ms-4">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-[6.2px] bg-neutral"></div>
          <time className="text-sm opacity-70">June' 2023 - Aug' 2023</time>
          <h4 className="font-semibold text-lg">
            Shark Innovation Labs Internee
          </h4>
          <p>
            Learnt the JavaScript framework “Vue Js”. Built a login/signup page
            using Vue Js and implemented local storage for user’s data.
          </p>
        </li>
      </span>
    </ol>
  );
}

function Education() {
  return (
    <ol className="relative max-w-xl border-s border-neutral-content">
      {/* education */}
      <span className="flex flex-col gap-4 mb-10">
        <li className="ms-4">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-[6.2px] bg-neutral"></div>
          <time className="text-sm opacity-70">Matric (Computer Science)</time>
          <h4 className="font-semibold text-lg">Beaconhouse School System</h4>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-[6.2px] bg-neutral"></div>
          <time className="text-sm opacity-70">
            Bachelor of Computer Sciences (BSCS)
          </time>
          <h4 className="font-semibold text-lg">
            University of Management and Technology
          </h4>
        </li>
      </span>
    </ol>
  );
}

export default AboutPage;
