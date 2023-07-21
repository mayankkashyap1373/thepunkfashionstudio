'use client';
import Image from 'next/image';
import HeroImage from '../../public/images/PUNK.png aa.png';
import Logo from '../../public/images/the punk logo png white.png';
import Banner from '../../public/images/IMG_6095.JPEG';
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
        <>
            <header>
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
            </header>
            <div className='w-full flex mt-44 items-center'>
                <Image className='w-1/4' src='/images/Untitled.png' width={1621} height={3579} />
                <div>
                    <h2></h2>
                    <p className='text-3xl px-24 text-right font-thin leading-[4rem]'><span className='text-8xl'>T</span>he design incorporates the intricate detailing of realistic tattoo artistry with the bold and visionary strokes of abstract art. It features an amalgamation of geometric shapes.<br/>

The face, a realistic portrait, is the central motif in the design, creating an immediate point of interest. It is characterized by its vivid detailing, accentuated by chiaroscuro shading that brings lifelike depth to the piece. Simultaneously, the abstract elements of the tattoo act as a narrative extension, fostering a layered interpretation of the piece.

</p>
                </div>
            </div>
            <section id='gallery' className='relative mt-44'>
                <div className='flex justify-center items-center'>
                    <h1 className='text-5xl font-bold tracking-widest font-oswald uppercase text-[#ff3d3e]'>Tattoo Categories</h1>
                </div>
            </section>
            <section id='gallery' className='h-auto py-6 sm:pt-20 sm:pb-28 px-4 xs:px-12 sm:px-20 lg:px-28 xl:px-36 2xl:px-80 3xl:px-96 flex justify-center mb-96 text-black'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-fit'>
                    <div className='relative w-fit shadow-custom-dark mr-[1.5rem]'>
                        <div className='absolute bottom-0 h-36 bg-[#ff3d3e] opacity-70 text-4xl font-oswald p-8 pb-4 text-left w-full flex flex-col justify-between'>
                            <p className='mb-4'>Tattoo</p>
                            <button className='text-left text-[1rem] text-coral flex items-center font-jost'>
                                Explore full gallery
                                <Icon className='rotate-[135deg] ml-4' icon="teenyicons:arrow-solid" />
                            </button>
                        </div>
                        <Image src='/images/image_6483441 (2).JPG' width={392} height={441} />
                    </div>
                    <div className='relative w-fit shadow-custom-dark mr-[1.5rem]'>
                        <div className='absolute bottom-0 h-36 bg-[#ff3d3e] opacity-70 text-4xl font-oswald p-8 pb-4 text-left w-full flex flex-col justify-between'>
                            <p className='mb-4'>Salon</p>
                            <button className='text-left text-[1rem] text-coral flex items-center font-jost'>
                                Explore full gallery
                                <Icon className='rotate-[135deg] ml-4' icon="teenyicons:arrow-solid" />
                            </button>
                        </div>
                        <Image src='/images/IMG-9291.jpg' width={392} height={441} />
                    </div>
                    <div className='relative w-fit shadow-custom-dark mr-[1.5rem]'>
                        <div className='absolute bottom-0 h-36 bg-[#ff3d3e] opacity-70 text-4xl font-oswald p-8 pb-4 text-left w-full flex flex-col justify-between'>
                            <p className='mb-4'>The Punk School</p>
                            <button className='text-left text-[1rem] text-coral flex items-center font-jost'>
                                Explore course
                                <Icon className='rotate-[135deg] ml-4' icon="teenyicons:arrow-solid" />
                            </button>
                        </div>
                        <Image src='/images/image_6483441 (4).JPG' width={392} height={441} />
                    </div>
                    <div className='relative w-fit shadow-custom-dark mr-[1.5rem]'>
                        <div className='absolute bottom-0 h-36 bg-[#ff3d3e] opacity-70 text-4xl font-oswald p-8 pb-4 text-left w-full flex flex-col justify-between'>
                            <p className='mb-4'>Tattoo</p>
                            <button className='text-left text-[1rem] text-coral flex items-center font-jost'>
                                Explore full gallery
                                <Icon className='rotate-[135deg] ml-4' icon="teenyicons:arrow-solid" />
                            </button>
                        </div>
                        <Image src='/images/image_6483441 (2).JPG' width={392} height={441} />
                    </div>
                    <div className='relative w-fit shadow-custom-dark mr-[1.5rem]'>
                        <div className='absolute bottom-0 h-36 bg-[#ff3d3e] opacity-70 text-4xl font-oswald p-8 pb-4 text-left w-full flex flex-col justify-between'>
                            <p className='mb-4'>Tattoo</p>
                            <button className='text-left text-[1rem] text-coral flex items-center font-jost'>
                                Explore full gallery
                                <Icon className='rotate-[135deg] ml-4' icon="teenyicons:arrow-solid" />
                            </button>
                        </div>
                        <Image src='/images/image_6483441 (2).JPG' width={392} height={441} />
                    </div>
                    <div className='relative w-fit shadow-custom-dark mr-[1.5rem]'>
                        <div className='absolute bottom-0 h-36 bg-[#ff3d3e] opacity-70 text-4xl font-oswald p-8 pb-4 text-left w-full flex flex-col justify-between'>
                            <p className='mb-4'>Tattoo</p>
                            <button className='text-left text-[1rem] text-coral flex items-center font-jost'>
                                Explore full gallery
                                <Icon className='rotate-[135deg] ml-4' icon="teenyicons:arrow-solid" />
                            </button>
                        </div>
                        <Image src='/images/image_6483441 (2).JPG' width={392} height={441} />
                    </div>
                </div>
            </section>
            <footer>
                <div className='bg-darkslateblue h-32 flex justify-center items-start m-20 font-oswald mb-72 mx-20'>
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
                </div>
                <div className='mb-8'>
                    <p className='text-white text-2xl text-center font-jost'>&copy; {new Date().getFullYear()} The Punk Fashion Studio</p></div>
            </footer>
        </>
    );
};
