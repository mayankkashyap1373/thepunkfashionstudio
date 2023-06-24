'use client';
import Image from 'next/image';
import HeroImage from '../public/images/PUNK.png aa.png';
import Logo from '../public/images/the punk logo png white.png';
import Banner from '../public/images/IMG_6095.JPEG';
import { useState, useEffect } from 'react';
import SearchComponent from '@/components/SearchComponent';
import { FaMoon, FaSun } from 'react-icons/fa';
import ServicesCardComponent from '@/components/ServicesCardComponent';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };
  

  return (
    <main className="relative w-full mt-8">
      <button onClick={toggleDarkMode} className='absolute right-16 text-sm'>
        {darkMode ? (<div className='flex items-center'><FaSun /> <p className='m-2'>Light Mode</p></div>
        ) : (<div className='flex items-center'><FaMoon /> <p className='m-2'>Dark Mode</p></div>)}
      </button>
      <section id='top-section'>
      {/* <div className="absolute inset-0 bg-black bg-opacity-70"> */}
        <Image className='w-1/12 absolute left-16 top-0 mr-20 logo-bounce' src={Logo} alt="Logo"/>
        <p className="absolute z-10 top-8 left-44 text-[#ff3d3e] text-5xl font-bold uppercase font-oswald">The Punk Fashion Studio</p>
        <p className='absolute top-[85px] left-44'>We're PUNKS...</p>
        <SearchComponent />
      </section>
      <section className='relative top-40 z-20' id='nav-section'>
        <hr className='m-auto w-11/12 mb-4'/>
        <nav className='flex justify-center items-center w-full h-20'>
  <ul className='flex items-center'>
    <li className='relative group text-white text-xl font-bold uppercase font-oswald p-8'><a href='#' className='transition ease-in-out duration-500'>Home</a><div className='absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500'></div></li>
    <li className='relative group text-white text-xl font-bold uppercase font-oswald p-8'><a href='#' className='transition ease-in-out duration-500'>About</a><div className='absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500'></div></li>
    <li className='relative group text-white text-xl font-bold uppercase font-oswald p-8'><a href='#' className='transition ease-in-out duration-500'>Services</a><div className='absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500'></div></li>
    <li className='relative group text-white text-xl font-bold uppercase font-oswald p-8'><a href='#' className='transition ease-in-out duration-500'>Gallery</a><div className='absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500'></div></li>
    <li className='relative group text-white text-xl font-bold uppercase font-oswald p-8'><a href='#' className='transition ease-in-out duration-500'>Contact</a><div className='absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500'></div></li>
  </ul>
</nav>

        </section>
      <section id='second-section' className='relative top-[62px]'>
      <div className="absolute z-10 w-full inset-0 bg-black bg-opacity-70">
      <Image className='w-4/12 absolute left-[500px] top-36 mr-20 opacity-30' src={Logo} alt="Logo"/>
      <h2 className='uppercase text-8xl font-bold font-oswald relative float-right right-[110px] top-96'>The Punk</h2>
      <h3 className='uppercase relative tracking-[1.14em] top-[500px] left-[960px]'>Fashion Studio</h3>
      <hr className='relative top-[200px] left-56 w-1/6 border-white border-8 float-left' />
      <hr className='relative top-[312px] left-[-128px] w-1/6 border-white border-8 float-left rotate-90' />
        <hr className='relative top-[508px] w-5/12 border-[#ff3d3e] border-8 float-right right-[-384px]' />
      {/* <h1 className='relative left-[600px] top-40 text-5xl font-bold tracking-widest font-comforter'>Our Story</h1>
      <p className='p-80 text-justify mt-[-120px] text-sm'>
        Situated in a graffiti-adorned alleyway, nestled amid the city's pulsating heart, lies the unique hybrid of punk self-expression - The Punk Fashion Studio. This urban oasis, a harmonious fusion of a hair salon and a tattoo studio, is where punk aesthetics meet bold individualism. It's a modern sanctuary for the defiant and unconventional, a place where personal style isn't just flaunted, it's permanently etched in ink and transformed through striking hair designs.

<br/><br/>Upon entering, you are greeted by the scent of antiseptic mingled with refreshing notes of premium hair products. The space is a dynamic interplay of dark, atmospheric lighting and vibrant graffiti-style murals - an authentic reflection of the punk ethos and a testament to the studio's commitment to individualism.

<br/><br/>The Punk Fashion Studio is home to a team of highly skilled tattoo artists and avant-garde hairstylists, each a master in their craft. Specializing in a range of tattoo styles from traditional to neo-traditional, blackwork, and more, the artists skillfully translate personal stories into timeless inked designs. On the other side, visionary hairstylists work their magic, creating rebellious cuts and color transformations that challenge conventional beauty standards.

<br/><br/>Every client that steps through our doors is seen as a collaborator in creating a unique piece of self-expression. At the intersection of hair artistry and tattoo design, personal style becomes a piece of living, breathing artwork that embodies the client's individuality.

<br/><br/>Sterility and safety are our priority. Amid the studio's punk aesthetic, a pristine environment ensures every service, from tattoos to hair treatments, is provided in a professional, hygienic atmosphere.

<br/><br/>Choosing The Punk Fashion Studio is a decision to embark on a unique journey of self-expression. We urge you to delve into our world, explore our artists' portfolios, read our reviews, and then choose us confidently to reflect your authentic self through our edgy services. Step into The Punk Fashion Studio and become part of our vibrant, boundary-pushing community.
        </p> */}
      </div>
      <div className='blur-sm' style={{
          backgroundImage: `url('/images/IMG_6095.JPEG')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '600px',
      }}></div>



        </section>
      <section id='third-section'>
      <div className="absolute z-20 w-full top-0 bg-black bg-opacity-70"/>
      //<Image className='w-3/4 m-auto relative top-16' src={HeroImage} alt="Hero Image" width="100vh"/>
      <div className='z-10 flex items-center justify-center relative top-[-400px]'>
        <button className='bg-[#ff3d3e] rounded-full w-1/3 text-3xl h-32 font-bold uppercase font-nunito_sans shadow-custom'>Book Your Appointment</button>
      </div>
      </section>
      <section id='our-specialists' className='relative top-[-120px]'>
        <div className='flex justify-center items-center'>
          <h1 className='text-5xl font-bold tracking-widest font-comforter'>Our Specialists</h1>
        </div>
        </section>
    </main>
  )
}
