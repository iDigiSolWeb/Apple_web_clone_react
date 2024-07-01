import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Model from './components/Model';
import Features from './components/Features';
import Footer from './components/Footer';
import Highligths from './components/Highligths';
import HowItWorks from './components/HowItWorks';
import * as Sentry from '@sentry/react';


const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highligths />
      <Model />
      <Features />
      <HowItWorks/>
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);