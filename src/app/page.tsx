import React from "react";
import Image from "next/image";
import Nav from "./components/navbar/navbar";
import Maincard from "./components/mainCard/mainCard";
import About from "./components/about/aboutCard";
import Services from "./components/service/serviceCard";
import MyPortfolio, { Portfolio } from "./components/myportfolio/portfolio";
import CoreSkills from "./components/coreskills/coreSkills";
import Testimonials from "./components/testimonials/testimonial";
import Design, { DesignInsp } from "./components/designInspriration/dInspire";
import GetInTouch from "./components/getInTouch/getInTouch";
import Footer from "./components/footer/footer";
import Head from "next/head";
const Home: React.FC = () => {
  return (
    <main className="">
      <div id="home">
        <Nav />
      </div>
      <div className="bg-[#FFD4D0]">
        <Maincard />
      </div>
      <div id='about' className="bg-[#1F1F1F]">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="portfolio" className="bg-[#FFD4D0]">
        <Portfolio />
      </div>
      <div className="bg-[#F7F7F7]">
        <div className="relative flex justify-evenly flex-wrap gap-10 mx-10 lg:gap-3 lg:mx-3 xl:gap-10 xl:mx-10">
          <MyPortfolio imageSrc="/portfolio/port1.png" text="Port01" h2="Educational Platform" parapgraph="Web Design / Usability Testing" imgSrc="/portfolio/send.png" />
          <MyPortfolio imageSrc="/portfolio/port2.png" text="Port02" h2="Travel App Design" parapgraph="UX Research / App Design " imgSrc="/portfolio/send.png" />
          <MyPortfolio imageSrc="/portfolio/port3.png" text="Port03" h2="Personal Page" parapgraph="Web Design " imgSrc="/portfolio/send.png" />
          <MyPortfolio imageSrc="/portfolio/port4.png" text="Port04" h2="Furniture Mobile App" parapgraph="App Design " imgSrc="/portfolio/send.png" />
          <MyPortfolio imageSrc="/portfolio/port5.png" text="Port05" h2="Coffee House Landing Page" parapgraph="UX Research / Web Design " imgSrc="/portfolio/send.png" />
          <MyPortfolio imageSrc="/portfolio/port6.png" text="Port06" h2="Home Services Page" parapgraph="Web Design / Marketing" imgSrc="/portfolio/send.png" />
        </div>
      </div>

      <div className="bg-[#F7F7F7]">
        <CoreSkills />
      </div>
      <div>
        <Testimonials />
      </div>
      <div id="blog">
        <DesignInsp />
      </div>
      <div className="bg-[#F7F7F7]">


<div className="flex justify-evenly flex-wrap gap-x-5 mx-10 lg:gap-x-3 lg:mx-5">
<Design imgSrc="/designInspire/desInspire01.png" alt="design01" date="August 15, 2023 / UX" h1="Typography Tips for Design Success" 
text="Dive into the world of web typography and discover how to choose, pair, and optimize fonts for compelling and readable digital designs."/>

<Design imgSrc="/designInspire/desInspire02.png" alt="design02" date="August 15, 2023 / UX" h1="Color Psychology in UX" 
text="Explore how color choices impact user emotions and decision-making in UX design."/>

<Design imgSrc="/designInspire/desInspire03.png" alt="design03" date="August 15, 2023 / UX" h1="Boosting UX with Microinteractions" 
text="Discover the power of microinteractions in enhancing user experience and engagement."/>

</div>
<div>
<GetInTouch />
</div>
</div>
<div>
  <Footer />
</div>
    </main>
  );
};
export default Home;
