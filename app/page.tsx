import Header from './components/Header';
import Hero from './components/Hero';
import ProcessGrid from './components/ProcessGrid';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProcessGrid />
      <Gallery />
      <ContactForm />
      <Footer />
    </main>
  );
}
