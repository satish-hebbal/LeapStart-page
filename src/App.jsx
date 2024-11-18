import React, { useState, useEffect } from 'react';
import LS from './assets/Leapstart.png';
import LSimg from './assets/LSimage.png';
import TryFreeButton from './components/TryFreeButton';
import AnimatedHeroText from './components/AnimatedHeroText';
import Sec2 from './components/Section2';
import Sec3 from './components/Section3';

const App = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Make navbar visible when scrolling up or at the top
      setVisible(
        (prevScrollPos > currentScrollPos) || currentScrollPos < 10
      );
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-lexend flex flex-col items-center">
      {/* Navigation */}
      <nav className={`
        fixed w-full z-50 transition-all duration-300
        ${visible ? 'top-0' : '-top-24'}
        backdrop-blur-md bg-white/30 border-b border-gray-200/20
      `}>
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 ml-2">
            <img src={LS} alt="LeapStart Logo" className="w-4 h-auto lg:w-8 lg:h-auto" />
            <span className="lg:text-xl font-semibold">LeapStart.ai</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('why-leapstart')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Why LeapStart?
            </button>
            <button 
              onClick={() => scrollToSection('product')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Product
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </button>
            <button className="px-6 py-2 bg-gray-100 rounded-full flex justify-center items-center text-gray-900 hover:bg-gray-200 transition-colors">
              <p>Try for free</p>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container text-center flex flex-col items-center px-4 pt-16 mt-16 ">
        {/* Hero Text */}
        <div className='absolute py-8 flex flex-col items-center gap-8 lg:gap-4 md:gap-4'>
        <AnimatedHeroText/>
        <p className="mb-2 lg:px-0 px-6 text-sm md:text-md text-gray-600 max-w-3xl">
          AI-powered insights transforming market mysteries into personalized strategies and clear growth paths for your unique startup journey.
        </p>

        <TryFreeButton/>


        </div>

        {/* Image */}
        <img
          src={LSimg}
          alt="LeapStart Platform Preview"
          className="w-full min-w-3xl mt-80 lg:mt-32 h-auto rounded-sm"
        />
      </main>

    
        <Sec2 id="why-leapstart" />
     
      
     
        <Sec3 id="pricing"/>
     

    </div>
  );  
};

export default App;
