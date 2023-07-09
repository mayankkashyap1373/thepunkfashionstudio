'use client';
import Image from 'next/image';
import HeroImage from '../public/images/PUNK.png aa.png';
import Logo from '../public/images/the punk logo png white.png';
import Banner from '../public/images/IMG_6095.JPEG';
import { useState, useEffect } from 'react';
import SearchComponent from '@/components/SearchComponent';
import { FaMoon, FaSun } from 'react-icons/fa';
import ServicesCardComponent from '@/components/ServicesCardComponent';
import { Icon } from '@iconify/react';

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
        <Image className='w-1/12 absolute left-16 top-0 mr-20 logo-bounce' src={Logo} alt="Logo" />
        <p className="absolute z-10 top-8 left-44 text-[#ff3d3e] text-5xl font-bold uppercase font-oswald">The Punk Fashion Studio</p>
        <p className='absolute top-[85px] left-44'>We're PUNKS...</p>
        <SearchComponent />
      </section>
      <section className='relative top-40 z-20' id='nav-section'>
        <hr className='m-auto w-11/12 mb-4' />
        <nav className='flex justify-center items-center w-full h-20'>
          <ul className='flex items-center'>
            <li className='relative group text-white text-xl font-bold uppercase font-oswald p-8'><a href='#' className='transition ease-in-out duration-500'>Home</a><div className='absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500'></div></li>
            <li className='relative group text-white text-xl font-bold uppercase font-oswald p-8'><a href='#' className='transition ease-in-out duration-500'>Services</a><div className='absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500'></div></li>
            <li className='relative group text-white text-xl font-bold uppercase font-oswald p-8'><a href='#about-us' className='transition ease-in-out duration-500'>About</a><div className='absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500'></div></li>
            <li className='relative group text-white text-xl font-bold uppercase font-oswald p-8'><a href='#gallery' className='transition ease-in-out duration-500'>Gallery</a><div className='absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500'></div></li>
            <li className='relative group text-white text-xl font-bold uppercase font-oswald p-8'><a href='#contact-us' className='transition ease-in-out duration-500'>Contact</a><div className='absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500'></div></li>
          </ul>
        </nav>
      </section>
      <section id='second-section' className='relative top-[62px]'>
        <div className="absolute z-10 w-full inset-0 bg-black bg-opacity-70">
          <Image className='w-4/12 absolute left-[500px] top-36 mr-20 opacity-30' src={Logo} alt="Logo" />
          <h2 className='uppercase text-8xl font-bold font-oswald relative float-right right-[110px] top-96'>The Punk</h2>
          {/* <h3 className='uppercase relative tracking-[1.14em] top-[500px] left-[960px]'>Fashion Studio</h3> */}
          <hr className='relative top-[200px] left-56 w-1/6 border-white border-8 float-left' />
          <hr className='relative top-[312px] left-[-128px] w-1/6 border-white border-8 float-left rotate-90' />
          {/* <hr className='relative top-[508px] w-5/12 border-[#ff3d3e] border-8 float-right right-[-384px]' /> */}
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
        <div className="absolute z-20 w-full top-0 bg-black bg-opacity-70" />
      //<Image className='w-3/4 m-auto relative top-16' src={HeroImage} alt="Hero Image" width="100vh" />
        <div className='z-10 flex items-center justify-center relative top-[-400px]'>
          <button className='bg-[#ff3d3e] rounded-full w-1/3 text-3xl h-32 font-bold uppercase font-jost shadow-custom'>Book Your Appointment</button>
        </div>
      </section>
      <section id='about-us' className='relative '>
        <div className='flex justify-center items-center'>
          <h1 className='text-5xl font-bold tracking-widest font-comforter text-[#ff3d3e]'>About Us</h1>
        </div>
      </section>
      <section className='bg-whitesmoke pb-24 px-[8.75rem]'>
        {/* <h3 className='text-center text-6xl font-oswald text-gray-200 pt-36'>About IFACET</h3> */}
        <p className='text-justify font-jost text-2xl font-light mt-16'>Welcome to The Punk Fashion Studio, the ultimate sanctuary for rebellious souls seeking authenticity. Born out of a dream to redefine punk culture, we've built a haven where edgy aesthetics and kind-hearted spirits blend seamlessly.<br />

Here, style is an expression of defiance, but that doesn't mean you can't have a heart of gold. Our founder believed in the duality of the punk persona – edgy on the outside, gentle on the inside – and made it our guiding principle.<br />

Step into our world, where you'll find a cornucopia of avant-garde clothing, audacious hairstyles, and intricate tattoos. As you explore, imagine yourself in a radical new look, embodying the raw punk energy while remaining true to your gentle spirit.<br />

