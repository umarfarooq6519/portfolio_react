import AboutPage from "./components/AboutPage";
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
    </section>
  );
}

export default App;
