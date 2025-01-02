import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Companies from "../../components/Companies";
import Courses from "../../components/Course";
import Achievement from "../../components/Achievment";
import Categories from "../../components/Categories";
import FeedBack from "../../components/FeedBack";
import CallToAction from "../../components/CallToAction";
import Footer from "../../components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
      <FeedBack />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
