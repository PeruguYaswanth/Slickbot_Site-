import image1 from './assets/image1.png'
import { useEffect ,useRef } from 'react'
import React from'react'
import './App.css'
import './slickbot.css'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'
import image5 from './assets/image5.png'
import image6 from './assets/image6.png'
import image7 from './assets/image7.png'
import image9 from './assets/image9.png'
import image10 from './assets/image10.png'
import image11 from './assets/image11.png'
import image12 from './assets/image12.png'
import image13 from './assets/image13.png'
import image14 from './assets/image14.png'
import image15 from './assets/image15.png'
import image20 from './assets/image20.png'
import image25 from './assets/image25.png'
import image31 from './assets/image31.png'
import image99 from './assets/image99.png'
import image94 from './assets/image94.png'
import image93 from './assets/image93.png'
import image92 from './assets/image92.png'
import image91 from './assets/image91.png'
import image00 from './assets/image00.png'


function App() {
  return (
    <>
    <div className='full'>
        <div className='body1'>
          <img className='img4'src={image1} alt="logo"/>
          <div className='words'>
            <ul>
              <li>.Special Offer Ending Soon </li>
              <li>-Network Intelligence</li>
              <li>.Check Out Part</li>
              <li>-New Features Are Live </li>
            </ul>
            <button>Menu</button>
            <img  className='img3'src={image3} alt="logo3"/>
          </div>
        </div>
      <div className='body0'>
        <div className='bodyo0'>
          <img  src={image4} alt="logo3"/>
          <img  src={image5} alt="logo3"/>
          <img  src={image6} alt="logo3"/>
          <img  src={image7} alt="logo3"/>
        </div>
      </div>
      <div className='body9'>
        <div className="face">
          <img src={image9} alt="face" />
        <div className="eye left">
        <div className="pupil"></div>
        </div>
        <div className="eye right">
        <div className="pupil"></div>
        </div>
        </div>

        <div className='words1'>
          <h2>ABOUT US</h2>
          <h2 className='spann'>
          <span>W</span><span>E  </span><span>A</span><span>R</span><span>E</span><span>A</span><span>D</span><span>I</span>
          <span>G</span><span>I</span><span>T</span><span>A</span><span>L</span><span>P</span><span>R</span><span>O</span><span>D</span><span>U</span><span>C</span>
          <span>T</span><span>I</span><span>O</span><span>N</span><span>T</span><span>E</span><span>A</span><span>M</span>
          </h2>
          <p className="para">
           {"At SlickBot Technologies, we empower businesses with end-to-end SAP services that drive efficiency, innovation, and growth. From seamless SAP implementation to smooth ECC to S/4HANA migration, our expertise covers every stage of your digital transformation journey."
              .split("")
              .map((char, i) => (
              <span key={i}>{char === " " ? "\u00A0" : char}</span>
             ))}
          </p>

          <p className='contact'>Contact Us</p>
        </div>
        
      </div>
      <div  className='for-images'>
        <h2 className='our'>[ Our Services ]</h2>
        <div className='img10'>
          <div className='img101'>
            <h2 className='head10'>SAP Implementation Service</h2>
            <p>
            We deliver end-to-end SAP implementations tailored to
             your business needs, ensuring seamless deployment,
              scalability, and long-term success.
            </p>
            </div>
          <img  src={image10} alt='imagey1'/>
        </div>
        <div className='img11'>
          <div className='img111'>
            <h2 className='head11'>SAP Custom Development</h2>
            <p>Our custom development services create tailored SAP solutions and applications to fit unique business requirements, enhancing efficiency and value.
            </p>
          </div>
          <img src={image11} alt='imagey1'/>
       

        </div>
        <div className='img12'>
          <div className='img112'>
            <h2 className='head12'>SAP Support & AMS</h2>
            <p>We provide 24/7 SAP support and application management to ensure system stability, reduce downtime, and keep your SAP landscape optimized.
            </p>
          </div>
          <img src={image12} alt='imagey1'/>
        </div>
        <div className='img13'>
          <div className='img113'>
            <h2 className='head13'>SAP Could Enablement</h2>
            <p>We help businesses migrate and optimize SAP systems on the cloud, ensuring scalability, security, and future-ready digital transformation.
            </p>
          </div>
         <img src={image13} alt='imagey1'/>
        </div>
        <div className='img14'>
          <div className='img114'>
            <h2 className='head14'>System Integration & Migration</h2>
            <p>We integrate SAP with enterprise systems and execute smooth migrations, enabling unified operations and improved efficiency.
          </p>
          </div>

          <img src={image14} alt='imagey1'/>
        </div>
        <div className='img15'>
           <div className='img115'>
              <h2 className='head15'>BTP & U15 Fiori Services </h2>
              <p>
We build modern, user-friendly apps on SAP BTP with UI5 and Fiori, enhancing user experience and driving innovation.
              </p>
            </div>

           <img src={image15} alt='imagey1'/>
        </div>
      </div>
      <div className="another1">
        <h2>[ EVENTS ]</h2>
      </div>
      <div className="another">
        <img className='i' src={image20} alt='imagey1'/>
          <div className='ush'>
            <img className='t'src={image25} alt='imagey8'/>
            <h1>Unity in Diversity</h1>
            <p>At Slickbot, we embrace a diverse culture that values unity, celebrating both our nation and our rich cultural heritage together.
</p>
        </div>
      </div>
      <div className="another2">
        <h2>
        [ ANSWERING<br></br>
        YOUR QUESTIONS ]</h2>
        <p>Got more questions? Send us your enquiry below</p>
        <p>Get in touch</p>
      </div>
      <div className="border9">
        <span>What Services does SlickBot Technologies Offer?</span><i>+</i>
      </div>
      <div className="border9">
        <span>What is AUTOMAAC ?</span><i>+</i>
      </div>
      <div className="border9">
        <span>How does Automation Benifit SAP migration?</span><i>+</i>
      </div>
      <div className="border9">
        <span>Why Choose SlickBot Technologies as your SAP patener?</span><i>+</i>
      </div>
      <div className="border10">
        <img src={image99} alt="nt"/>
        <span>100k+ Happy Users</span>
      </div>
      <div className='tot'>
        <div className='line-st'>
          <p>____</p>
          <p>____</p>
          <p>____</p>
          <p>____</p>
          <p>____</p>
          <p>____</p>
          <p>____</p>
        </div>
        <div className="border11">
          <span>Remind</span><span>YourSelf About</span>
          <div className='bor'>
            <button>Aug</button>
            <button>Fri</button>
            <button>21</button>
            <button>08:01</button>
            <button>Set</button>
          </div>
          <span>Important</span><span>Events</span>
        </div>
      <div className='line-end'>
        <p>____</p>
        <p>____</p>
        <p>____</p>
        <p>____</p>
        <p>____</p>
        <p>____</p>
        <p>____</p>
      </div>
    </div>
    <div className="border12">  
      <span>The only planner withot </span><span>distractions</span>
    </div>
      <div className="got">  
        <span>GOT A PROJECT IN MIND? </span>
      </div>
      <div className="let">  
        <span>LET'S CONNECT</span>
      </div>
      <div className="glob">
        <div className="glob-0"> 
          <img src={image00} alt="glob5"/>
          <div className='again'>
            <p>Working Globally</p><br></br>
            <p>Let's Collabrate</p>
          </div>
        </div>
        <div className="globb">
          <span>WRITE </span>
          <span>A</span>
          <span> MESSAGE</span>
        </div>
        
        <div className="glob-1"> 
          <img src={image00} alt="glob5"/> 
          <div className='again'>
          <p>Your are Visitor</p>
          <span>Welcome aboard</span>
          </div>

          <button>510908</button>
        </div>
      </div>
      <div className="last"> 
        <span>FEEL FREE TO CONNECT  WITH US </span>
        <div className="last-2"> 
          <span>INSTGRAM</span>
          <span>TWITTER</span>
          <span>LINKEDIN</span>
        </div>
      </div>
      <div className="last-1">
        <hr></hr>
        <p>@2026 SlickBot Technologies. All Rights Reserved</p>
      </div>
      </div>
    </>
  )
}

export default App;
