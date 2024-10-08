import Image from "next/image";
import meetingImage from '@/public/images/meeting1.png'; 
// import docker from '@/public/images/docker.png'; 
// import amplitude from '@/public/images/amplitude.png';
// import atlassian from '@/public/images/atlassian.png';
// import basecamp from '@/public/images/basecamp.png';
// import dropbox from '@/public/images/dropbox.png';
// import thematic from '@/public/images/thematic.png';
import FeatureCard from '@/components/FeatureCard';
import aw from '@/public/images/aw.png';  // New image
import ess from '@/public/images/ess.png';  // New image
import rta from '@/public/images/rta.png';  // New image
import ced from '@/public/images/ced.png';  // New image
import aar from '@/public/images/aar.png';  // New image
import { FaCogs, FaUser, FaChartLine, FaDatabase, FaChartPie } from 'react-icons/fa'; // Importing icons
import HowItWorksPage from '@/components/HowItWorksPage';
import FAQs from '@/components/FAQs';
// import PricingPlan from '@/components/PricingPlan';
import Footer from '@/components/Footer';






export default function Home() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <div className="logo">HRXpert</div>
          <ul className="nav-links">
            <li><a href="#PowerfullFeature">Powerfull-Features</a></li>
            <li><a href="#How">How-it-works</a></li>
            <li><a href="#Faqs">FAQs</a></li>
            <li><a href="#Price">Pricing-Plan</a></li>
            {/* <li><a href="#">About</a></li> */}
          </ul>
          <div className="nav-buttons">
            {/* <button className="login-btn">Log In</button> */}
            <a href='#Footer' className="demo-btn"> Book Free Demo</a>
          </div>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1> Revolutionize Your HR Tasks with Our </h1>
            <h1><span className="text-6xl !text-5xl">Smart Assistant</span></h1>
            <p className="mt-4">Streamline recruitment, manage talent, and automate HR processes effortlessly.</p>
            {/* <button className="get-started-btn">Get Started</button> */}
          </div>
          <div className="hero-image">
            <Image src={meetingImage} alt="Meeting" className="rounded-lg"/>
          </div>
        </div>
      </section>

      {/* <section className="trusted-companies">
        <p> <b>More than 100+ companies trusted us</b></p>
        <div className="companies-logos">
          <div className="company">
            <Image src={docker} alt="Docker Icon" />
            <span>Docker</span>
          </div>
          <div className="company">
            <Image src={amplitude} alt="Amplitude Icon" />
            <span>Amplitude</span>
          </div>
          <div className="company">
            <Image src={atlassian} alt="Atlassian Icon" />
            <span>Atlassian</span>
          </div>
          <div className="company">
            <Image src={basecamp} alt="Basecamp Icon" />
            <span>Basecamp</span>
          </div>
          <div className="company">
            <Image src={dropbox} alt="Dropbox Icon" />
            <span>Dropbox</span>
          </div>
          <div className="company">
            <Image width={50} height={5} src={thematic} alt="Thematic Icon" />
            <span>Thematic</span>
          </div>
        </div>
      </section> */}

      {/* POWERFUL FEATURES Section */}
      <section className="features-section mt-20"  id='PowerfullFeature'>
        {/* Bold and underlined heading */}
        <h2 className="font-bold mb-10">
    POWERFUL FEATURES
  </h2>
        {/* "Empower Your Workforce With Advanced Tools" - Bold and large text */}
        <h3 className="font-semibold text-4xl mt-6 mb-2 gradient-text" >Empower Your Workforce With Advanced Tools</h3>

        {/* "Boost Efficiency, Productivity, and Employee Growth with Our Innovative HR Tools." - Small text */}
        <p className="text-sm mt-10"><b>Boost Efficiency, Productivity, and Employee Growth with Our Innovative HR Tools.</b></p>

       {/* Feature Cards */}
      <div className="feature-cards-container mt-8">
        <FeatureCard 
          title="Automated Workflows" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." 
          image={aw}  // Change from icon to image
          icon={<FaCogs />}
        />
        <FeatureCard 
          title="Employee Self Service" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." 
          image={ess}  // Change from icon to image
          icon={<FaUser />}
        />
        <FeatureCard 
          title="Real-Time Analytics" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." 
          image={rta}  // Change from icon to image
          icon={<FaChartLine />}
        />
        <FeatureCard 
          title="Centralized Employee Data" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." 
          image={ced}  // Change from icon to image
          icon={<FaDatabase />} 
        />
        <FeatureCard 
          title="Advanced Analytics and Reporting" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." 
          image={aar}  // Change from icon to image
          icon={<FaChartPie />}
        />
      </div>
      </section>


         <div id='How'>
      <HowItWorksPage />
      </div> 


      <div id='Faqs'>
      <FAQs />
      </div>

         <div id='Price'>
      {/* < PricingPlan /> */}
      </div>



      <div id='Footer'>
      <Footer />[]
      </div>

    </div>
  );
}
