import logo from './logo.svg';
import './App.css';
import { Header } from './layouts/header';
import FeatureCard from './components/featureCard';
import {useEffect, useState} from 'react';


const TextAnimation = () => {
 

 

  
}

function App() {
  const textArray = [
    "E","x", "p", "e", "r", "i", "e", "n", "c", "e", " ", "t", "h", "e", " ", "B", "e", "s", "t", " ", "o", "f", " ", "A", "I", " ", "w", "i", "t", "h", " ", "I",
    "n", "t", "r", "a", "I", "n", "t", "e", "l", ".", "a", "i"
  ]
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    // Function to advance to the next text
    const nextText = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    };
    const timer = setInterval(nextText, 100);

    return () => {
      // Clean up the timer when the component unmounts
      clearInterval(timer);
    };
  }, []);

  const callback = (entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up');
      } else {
        entry.target.classList.remove('animate-slide-up');
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback);
    const targets = document.querySelectorAll('.pricing-card');

    targets.forEach((target) => {
      target.classList.add('opacity-0');
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const aboutUscallback = (entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-show');
      } else {
        entry.target.classList.remove('animate-show');
      }
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(aboutUscallback);
    const targets = document.querySelectorAll('.about-us-card');

    targets.forEach((target) => {
      target.classList.add('opacity-0');
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };

  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(callback);
    const targets = document.querySelectorAll('.feature-card-animation');

    targets.forEach((target) => {
      target.classList.add('opacity-0');
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };

  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(callback);
    const targets = document.querySelectorAll('.contact-us-animation');

    targets.forEach((target) => {
      target.classList.add('opacity-0');
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };

  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(callback);
    const targets = document.querySelectorAll('.clientsay-animation');

    targets.forEach((target) => {
      target.classList.add('opacity-0');
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };

  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(callback);
    const targets = document.querySelectorAll('.faq-animation');

    targets.forEach((target) => {
      target.classList.add('opacity-0');
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };

  }, [])
  return (
    <div className="App text-white">
        <Header/>
        <main className='h-[400px] xl:h-[700px] lg:h-[700px] md:h-[600px]  pl-8 xl:pl-52 lg:pl-40 sm:pl-32'>
          {/* main section begin */}
          <div className='relative pt-20'>
            <div className='pl-4 xl:pl-10 lg:pl-8 md:pl-6 w-auto xl:w-1/2 sm:w-1/2 lg:1/2 md:1/2 mt-32 text-white'>
              <div className='text-left'>
                <h1 className='text-2xl xl:text-7xl lg:text-7xl md:text-5xl mb-4 font-monoton'>FEATURES</h1>
                <h1 className='text-2xl xl:text-7xl lg:text-7xl md:text-5xl font-monoton'>THAT EMPOWER</h1>
                <div className='mt-2 xl:text-3xl lg:text-3xl md:text-2xl'>
                  “{ textArray.slice(0, currentIndex) }”
                </div>
                <div className='mt-8'>
                  <button className='duration-300 px-5 py-3 rounded-3xl  hover:bg-white hover:text-slate-950 hover-customer-discover bg-purple-600 shadow-lg shadow-gray-500'>
                    <div className="flex gap-3 items-center">
                      <img src="/assets/icons/play.png" className='h-[16px]'/>
                      <div className=' w-[2px] h-[25px] bg-white'></div>
                      <span className='font-bold'>Discover More</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className='absolute right-0 top-32 h-[300px] xl:h-[600px] lg:h-[600px] md:h-[500px] flex flex-col justify-center -z-10'>
              <img src="/assets/images/back.png" className='w-auto h-full absolute right-0 top-0 -z-10'/>
              <img src="/assets/images/robot.png" className='w-auto h-[250px] xl:h-[5] lg:h-[500px] md:h-[400px]'/>
            </div>
          </div>
          {/* main section end */}
        </main>

        {/* Our features */}
        <div className='mt-24 px-8 xl:px-60 lg:px-16 sm:px-16'>
          <h1 className='text-white text-center text-3xl font-bold'>Our Features</h1>
          <div className='mt-20'>
            <div className='flex flex-wrap flex-col xl:flex-row lg:flex-row'>
               
               <FeatureCard
                src="/assets/images/mark_ai.png"
                title="Advanced AI & ML"
                animation="feature-card-animation"
                animationTransform="delay-400 translate-y-20 transform transition-transform"
               >
                <div>Utilize state-of-the-art AI and ML algorithms to craft human-like content tailored to specific questions.</div>
              </FeatureCard>

              <FeatureCard
                src="/assets/images/mark_security.png"
                title="Secure Data Handling"
                animation="feature-card-animation"
                animationTransform="delay-400 translate-y-20 transform transition-transform"
               >
                <div>Process data within the company's security boundary, ensuring confidentiality and compliance.</div>
              </FeatureCard>

              <FeatureCard
                src="/assets/images/mark_user.png"
                title="User-Centric Design"
                animation="feature-card-animation"
                animationTransform="delay-400 translate-y-20 transform transition-transform"
               >
                <div>We believe technology should be intuitive. With a user-friendly interface, IntraIntel.ai ensures that you can leverage the power of AI.</div>
              </FeatureCard>

              <FeatureCard
                src="/assets/images/mark_multi_sector.png"
                title="Multi-Sector Expertise"
                animation="feature-card-animation"
                animationTransform="delay-500 translate-y-20 transform transition-transform"
               >
                <div>From government and medical to research and finance, IntraIntel.ai is versatile.</div>
              </FeatureCard>

              <FeatureCard
                src="/assets/images/mark_integration.png"
                title="Custom Integration"
                animation="feature-card-animation"
                animationTransform="delay-500 translate-y-20 transform transition-transform"
               >
                <div>Say goodbye to waiting. With our real-time API integrations, IntraIntel.ai ensures rapid data ingestion and immediate content generation.</div>
              </FeatureCard>

              <FeatureCard
                src="/assets/images/mark_ai.png"
                title="Custom Integration"
                animation="feature-card-animation"
                animationTransform="delay-500 translate-y-20 transform transition-transform"
               >
                <div>Every business or person has unique need need to perform their job, and so is its data.</div>
              </FeatureCard>

            </div>
          </div>
        </div>

        {/* About us */}

        <div className='about-us-card delay-400 transform transition-transform mt-24 px-8 xl:px-60 lg:px-32 md:px-32'>
          <h1 className='text-white text-center text-3xl font-bold'>About Us</h1>
          <div className='mt-20'>
            <div className='flex flex-col xl:flex-row lg:flex-row gap-4 items-center'>
              <div className='relative w-full xl:w-[400px] lg:w-[400px]  h-[300px] flex-shrink-0'>
                <img src="/assets/images/video_thumb.png" className='w-full h-full'/>
              </div>
              <div className="flex-grow text-xl text-left text-white font-bold" style={{ lineHeight: '50px' }}>
                At IntraIntel.ai, we transform how businesses leverage internal data. Using state-of-the-art AI and ML, our platform crafts precise, human-like content from vast intranet sources. With expertise spanning government, medical, research, and finance sectors, we aim to boost efficiency, expedite responses, and prioritize human-centric tasks like strategic decision-making. 
              </div>
            </div>
          </div>
        </div>

        {/* Wehat our clients say */}

        <div className='clientsay-animation delay-400 translate-y-20 transform transition-transform mt-24 px-8 xl:px-60 lg:px-32 md:px-32'>
          <div className='px-10 py-20 rounded-xl bg-custom-gradient'>
            <h1 className='text-white text-center text-3xl font-bold'>What Our clients say</h1>
            <div className='text-white max-w-2xl mx-auto mt-6'>See what our customer say about us. It really matter for us. How good or bad we will make ir for evaluation to make EhyalLive better.</div>
            <div className='mt-8'>
              <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row gap-4'>
                <div className='p-3 w-full xl:w-1/3 lg:w-1/3 md:1/3 bg-custom-gradient rounded-md'>
                  <div className='flex gap-4 font-bold'>
                    <span className='text-yellow-400'>starstar</span> <span>star</span>
                  </div>
                  <div className='mt-6 text-left'>
                    "Loren ipsum dolor sit amet,"
                  </div>

                  <div className='mt-6'>
                    <div className='flex items-center gap-4'>
                      <img src="/assets/images/avatar.png" className='rounded-full w-[50px] h-[50px]'/>
                      <div>
                        <div  className='text-xl font-bold'>Denny Hilguston</div>
                        <div className='text-pink-500 text-left '>@denny.hill</div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className='p-3 w-full xl:w-1/3 lg:w-1/3 md:1/3 bg-custom-gradient rounded-md'>
                  <div className='flex gap-4 font-bold'>
                    <span className='text-yellow-400'>starstar</span> <span>star</span>
                  </div>
                  <div className='mt-6 text-left'>
                    "Loren ipsum dolor sit amet,"
                  </div>

                  <div className='mt-6'>
                    <div className='flex items-center gap-4'>
                      <img src="/assets/images/avatar.png" className='rounded-full w-[50px] h-[50px]'/>
                      <div>
                        <div  className='text-xl font-bold'>Denny Hilguston</div>
                        <div className='text-pink-500 text-left '>@denny.hill</div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className='p-3 w-full xl:w-1/3 lg:w-1/3 md:1/3 bg-custom-gradient rounded-md'>
                  <div className='flex gap-4 font-bold'>
                    <span className='text-yellow-400'>starstar</span> <span>star</span>
                  </div>
                  <div className='mt-6 text-left'>
                    "Loren ipsum dolor sit amet,"
                  </div>

                  <div className='mt-6'>
                    <div className='flex items-center gap-4'>
                      <img src="/assets/images/avatar.png" className='rounded-full w-[50px] h-[50px]'/>
                      <div>
                        <div  className='text-xl font-bold'>Denny Hilguston</div>
                        <div className='text-pink-500 text-left '>@denny.hill</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
      </div>

      {/* Pricing */}

      
      <div className='mt-24 px-8 xl:px-60 lg:px-32 md:px-32'>
          <div className=''>
            <h1 className='text-white text-center text-3xl font-bold'>Pricing</h1>
            <div className='mt-6'>
              <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row gap-4'>
                <div className='pricing-card p-3 py-8 w-full xl:w-1/3 lg:w-1/3 md:1/3 bg-custom-gradient rounded-lg delay-200 translate-y-20 transform transition-transform'>
                  <div className='text-center text-2xl font-bold'>Montly</div>
                  <div className='mt-6'>
                    <h1 className='text-purple-600 text-4xl font-bold'>20$</h1>
                  </div>

                  <div className='mt-6'>
                    <div className='mb-4'>Lorem ipsum dolor sit omet.</div>
                    <div className='mb-4'>Lorem ipsum dolor sit omet.</div>
                    <div className='mb-4'>Lorem ipsum dolor sit omet.</div>
                  </div>

                  <div className='mt-10'>
                    <button className='duration-300 hover:bg-white hover:text-slate-950 bg-purple-600 text-white font-bold rounded-3xl px-1 py-2'>
                      Get Started Today
                    </button>
                  </div>
                </div>


                <div className='pricing-card p-3 py-8 w-full xl:w-1/3 lg:w-1/3 md:1/3 bg-custom-gradient rounded-lg delay-300 translate-y-20 transform transition-transform'>
                  <div className='text-center text-2xl font-bold'>Annually</div>
                  <div className='mt-6'>
                    <h1 className='text-purple-600 text-4xl font-bold'>80$</h1>
                  </div>

                  <div className='mt-6'>
                    <div className='mb-4'>Lorem ipsum dolor sit omet.</div>
                    <div className='mb-4'>Lorem ipsum dolor sit omet.</div>
                    <div className='mb-4'>Lorem ipsum dolor sit omet.</div>
                  </div>

                  <div className='mt-10'>
                    <button className='duration-300 hover:bg-white hover:text-slate-950 bg-purple-600 text-white font-bold rounded-3xl px-1 py-2'>
                      Get Started Today
                    </button>
                  </div>
                </div>


                <div className='pricing-card p-3 py-8 w-full xl:w-1/3 lg:w-1/3 md:1/3 bg-custom-gradient rounded-lg delay-500 translate-y-20 transform transition-transform'>
                  <div className='text-center text-2xl font-bold'>Lifetime</div>
                  <div className='mt-6'>
                    <h1 className='text-purple-600 text-4xl font-bold'>250$</h1>
                  </div>

                  <div className='mt-6'>
                    <div className='mb-4'>Lorem ipsum dolor sit omet.</div>
                    <div className='mb-4'>Lorem ipsum dolor sit omet.</div>
                    <div className='mb-4'>Lorem ipsum dolor sit omet.</div>
                  </div>

                  <div className='mt-10'>
                    <button className='duration-300 hover:bg-white hover:text-slate-950 bg-purple-600 text-white font-bold rounded-3xl px-1 py-2'>
                      Get Started Today
                    </button>
                  </div>
                </div>
                
              </div>

              

            </div>
          </div>
      </div>

      {/* FAQ */}

      <div className='faq-animation delay-400 translate-y-20 transform transition-transform  mt-24 px-8 xl:px-60 lg:px-32 md:px-32'>
        <h1 className='text-white text-center text-3xl font-bold'>FAQ</h1>
        <div className='mt-20'>
          <div className='mx-auto' style={{ maxWidth: '500px' }}>
            <div className='flex justify-center mb-4 items-center gap-5 cursor-pointer'>
              <div className='font-bold underline'>Lorem ipsum dolor sit amet.</div>
              <img src="/assets/icons/angle_down.png" className="h-4" />
            </div>
            <div className='flex justify-center mb-4 items-center gap-5 cursor-pointer'>
              <div className='font-bold underline'>Lorem ipsum dolor sit amet.</div>
              <img src="/assets/icons/angle_down.png" className="h-4" />
            </div>
            <div className='flex justify-center mb-4 items-center gap-5 cursor-pointer'>
              <div className='font-bold underline'>Lorem ipsum dolor sit amet.</div>
              <img src="/assets/icons/angle_down.png" className="h-4" />
            </div>
          </div>
        </div>
      </div>

         {/* Contact Us */}

        <div className='contact-us-animation delay-400 translate-y-20 transform transition-transform mt-24 px-8 xl:px-60 lg:px-32 md:px-32'>
        <h1 className='text-white text-center text-3xl font-bold'>Contact Us</h1>
        <div className='mt-20 rounded-3xl bg-custom-gradient'>
          <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row justify-between items-center '>
            <div className='w-full xl:w-1/2 lg:w-1/2 md:w-1/2 h-[400px] flex flex-col px-8 py-6'>
              <h2  className='text-2xl font-bold text-left mb-6'>Get In Touch</h2>
              <div className='text-left flex-grow flex flex-col justify-between'>
                <div className='flex gap-4'>
                  <img src="/assets/icons/email.png" className='h-[50px]'/> <span  className='text-white font-bold'>example@gmail.com</span>
                </div>
                <div className='flex gap-4'>
                  <img src="/assets/icons/facebook.png" className='h-[50px]'/> <span  className='text-white font-bold'>Intra Intel.Ai_example</span>
                </div>
                <div className='flex gap-4'>
                  <img src="/assets/icons/yutube.png" className='h-[50px]'/> <span  className='text-white font-bold'>Intra Intel.AI_example</span>
                </div>
                <div className='flex gap-4'>
                  <img src="/assets/icons/phone.png" className='h-[50px]'/> <span  className='text-white font-bold'>+1234567890</span>
                </div>
              </div>
            </div>
            <div className='w-full xl:w-1/2 lg:w-1/2 md:w-1/2 h-[400px] flex justify-center items-center bg-custom-gradient rounded-3xl'>
              <div>
                <div className='mb-4'>
                  <input className='rounded-3xl text-xl font-bold px-4 py-2 text-white bg-purple-700 bg-opacity-50 placeholder:text-white' placeholder='Email'/>
                </div>
                <div className='mb-4'>
                  <input className='rounded-3xl text-xl font-bold px-4 py-2 text-white bg-purple-700 bg-opacity-50 placeholder:text-white' placeholder='Subject'/>
                </div>
                <div className='mb-4'>
                  <input className='rounded-3xl text-xl font-bold px-4 py-2 text-white bg-purple-700 bg-opacity-50 placeholder:text-white' placeholder='Message'/>
                </div>
                <button className="px-4 py-2 font-bold rounded-3xl bg-purple-600 duration-300 hover:bg-white hover:text-slate-950">Send Message</button>
              </div>
            </div>  
          </div>
        </div>
      </div>

      {/* footer */}

      <div className='h-400px] xl:h-[600px] lg:h-[600px] md:h-[500px] relative mt-32 px-4 xl:px-60 lg:px-32 md:px-32 pt-12 xl:pt-32 lg:pt-32 md:pt-16 pb-16 text-left bg-custom-gradient-footer'>
        <img src="/assets/images/footer-back.png" className='absolute top-0 right-0 h-full -z-10'/>
        <div className='flex gap-2 xl:ga-12 lg:gap-8 md:gap-6 sm:gap-4'>
          <div className='text-left w-2/5 xl:w-1/3 lg:w-1/3 md:w-1/4'>
            <img src="/assets/images/logo.png" className='w-[90px] xl:w-[160px] lg:w-[160px] md:w-[160px]'/>
            <div className='mt-6'>
              <div className="text-white xl:text-xl lg:text-xl md:text-xl font-bold ">
                  INTRAINTEL<span className="text-purple-600">.AI</span>
              </div>
            </div>

          </div>
          <div className='flex-grow flex gap-2 xl:ga-12 lg:gap-8 md:gap-6 sm:gap-4'>
            <div>
              <h2 className='font-bold xl:text-2xl lg:text-2xl md:text-xl'>PAGES</h2>
              <div className='mt-4 text-sm xl:text-xl lg:text-xl md:text-xl sm:text-sm'>
                <div className='mb-1 xl:mb-2 lg:mb-2 md:mb-2 whitespace-nowrap'>About Us</div>
                <div className='mb-1 xl:mb-2 lg:mb-2 md:mb-2 whitespace-nowrap'>Pricing</div>
                <div className='mb-1 xl:mb-2 lg:mb-2 md:mb-2 whitespace-nowrap'>Contact</div>
                <div className='mb-1 xl:mb-2 lg:mb-2 md:mb-2 whitespace-nowrap'>Privacy Policy</div>
                <div className='mb-1 xl:mb-2 lg:mb-2 md:mb-2 whitespace-nowrap'>Terms of Use</div>
              </div>
            </div>
            <div className='flex-grow'>
              <h2 className='font-bold xl:text-2xl lg:text-2xl md:text-2xl'>NEWSLETTERI</h2>
              <div className='mt-4 xl:mt-8 lg:mt-8 md:mt-8'>
                <div className='mb-4'>
                  <input className='rounded-3xl text-xl font-bold px-4 py-2 text-white bg-purple-700 bg-opacity-50 placeholder:text-white w-full' placeholder='Email'/>
                </div>
                <button className="px-6 xl:px-12 lg:px-12 md:px-10 py-2 font-bold rounded-3xl bg-purple-600 duration-300 hover:bg-white hover:text-slate-950">SEND</button>
                <div className='mt-6'>
                  <img src="/assets/images/social_links.png"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div  className='my-4 xl:my-12 lg:my-12 md:my-10 h-[2px] bg-white m'></div>

        <h2 className='text-center xl:text-xl lg:text-xl md:text-xl'>Powered by the intraIntel.ai</h2>
      </div>      


    </div>
  );
}

export default App;
