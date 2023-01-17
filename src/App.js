import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Hero from './components/hero';
import Nav from './components/nav';
import Projects from './components/projects';
import Services from './components/services';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
