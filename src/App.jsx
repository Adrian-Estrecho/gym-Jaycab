import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Programs from './components/Programs.jsx';
import Process from './components/Process.jsx';
import Proof from './components/Proof.jsx';
import Pricing from './components/Pricing.jsx';
import Faq from './components/Faq.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CallBar from './components/CallBar.jsx';

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <Hero />
      <main id="main">
        <About />
        <Programs />
        <Process />
        <Proof />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <CallBar />
    </>
  );
}