Excited? Take the leap. Join our punk revolution and let your style scream authenticity. The Punk Fashion Studio is not just a shop, hair salon, or tattoo studio. It's a lifestyle, a movement, a family. And we can't wait for you to become part of it.</p>
        </section>
        <section id='about-us' className='relative '>
        <div className='flex justify-center items-center'>
          <h1 className='text-5xl font-bold tracking-widest font-comforter text-[#ff3d3e]'>Gallery</h1>
        </div>
      </section>
      <section id='gallery' className='h-96 bg-darkslateblue pl-[8.75rem] h-fit pb-32 pt-20 text-black'>
                <div className='flex w-fit items-center'>
                    <div className='relative w-fit shadow-custom-dark mr-[1.5rem]'>
                        <div className='absolute bottom-0 h-[11.5rem] bg-[#ff3d3e] opacity-70 text-4xl font-oswald p-8 pb-4 text-left w-full flex flex-col justify-between'>
                            <p className='mb-4'>Tattoo</p>
                            <button className='text-left text-[1rem] text-coral flex items-center font-jost'>
                                Explore course
                                <Icon className='rotate-[135deg] ml-4' icon="teenyicons:arrow-solid" />
                            </button>
                        </div>
                        <Image src='/images/image_6483441 (2).JPG' width={392} height={441} />
                    </div>
                    <div className='relative w-fit shadow-custom-dark mr-[1.5rem]'>
                        <div className='absolute bottom-0 h-[11.5rem] bg-[#ff3d3e] opacity-70 text-4xl font-oswald p-8 pb-4 text-left w-full flex flex-col justify-between'>
                            <p className='mb-4'>Salon</p>
                            <button className='text-left text-[1rem] text-coral flex items-center font-jost'>
                                Explore course
                                <Icon className='rotate-[135deg] ml-4' icon="teenyicons:arrow-solid" />
                            </button>
                        </div>
                        <Image src='/images/image_6483441 (2).JPG' width={392} height={441} />
                    </div>
                    <div className='relative w-fit shadow-custom-dark mr-[1.5rem]'>
                        <div className='absolute bottom-0 h-[11.5rem] bg-[#ff3d3e] opacity-70 text-4xl font-oswald p-8 pb-4 text-left w-full flex flex-col justify-between'>
                            <p className='mb-4'>The Punk School</p>
                            <button className='text-left text-[1rem] text-coral flex items-center font-jost'>
                                Explore course
                                <Icon className='rotate-[135deg] ml-4' icon="teenyicons:arrow-solid" />
                            </button>
                        </div>
                        <Image src='/images/image_6483441 (2).JPG' width={392} height={441} />
                    </div>
                </div>
            </section>
      <section id='our-specialists' className='relative mb-16'>
        <div className='flex justify-center items-center'>
          <h1 className='text-5xl font-bold tracking-widest font-comforter'>Our Specialists</h1>
        </div>
      </section>
      <section className='bg-whitesmoke pb-24 px-[8.75rem]'>
        {/* <h3 className='text-center text-6xl font-oswald text-gray-200 pt-36'>About IFACET</h3> */}        <div className='grid grid-cols-3 gap-4 content-center'>
          <div className='w-fit custom-overlay shadow-custom-dark flex flex-col items-center'>
            <div className='default-text px-8 text-center'>Pranjul Garu (Hair Stylist)</div>
            <a href="#" className="hidden hover-link text-coral font-oswald text-4xl flex flex-col text-center">Training<Icon className='rotate-[135deg] text-6xl text-darkslateblue' icon="teenyicons:arrow-solid" /></a>
            <Image src='/images/IMG_20220115_210534-1-1536x2048.jpg' width={396} height={541} />
          </div>
          <div className='relative w-fit custom-overlay shadow-custom-dark'>
            <div className='default-text px-8 text-center'>Tattoo Studio</div>
            <a href="#" className="hidden hover-link text-coral font-oswald text-4xl flex flex-col text-center">Consulting<Icon className='rotate-[135deg] text-6xl text-darkslateblue' icon="teenyicons:arrow-solid" /></a>
            <Image src='/images/image_6483441 (2).JPG' width={396} height={541} />
          </div>
          <div className='relative w-fit custom-overlay shadow-custom-dark'>
            <div className='default-text px-8 text-center'>Hair Salon</div>
            <a href="#" className="hidden hover-link text-coral font-oswald text-4xl flex flex-col text-center">Innovation & Entrepreneurship<Icon className='rotate-[135deg] text-6xl text-darkslateblue' icon="teenyicons:arrow-solid" /></a>
            <Image src='/Paraphrase Productions (1).jpg' width={396} height={541} />
          </div>
        </div>
      </section>
      <section className='pb-24 px-[8.75rem] font-bebas-neue h-[30rem]'>
        <div className='grid grid-cols-3 gap-4 content-center'>
          <div className='flex flex-col items-center'>
            <h1 className='text-8xl font-bold mb-12'>5+</h1>
            <p className='text-5xl font-bold uppercase text-[#ff3d3e]'>Years Experience</p>
          </div>
          <div className='flex flex-col items-center'>
          <Image className='w-1/4 absolute top-[230rem] opacity-10 -z-10' src={Logo} alt="Logo" />
            <h1 className='text-8xl font-bold mb-12'>7+</h1>
            <p className='text-5xl font-bold uppercase text-[#ff3d3e]'>Clients from Cities</p>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='text-8xl font-bold mb-12'>1000+</h1>
            <p className='text-5xl font-bold uppercase text-[#ff3d3e]'>Clients</p>
          </div>
        </div>
      </section>
      <section className='h-[10rem] pb-24 px-[8.75rem] bg-fixed bg-size-contain mb-32' style={{"background-image": "url('/images/image_6487327.JPG')", "background-repeat": "no-repeat"}} />
      <section id='special-offer' className='relative mb-16'>
        <div className='flex justify-center items-center'>
          <h1 className='text-5xl font-bold tracking-widest font-comforter mb-8 text-[#ff3d3e]'>Special Offers</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-8xl uppercase font-bold tracking-tight font-bebas-neue mb-12'>20% Off on Tattoo</h1>
          <p className='text-3xl tracking-widest font-jost'>up minimum 5 square inches of tattoo size.</p>
        </div>
      </section>
      <section id='testimonials' className='relative mb-16 border-solid border-2 border-[#ff3d3e] flex flex-col rounded-lg p-12'>
        <div className='flex justify-center items-center'>
          <h1 className='text-5xl tracking-widest font-comforter mb-8 text-[#ff3d3e]'>Testimonials</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-5xl uppercase font-bold tracking-widest font-bebas-neue mb-12'>What People Say About Us</h1>
          <div className='grid grid-cols-2 gap-4 content-center'>
            <p>sfdgghbnm,</p>
            <p>sfdgghbnm,</p>
            </div>
        </div>
      </section>
        <footer className='bg-darkslateblue h-32 flex justify-center items-start m-20 font-oswald mb-72 mx-20'>
          <div className='w-1/2'>
          <div className='flex flex-col justify-center items-start'>
            <p className='text-6xl font-bold mb-16 uppercase text-[#ff3d3e] font-bebas-neue'>The Punk Fashion Studio</p>
            <div className='flex justify-start items-center'>
              <Icon className='text-[#ff3d3e] text-5xl' icon="akar-icons:instagram-fill" />
              <Icon className='text-[#ff3d3e] text-5xl ml-8' icon="akar-icons:facebook-fill" />
              <Icon className='text-[#ff3d3e] text-5xl ml-8' icon="akar-icons:twitter-fill" />
              <Icon className='text-[#ff3d3e] text-5xl ml-8' icon="akar-icons:youtube-fill" />
              <Icon className='text-[#ff3d3e] text-5xl ml-8' icon="akar-icons:pinterest-fill" />
            </div>
          </div>
          </div>
          <div className='w-1/2'>
          <div id='contact-us' className='flex flex-col justify-center items-start pl-12'>
            <p className='text-white text-4xl mb-16 uppercase'>Contact Us</p>
            <div className='font-jost'>
            <p className='text-white text-xl flex tracking-widest mb-8'><Icon className='text-[#ff3d3e] text-5xl mr-8' icon="mdi:address-marker" /><div><span>118/164 (7), Gumti No.5, Kaushalpuri, Darshan Purwa, Kanpur, Uttar Pradesh 208012</span><a href='https://goo.gl/maps/cvMJpn2NRzND3r6G7'><br /><span className='underline cursor-pointer'>(Click here to reach our location)</span></a></div></p>
            <p className='text-white text-xl flex tracking-widest mb-8'><Icon className='text-[#ff3d3e] text-4xl mr-8' icon="mdi:phone" />+91 885855910, +91 8177006806</p>
            <p className='text-white text-xl flex tracking-widest mb-8'><Icon className='text-[#ff3d3e] text-4xl mr-8' icon="mdi:email" />thepunkfashionstudio@gmail.com</p>
            </div>
          </div>
          </div>
        </footer>
        <div className='mb-8'>
        <p className='text-white text-2xl text-center font-jost'>&copy; {new Date().getFullYear()} The Punk Fashion Studio</p></div>
    </main>
  )
}
