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

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
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

export default Home;
