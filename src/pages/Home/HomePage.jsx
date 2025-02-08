import BioSection from "../../components/Bio/BioSection";
import Hero from "../../components/Hero/Hero";
import ProjectsSection from "../../components/Projects/ProjectsSection";
import Services from "../../components/Services/Services";
import styles from "./HomePage.module.css";
import Testimonials from "../../components/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <BioSection />
      <Services />
      <Testimonials />
      <ProjectsSection />
    </div>
  );
};

export default HomePage;
