import { Hero, Header, Layout } from "../../components";

import "./index.css";

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <Header />
        <Hero />
      </div>
    </Layout>
  );
};

export default Home;
