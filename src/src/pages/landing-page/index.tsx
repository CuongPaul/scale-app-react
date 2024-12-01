import { useRef, useEffect } from "react";

import { LandingPage as LandingPageComponents } from "../../components";

import "./index.scss";

const { Hero, Footer, Header, Review, Example, Feature, Question, Experience } =
  LandingPageComponents;

const LandingPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const widthByDesign = 1920;
      const { innerWidth } = window;

      const proportion = Math.floor((innerWidth * 10) / widthByDesign) / 10;

      containerRef.current.style.setProperty("--proportion", `${proportion}`);
    }
  }, []);

  return (
    <div ref={containerRef} className="landing-page-container">
      <Header />
      <Hero />
      <Experience />
      <Example />
      <Feature />
      <Question />
      <Review />
      <Footer />
    </div>
  );
};

export default LandingPage;
