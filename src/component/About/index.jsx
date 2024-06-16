import "./About.css";
import { profile2 } from "../../images";

const About = () => {
  return (
    <section id="about">
      <div className="section_Wrapper about__container">
        <div className="me__container blur-effect">
          <div className="photo__container">
            <img src={profile2} alt="profile" className="" />
          </div>
        </div>
        <div className="section_header">
          <h2 className="primary_title">About Me</h2>
          <h1 className="title">
            I am <span className="color_primary">Kashish Inamadar</span>
          </h1>
          <p className="text_muted description">
            Experienced Full Stack Developer with a passion for creating
            dynamic, intuitive, and responsive applications. Proficient in
            multiple programming languages and frameworks, as well as database
            design and management. Strong problem-solving and analytical skills,
            and a track record of delivering high-quality code on time and on
            budget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
