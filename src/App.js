import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import About from "./components/about/About";
import ExpTimeline from "./components/ExpTimeline";
import Projects from "./components/Projects";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <About />
      </div>
      <div className="banner">
        <ParticlesBackground />
      </div>
      <br />
      <div className="timeline">
        <ExpTimeline />
      </div>
      <div className="skills my-8">
        <Skills />
      </div>
      <div className="projects">
        <Projects />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
