import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ExpertisePage from "./components/ExpertisePage";
import HomePage from "./components/HomePage";
import Loading from "./components/Loading";
import ProjectsPage from "./components/ProjectsPage";

import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setLoading(false);
      // Delay the visibility change to allow for the loader to disappear
      setTimeout(() => {
        setVisible(true);
      }, 60); // Adjust the delay if needed
    }, 3000); // Adjust the timeout duration as needed
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section
      className={`App text-base transition-all fade-in ${
        visible ? "visible" : ""
      }`}
    >
      <HomePage />
      <AboutPage />
      <ExpertisePage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </section>
  );
}

function Footer() {
  return (
    <section className="border w-full flex flex-col gap-6 items-center text-base faded justify-center py-1">
      <p>
        Copyright<i className="fa-regular fa-copyright fa-sm px-1.5"></i>2024
        Umar Farooq All Rights Reserved
      </p>
    </section>
  );
}

export default App;
