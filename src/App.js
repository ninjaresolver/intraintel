import logo from './logo.svg';
import './App.css';
import { Header } from './layouts/header';
import FeatureCard from './components/featureCard';

function App() {

  return (
    <div className="App text-white">
        <Header/>
        <main className='h-[700px]'>
          {/* main section begin */}
          <div className='relative pt-20'>
            <div className='pl-10 w-auto xl:w-1/2 lg:1/2 md:1/2 mt-32 text-white'>
              <div className='text-left'>
                <h1 className='text-7xl mb-4 font-monoton'>FEATURES</h1>
                <h1 className='text-7xl font-monoton'>THAT EMPOWER</h1>
                <div className='mt-2 text-3xl'>
                  “Experience the Best of AI with IntraIntel.ai”
                </div>
                <div className='mt-8'>
                  <button className='px-5 py-3 rounded-3xl bg-purple-600 shadow-lg shadow-gray-500'>
                    <div className="flex gap-3 items-center">
                      <img src="/assets/icons/play.png" className='h-[16px]'/>
                      <div className='w-[2px] h-[25px] bg-white'></div>
                      <span className='font-bold'>Discover More</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className='absolute right-0 top-32 w-1/2 h-[600px] flex flex-col justify-center'>
              <img src="/assets/images/back.png" className='h-full absolute right-0 top-0 -z-10'/>
              <img src="/assets/images/robot.png" className='h-[500px]'/>
            </div>
          </div>
          {/* main section end */}
        </main>

        {/* Our features */}
        <div className='mt-24 px-32'>
          <h1 className='text-white text-center text-3xl font-bold'>Our Features</h1>
          <div className='mt-20'>
            <div className='flex flex-wrap flex-col xl:flex-row lg:flex-row'>
               
               <FeatureCard
                src="/assets/images/mark_ai.png"
                title="Advanced AI & ML"
               >
                <div>Utilize state-of-the-art AI and ML algorithms to craft human-like content tailored to specific questions.</div>
              </FeatureCard>

              <FeatureCard
                src="/assets/images/mark_security.png"
                title="Secure Data Handling"
               >
                <div>Process data within the company's security boundary, ensuring confidentiality and compliance.</div>
              </FeatureCard>

              <FeatureCard
                src="/assets/images/mark_user.png"
                title="User-Centric Design"
               >
                <div>We believe technology should be intuitive. With a user-friendly interface, IntraIntel.ai ensures that you can leverage the power of AI.</div>
              </FeatureCard>

              <FeatureCard
                src="/assets/images/mark_multi_sector.png"
                title="Multi-Sector Expertise"
               >
                <div>From government and medical to research and finance, IntraIntel.ai is versatile.</div>
              </FeatureCard>

              <FeatureCard
                src="/assets/images/mark_integration.png"
                title="Custom Integration"
               >
                <div>Say goodbye to waiting. With our real-time API integrations, IntraIntel.ai ensures rapid data ingestion and immediate content generation.</div>
              </FeatureCard>

              <FeatureCard
                src="/assets/images/mark_ai.png"
                title="Custom Integration"
               >
                <div>Every business or person has unique need need to perform their job, and so is its data.</div>
              </FeatureCard>

            </div>
          </div>
        </div>

        {/* About us */}

        <div className='mt-24 px-32'>
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

        <div className='mt-24 px-32'>
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

      
      <div className='mt-24 px-32'>
          <div className=''>
            <h1 className='text-white text-center text-3xl font-bold'>Pricing</h1>
            <div className='mt-6'>
              <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row gap-4'>
                <div className='p-3 py-8 w-full xl:w-1/3 lg:w-1/3 md:1/3 bg-custom-gradient rounded-lg'>
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
                    <button className='bg-purple-600 text-white font-bold rounded-3xl px-1 py-2'>
                      Get Started Today
                    </button>
                  </div>
                </div>


                <div className='p-3 py-8 w-full xl:w-1/3 lg:w-1/3 md:1/3 bg-custom-gradient rounded-lg'>
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
                    <button className='bg-purple-600 text-white font-bold rounded-3xl px-1 py-2'>
                      Get Started Today
                    </button>
                  </div>
                </div>


                <div className='p-3 py-8 w-full xl:w-1/3 lg:w-1/3 md:1/3 bg-custom-gradient rounded-lg'>
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
                    <button className='bg-purple-600 text-white font-bold rounded-3xl px-1 py-2'>
                      Get Started Today
                    </button>
                  </div>
                </div>
                
              </div>

              

            </div>
          </div>
      </div>

      {/* FAQ */}

      <div className='mt-24 px-32'>
        <h1 className='text-white text-center text-3xl font-bold'>FAQ</h1>
        <div className='mt-20'>
          <div className='mx-auto' style={{ maxWidth: '500px' }}>
            <div className='flex justify-center mb-4 items-center gap-5'>
              <div className='font-bold underline'>Lorem ipsum dolor sit amet.</div>
              <img src="/assets/icons/angle_down.png" className="h-4" />
            </div>
            <div className='flex justify-center mb-4 items-center gap-5'>
              <div className='font-bold underline'>Lorem ipsum dolor sit amet.</div>
              <img src="/assets/icons/angle_down.png" className="h-4" />
            </div>
            <div className='flex justify-center mb-4 items-center gap-5'>
              <div className='font-bold underline'>Lorem ipsum dolor sit amet.</div>
              <img src="/assets/icons/angle_down.png" className="h-4" />
            </div>
          </div>
        </div>
      </div>

         {/* FAQ */}

         <div className='mt-24 px-32'>
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
                <button className="px-4 py-2 font-bold rounded-3xl bg-purple-600">Send Message</button>
              </div>
            </div>  
          </div>
        </div>
      </div>

      {/* footer */}

      <div className='h-[600px] relative mt-32 px-16 xl:px-32 lg:px-32 md:px-32 pt-32 pb-16 text-left'>
        <img src="/assets/images/footer-back.png" className='absolute top-0 right-0 h-full -z-10'/>
        <div className='flex gap-12'>
          <div className='text-left w-1/3'>
            <img src="/assets/images/logo.png" className='w-[160px]'/>
            <div className='mt-6'>
              <div className="text-white text-xl font-bold ">
                  INTRAINTEL<span className="text-purple-600">.AI</span>
              </div>
            </div>

          </div>
          <div className='flex-grow flex gap-12'>
            <div>
              <h2 className='font-bold text-2xl'>PAGES</h2>
              <div className='mt-4 text-xl'>
                <div className='mb-2'>Home</div>
                <div className='mb-2'>About Us</div>
                <div className='mb-2'>Pricing</div>
                <div className='mb-2'>Contact</div>
                <div className='mb-2'>Privacy Policy</div>
                <div className='mb-2'>Terms of Use</div>
              </div>
            </div>
            <div className='flex-grow'>
              <h2 className='font-bold text-2xl'>NEWSLETTERI</h2>
              <div className='mt-8'>
                <div className='mb-4'>
                  <input className='rounded-3xl text-xl font-bold px-4 py-2 text-white bg-purple-700 bg-opacity-50 placeholder:text-white w-full' placeholder='Email'/>
                </div>
                <button className="px-12 py-2 font-bold rounded-3xl bg-purple-600">SEND</button>
                <div className='mt-6'>
                  <img src="/assets/images/social_links.png"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div  className='my-12 h-[2px] bg-white m'></div>

        <h2 className='text-center text-xl'>Powered by the intraIntel.ai</h2>
      </div>      


    </div>
  );
}

export default App;
