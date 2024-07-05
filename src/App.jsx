import { useState, useEffect } from "react";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ExpertisePage from "./components/ExpertisePage";
import HomePage from "./components/HomePage";
import Loading from "./components/Loading";
import ProjectsPage from "./components/ProjectsPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      // Simulate a loading process
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <section className="App text-base">
      {loading ? (
        <Loading />
      ) : (
        <div className={`animate-fadeIn`}>
          <HomePage />
          <AboutPage />
          <ExpertisePage />
          <ProjectsPage />
          <ContactPage />
          <Footer />
        </div>
      )}
    </section>
  );
}

function Footer() {
  return (
    <section className="w-full flex flex-col gap-6 items-center text-base faded justify-center py-1">
      <p>
        Copyright<i className="fa-regular fa-copyright fa-sm px-1.5"></i>2024
        Umar Farooq All Rights Reserved
      </p>
    </section>
  );
}

export default App;
