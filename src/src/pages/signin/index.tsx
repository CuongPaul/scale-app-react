import {
  Hero,
  Footer,
  Header,
  Layout,
  Review,
  Example,
  Feature,
  Question,
  Experience,
} from "../../components";

import "./index.scss";

const Signin = () => {
  return (
    <Layout>
      <div className="signin-container">
        <Header />
        <Hero />
        <Experience />
        <Example />
        <Feature />
        <Question />
        <Review />
        <Footer />
      </div>
    </Layout>
  );
};

export default Signin;
