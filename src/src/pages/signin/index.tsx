import { useRef, useEffect } from "react";

import {
  Hero,
  Footer,
  Header,
  Review,
  Example,
  Feature,
  Question,
  Experience,
} from "../../components";

import "./index.scss";

const SignIn = () => {
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
    <div ref={containerRef} className="signin-container">
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

export default SignIn;
