import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsAndEducation from "./components/SkillsAndEducation";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer"; // ✅ Imported new enhanced footer
import Certification from "./components/Certification";
function App() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main>
        <Hero />
      </main>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center px-6 py-20 md:py-32"
      >
        <About />
      </section>

      {/* Skills and Education Section */}
      <section
        id="skills"
        className="min-h-screen flex flex-col justify-center items-center px-6 py-20 md:py-32 bg-gray-50 dark:bg-gray-900"
      >
        <SkillsAndEducation />
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex flex-col justify-center items-center px-6 py-20 md:py-32 bg-gray-50 dark:bg-gray-900 transition-colors"
      >
        <Experience />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center px-6 py-20 md:py-32 bg-gray-50 dark:bg-gray-900 transition-colors"
      >
        <Projects />
      </section>

      {/* Certification Section */}
      <section
       id="certifications"
       className="min-h-screen flex flex-col justify-center items-center px-6 py-20 md:py-32 bg-gray-50 dark:bg-gray-900 transition-colors"
      >
       <Certification />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center px-6 py-20 md:py-32"
      >
        <Contact />

      </section>
      
      {/* Enhanced Footer */}
      <Footer />
    </div>
  );
}

export default App;
